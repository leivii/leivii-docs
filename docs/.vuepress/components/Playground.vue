<template>
  <div class="leivii-playground geek">
    <component v-if="dynamicComponent" :is="dynamicComponent" :data="editorData" @change="handleSave">
      <div slot="title">
        <div class="back-button fs-xl" @click="handleClose">
          <i class="el-icon-back"></i> {{ $transMsg('lang.action.back') }}
        </div>
      </div>
      <template slot="operations">
        <div class="operation" @click="settingDialog = true">
          <i class="icon el-icon-setting" style="margin-top: 2px; font-size: 22px"></i>
        </div>
      </template>
    </component>
    <el-dialog :title="$transMsg('lang.wms.fed.config')" :visible.sync="settingDialog" append-to-body>
      <el-form ref="form" :model="setting" label-width="120px" class="pl pr">
        <el-form-item label="Axios BaseURL">
          <el-input v-model="setting.baseURL" autofocus placeholder="http://"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="settingDialog = false">{{ $transMsg('lang.action.cancel') }}</el-button>
        <el-button type="primary" @click="handleSetting">{{ $transMsg('lang.action.confirm') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/babel">
import Vue from 'vue'
import axios from '../common/http'
import i18n, { messages } from '../common/i18n'
import store from '../common/store'
import { setupMock } from '../common/mock'

export default {
  data() {
    return {
      dynamicComponent: null,
      settingDialog: false,
      editorData: {
        $id: 'geek-page',
        $type: 'geek-page',
        $visible: true,
        $body: [{
          "$id": "geek-flex-container-iGdG0F6AKvRM",
          "$type": "geek-flex-container",
          "$visible": true,
          "$body": [
            {
              "$id": "geek-icon-Qq38nplauFXo",
              "$type": "geek-icon",
              "$visible": true,
              "iconClass": "logo",
              "$classes": null,
              "title": "",
              "size": 150
            },
            {
              "$id": "geek-text",
              "$type": "geek-text",
              "text": "EI VII",
              "highlight": {
                "start": 0,
                "end": 0
              },
              "$classes": null,
              "$visible": true,
              "fontSize": "100px",
              "color": "#1230B4"
            }
          ],
          "$classes": "bg-color-white p-xl",
          "align": "flex-end",
          "justify": "center"
        }]
      },
      setting: {
        baseURL: ''
      }
    }
  },
  mounted() {
    setupMock()

    import('leivii-editor').then(module => {
      i18n.locale = this.formatLangCode(this.$lang)
      module.default.locale(this.$lang, messages[i18n.locale])

      Vue.use(module.default, {
        store,
        i18n: (...args) => i18n.t(...args),
        fetch: { axios }
      })
      this.dynamicComponent = 'leivii-editor'
      this.runCode()
    })
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

      let baseURL = localStorage.getItem('baseURL')
      if (baseURL) {
        this.setting.baseURL = baseURL
        axios.defaults.baseURL = baseURL
      }
    },
    handleSave(e) {
      let pageData = e
      if (!this.hasRoot) pageData = e.$body.length > 1 ? e.$body : e.$body[0]

      console.log(JSON.stringify(pageData, null, 2))

      this.$message({
        iconClass: 'none',
        message: `<pre>${JSON.stringify(pageData, null, 2)}</pre>`,
        center: true,
        dangerouslyUseHTMLString: true
      })
    },
    handleSetting() {
      this.settingDialog = false
      axios.defaults.baseURL = this.setting.baseURL
      localStorage.setItem('baseURL', this.setting.baseURL)
    },
    handleClose() {
      history.back()
    }
  }
}
</script>
<style lang="stylus" scoped>
.leivii-playground {
  position: fixed;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>