<template>
  <div
    class="leivii-block geek"
    :class="[blockClass, { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="demo-content">
      <leivii :data="data" />
      <div class="description" v-if="$slots.description">
        <slot name="description"></slot>
      </div>
    </div>
    <div class="meta" ref="meta">
      <div class="code-content">
        <slot name="source"></slot>
      </div>
    </div>
    <div
      class="leivii-block-control"
      :class="{ 'is-fixed': fixedControl }"
      :style="{ 'width': fixedControl ? `${codeContentWidth}px` : 'unset' }"
      ref="control"
      @click="isExpanded = !isExpanded"
    >
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }, 'icon']"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
      <span class="run-action" @click.stop="runCode">{{ runText }}</span>
    </div>
    <el-dialog fullscreen show-close lock-scroll custom-class="leivii-editor-dialog" :visible.sync="dialogVisible">
      <component v-if="dynamicComponent" :is="dynamicComponent" :data="editorData" @change="handleSave">
        <div slot="title">
          <div class="back-button fs-xl" @click="handleClose">
            <i class="el-icon-back"></i> {{ $transMsg('lang.action.back') }}
          </div>
        </div>
      </component>
    </el-dialog>
  </div>
</template>

<script type="text/babel">
import Vue from 'vue'
import Leivii from 'leivii'
import axios from '../../common/http'
import i18n from '../../common/i18n'
import store from '../../common/store'
import { setupMock } from '../../common/mock'
// import LeiviiEditor from 'leivii-editor'
import defaultLang from './i18n/default_lang.json'

