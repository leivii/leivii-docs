---
title: 注册文档
---

# 注册文档

Leivii 通过注册文档，为组件的方法提供国际化描述。

::: tip 注册文档的方法
```ts
// 装饰器
Leivii.API.doc(method: string, ...params: string[] | object[])

// 接口
Leivii.API.registDoc(name: string, config: object | false)
```
:::

在添加处理器时，选中组件后方法列表将读取注册的描述文档，显示为方法描述和原来的方法名：

::: img 方法列表
../../assets/img/doc-1.png
:::

## 注册文档格式

注册文档时，需要指定方法名和参数描述。参数描述格式参考 [PropAPI](./props)。

```js
{
  method: '请求接口',
  params: [{ label: '选项', type: Object, clazz: 'AxiosInput' }]
}
```

## 通过装饰器添加文档

为了方便开发者编写组件，文档与组件在一起维护，Leivii 支持通过装饰器 `@doc` 的方式，为方法添加文档。

```js
import { Leivii } from 'leivii-editor'

export default {
  methods: {
    // 私有方法
    @Leivii.API.doc(false)
    beforeUpdateDataSource() {}，
    // 方法名，支持简写为字符串
    @Leivii.API.doc('获取数据')
    loadData() {},
    // 参数描述，支持简写为字符串
    @Leivii.API.doc('删除一行', '当前行数据')
    removeItem(row) {}
    // 支持混写，其中参数描述，使用了 PropApi 的方式
    @Leivii.API.doc('获取分页信息', { label: '当前页字段', type: String, default: 'currentPage' }, { label: '条数字段', type: String, default: 'pageSize' })
    getPagination(page = 'currentPage', size = 'pageSize') {},
  }
}
```

## 通过 API 注册文档

Leivii 也支持通过 API 的方法注册文档描述，如 `mixin` 中注入的方法，和引入 `element-ui` 等外部框架附加在原型上的方法。

```js
import { Leivii } from 'leivii-editor'

Leivii.API.registDoc('$transMsg', false)
Leivii.API.registDoc('getDataSource', { method: '获取数据源' })
Leivii.API.registDoc('updateDataSource', { method: '更新数据源', params: [{ label: '选项', type: Object, valueClazz: 'ParamPicker' }, { ignore: true }] })
Leivii.API.registDoc('setDataSource', { method: '设置数据源', params: [{ label: '键', type: String }, { label: '值', type: Object, valueClazz: 'ParamPicker' }] })
Leivii.API.registDoc('setRootDataSource', { method: '设置根数据源', params: [{ label: '键', type: String }, { label: '值', type: Object, valueClazz: 'ParamPicker' }] })

Leivii.API.registDoc('$alert', { method: '警告框', params: [{ label: '内容', type: String, clazz: 'I18n' }, { label: '标题', type: String, clazz: 'I18n' }, { label: '选项', type: Object }]})
Leivii.API.registDoc('$confirm', { method: '确认框', params: [{ label: '内容', type: String, clazz: 'I18n' }, { label: '标题', type: String, clazz: 'I18n' }, { label: '选项', type: Object }]})
Leivii.API.registDoc('$prompt', { method: '显示提示框', params: [{ label: '内容', type: String, clazz: 'I18n' }, { label: '标题', type: String, clazz: 'I18n' }, { label: '选项', type: Object }]})
Leivii.API.registDoc('$message', { method: '提示', params: [{ label: '选项', type: Object, clazz: { type: { label: '类型', type: String, options: [{label: '成功', value: 'success'}, {label: '警告', value: 'warning'}, {label: '信息', value: 'info'}, {label: '错误', value: 'error'}] }, message: { label: '提示内容', type: String, clazz: 'I18n' } } }] })
```
