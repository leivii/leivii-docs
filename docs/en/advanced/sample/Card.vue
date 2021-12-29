<template>
  <div class="my-card" :class="$classes">
    <div class="card-header">
      <div class="title">{{ $transMsg(title) }}</div>
      <div class="actions">
        <el-button size="small" @click="$emit('add')">{{ $transMsg('lang.action.add') }}</el-button>
      </div>
    </div>
    <div class="geek-card-body">
      <slot v-if="!$body || !$body.length" />
      <leivii :data="$body" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyCard',
  options: {
    name: 'lang.text.card',
    parents: ['all'], // all
    groups: ['container'],
    events: {
      add: 'lang.action.add'
    }
  },
  props: {
    title: {
      type: String,
      clazz: 'I18n',
      placeholder: 'lang.prop.pleaseEnter',
      label: 'lang.prop.label'
    }
  }
}
</script>

<style scoped>
.my-card {
  border-radius: 8px;
  border: 1px solid #efefef;
  overflow: hidden;
  background: #fff;
}
.my-card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 15px;
  background: #053b9d;
}
</style>