export default {
  data() {
    return {
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      dialogVisible: false,
      codeContentWidth: 0,
      scrollParent: null,
      dynamicComponent: null
    }
  },
  props: {
    content: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    data() {
      return eval(`(() => (${decodeURI(this.content)}))()`)
    },
    compoLang() {
      return this.options.locales || defaultLang
    },
    langConfig() {
      return this.compoLang.filter(config => config.lang === this.$lang)[0]['leivii-block']
    },
    blockClass() {
      return `demo-${this.$lang} demo-${this.$router.currentRoute.path
        .split('/')
        .pop()}`
    },
    iconClass() {
      return this.isExpanded ? 'caret-top' : 'caret-bottom'
    },
    controlText() {
      return this.isExpanded ? this.langConfig['hide-text'] : this.langConfig['show-text']
    },
    runText() {
      return this.langConfig['run-text']
    },
    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },
    codeAreaHeight() {
      // if (this.$el.getElementsByClassName('description').length > 0) {
      //   return (
      //     this.$el.getElementsByClassName('description')[0].clientHeight +
      //     this.$el.getElementsByClassName('code-content')[0].clientHeight +
      //     20
      //   )
      // }
      return this.$el.getElementsByClassName('code-content')[0].clientHeight
    },
    hasRoot() {
      return this.data?.$type === 'geek-page'
    },
    editorData() {
      if (this.hasRoot) return this.data
      return {
        $id: 'geek-page',
        $type: 'geek-page',
        $visible: true,
        $body: [this.data].flat()
      }
    }
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      if (!val) {
        this.fixedControl = false
        this.$refs.control.style.left = '0'
        this.removeScrollHandler()
        return
      }
      setTimeout(() => {
        this.scrollParent = document
        this.scrollParent &&
          this.scrollParent.addEventListener('scroll', this.scrollHandler)
        this.scrollHandler()
      }, 200)
    }
  },
  mounted() {
    setupMock()

    import('leivii-editor').then(module => {
      i18n.locale = this.formatLangCode(this.$lang)
      module.default.locale(this.$lang)

      Vue.use(module.default, {
        store,
        i18n: (...args) => i18n.t(...args),
        fetch: { axios }
      })
      this.dynamicComponent = 'leivii-editor'
    })
  
    this.$nextTick(() => {
      let codeContent = this.$el.getElementsByClassName('code-content')[0]
      this.codeContentWidth = this.$el.offsetWidth
      if (this.$el.getElementsByClassName('description').length === 0) {
        codeContent.style.width = '100%'
        codeContent.borderRight = 'none'
      }
    })
  },
  beforeDestroy() {
    this.removeScrollHandler()
  },
  methods: {
    formatLangCode(code = 'cn') {
      code = code.toLowerCase()
      if (code.indexOf('cn') > -1) return 'cn'
      if (code.indexOf('en') > -1) return 'en'
      return code
    },
    runCode() {
      this.$store.commit('leivii/SET_MODE', 1)
      this.$store.commit('leivii/SET_PAGE_CONFIG', JSON.parse(JSON.stringify(this.editorData)))
      this.$store.dispatch('leivii/setSelected', { $id: this.editorData.$id, $type: this.editorData.$type })
      this.dialogVisible = true
    },
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect()
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : '0'
    },
    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener('scroll', this.scrollHandler)
    },
    handleSave(e) {
      let pageData = e
      if (!this.hasRoot) pageData = e.$body.length > 1 ? e.$body : e.$body[0]

      this.$message({
        iconClass: 'none',
        message: `<pre>${JSON.stringify(pageData, null, 2)}</pre>`,
        center: true,
        dangerouslyUseHTMLString: true
      })
    },
    handleClose() {
      this.dialogVisible = false
      this.$store.commit('leivii/SET_MODE', 0)
      this.$store.commit('leivii/SET_PAGE', { id: 0, status: 1 })
      this.$store.commit('leivii/SET_SELECTED', { $id: '', $type: '', xpath: [], droppable: '', data: {} })
    }
  }
}
</script>
<style lang="stylus" scoped>
.leivii-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin-top: 15px;
  margin-bottom: 15px;
}
.leivii-block.hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
}
.leivii-block code {
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
}
.leivii-block .demo-button {
  float: right;
}
.leivii-block .demo-content {
  padding: 24px;
  >>> .geek-page {
    overflow-x: hidden;
  }
}
.leivii-block .meta {
  background-color: #282c34;
  border: solid 1px #ebebeb;
  border-radius: 3px;
  overflow: hidden;
  height: 0;
  transition: height 0.2s;
}
.leivii-block .meta .code-content {
  margin-top: -0.85rem;
}
.leivii-block .description {
  padding: 0 20px;
  margin-top: 20px;
  box-sizing: border-box;
  border: solid 1px #ebebeb;
  border-radius: 3px;
  font-size: 14px;
  line-height: 22px;
  color: #666;
  word-break: break-word;
  background-color: #fafafa;
}
.leivii-block .leivii-block-control {
  border-top: solid 1px #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fafafa;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
}
.leivii-block .leivii-block-control.is-fixed {
  position: fixed;
  bottom: 0;
  width: 660px;
  z-index: 999;
}
.leivii-block .leivii-block-control .icon {
  font-family: element-icons !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  margin-top: 18px;
  -webkit-font-smoothing: antialiased;
}
.leivii-block .leivii-block-control .caret-top::before {
  content: "";
  position: absolute;
  right: 50%;
  width: 0;
  height: 0;
  border-bottom: 6px solid #ccc;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
}
.leivii-block .leivii-block-control .caret-bottom::before {
  content: "";
  position: absolute;
  right: 50%;
  width: 0;
  height: 0;
  border-top: 6px solid #ccc;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
}
.leivii-block .leivii-block-control i {
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s;
}
.leivii-block .leivii-block-control i.hovering {
  transform: translateX(-40px);
}
.leivii-block .leivii-block-control > span {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  transition: 0.3s;
  display: inline-block;
}
.leivii-block .leivii-block-control .run-action {
  right: 0px;
  color: #409eff;
}
.leivii-block .leivii-block-control:hover {
  color: #409eff;
  background-color: #f9fafc;
}
.leivii-block .leivii-block-control .text-slide-enter,
.leivii-block .leivii-block-control .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
.leivii-block .leivii-block-control .bounce-enter-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.leivii-block .leivii-block-control .control-button {
  line-height: 26px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  padding-left: 5px;
  padding-right: 25px;
}

</style>