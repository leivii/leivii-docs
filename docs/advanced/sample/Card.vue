<template>
  <div class="my-card" :class="$classes">
    <div class="card-header">
      <div class="title">{{ $transMsg(title) }}</div>
      <div class="actions">
        <el-button size="small" @click="$emit('add')">添加</el-button>
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
    name: '卡片',
    parents: ['all'], // all
    groups: ['container'],
    events: {
      add: '添加'
    }
  },
  props: {
    title: {
      type: String,
      clazz: 'I18n',
      placeholder: '请输入标题',
      label: '标题'
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
