import { API } from 'leivii'

API.registPlugin('demo', {
  @API.doc('获取DEMO数据')
  getData() {
    return new Promise(resolve => resolve({ text: 'Hello World from Demo Plugin!' }))
  },
  @API.doc('DEMO方法')
  doThing() {
    this.$message({ type: 'success', message: '我是demo方法' })
  }
}, '示例')