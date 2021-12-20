---
title: 扩展props
---

# 扩展props

Props 用来描述数据结构，是 Leivii 的核心设计之一，已被使用在组件和编辑器的各个方面。

## 简介

为了更好的描述数据、服务于编辑器，我们在 Vue Props 的基础上，添加了更多配置项，统称为 PropAPI。对应的 `ts` 声明如下：

```ts
interface PropOptions<T=any> {
  /** 类型 */
  type?: PropType<T>
  /** 必填 */
  required?: boolean
  /** 默认值 */
  default?: T | null | undefined | (() => T | null | undefined);
  /** 标题 */
  label?: string
  /** 值的可选项 */
  options?: SelectOptions[]
  /** 显示条件表达式，如 '{{type}} = dict' */
  boolean?: boolean
  /** 指定属性编辑类 */
  clazz?: string | object
  /** 指定数组元素编辑类 */
  itemClazz?: string
  /** 指定对象值的编辑类 */
  valueClazz?: string
  /** 是否支持表达式 */
  isExpression?: boolean
  /** 是否显示到对象标题 */
  title?: boolean
  /** 编辑器忽略 */
  ignore: boolean
}
```

## 描述组件属性

[按钮](../components/basic/button) 组件的 `props` 配置：

```js
props: {
  $body: {
    ignore: true
  },
  text: {
    type: String,
    clazz: 'I18n',
    label: '文本'
  },
  icon: {
    type: String,
    label: '图标'
  },
  type: {
    type: String,
    options: [{label: '主色', value: 'primary'}, {label: '成功', value: 'success'}, {label: '警告', value: 'warning'}, {label: '危险', value: 'danger'}, {label: '信息', value: 'info'}, {label: '文本', value: 'text'}],
    label: '类型'
  },
  size: {
    type: String,
    options: [{label: '迷你', value: 'mini'}, {label: '小', value: 'small'}, {label: '正常', value: 'medium'}],
    label: '尺寸'
  },
  authCode: {
    type: String,
    clazz: 'Auth',
    label: '权限'
  },
  disabled: {
    type: Boolean,
    isExpression: true,
    default: false,
    label: '禁用'
  }
}
```

Leivii 解析如下图。

![按钮配置](../assets/img/button.png)

## 描述接口文档

`$message` 接口描述，其中 `clazz` 使用 `PropAPI` 嵌套的方式描述：

```js
Leivii.API.registDoc('$message', {
  method: '提示',
  params: [{
    label: '选项',
    type: Object,
    clazz: {
      type: {
        label: '类型',
        type: String,
        options: [{label: '成功', value: 'success'}, {label: '警告', value: 'warning'}, {label: '信息', value: 'info'}, {label: '错误', value: 'error'}]
      },
      message: {
        label: '提示内容',
        type: String,
        clazz: 'I18n'
      }
    }
  }]
})
```
