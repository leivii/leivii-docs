---
title: 按钮
---

# 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

::: leivii
``` js
{
  $id: 'geek-flex-container',
  $type: 'geek-flex-container',
  $visible: true,
  wrap: 'wrap',
  $body: [{
    $id: 'geek-button-0',
    $type: 'geek-button',
    $visible: true,
    text: '默认按钮'
  }, {
    $id: 'geek-button-1',
    $type: 'geek-button',
    $visible: true,
    text: '主要按钮',
    type: 'primary'
  }, {
    $id: 'geek-button-2',
    $type: 'geek-button',
    $visible: true,
    text: '成功按钮',
    type: 'success'
  }, {
    $id: 'geek-button-3',
    $type: 'geek-button',
    $visible: true,
    text: '信息按钮',
    type: 'info'
  }, {
    $id: 'geek-button-4',
    $type: 'geek-button',
    $visible: true,
    text: '警告按钮',
    type: 'warning'
  }, {
    $id: 'geek-button-5',
    $type: 'geek-button',
    $visible: true,
    text: '危险按钮',
    type: 'danger'
  }]
}
```
:::

## 禁用状态

按钮不可用状态。

::: leivii
``` js
{
  $id: 'geek-flex-container',
  $type: 'geek-flex-container',
  $visible: true,
  wrap: 'wrap',
  $body: [{
    $id: 'geek-button-0',
    $type: 'geek-button',
    $visible: true,
    disabled: true,
    text: '默认按钮'
  }, {
    $id: 'geek-button-1',
    $type: 'geek-button',
    $visible: true,
    disabled: true,
    text: '主要按钮',
    type: 'primary'
  }, {
    $id: 'geek-button-2',
    $type: 'geek-button',
    $visible: true,
    disabled: true,
    text: '成功按钮',
    type: 'success'
  }, {
    $id: 'geek-button-3',
    $type: 'geek-button',
    $visible: true,
    disabled: true,
    text: '信息按钮',
    type: 'info'
  }, {
    $id: 'geek-button-4',
    $type: 'geek-button',
    $visible: true,
    disabled: true,
    text: '警告按钮',
    type: 'warning'
  }, {
    $id: 'geek-button-5',
    $type: 'geek-button',
    $visible: true,
    disabled: true,
    text: '危险按钮',
    type: 'danger'
  }]
}
```
:::

## 文字按钮

没有边框和背景色的按钮。

::: leivii
```js
{
  $id: 'geek-flex-container',
  $type: 'geek-flex-container',
  $visible: true,
  $body: [{
    $id: 'geek-button-0',
    $type: 'geek-button',
    $visible: true,
    text: '文字按钮',
    type: 'text'
  }, {
    $id: 'geek-button-1',
    $type: 'geek-button',
    $visible: true,
    disabled: true,
    text: '文字按钮',
    type: 'text'
  }]
}
```
:::

## 处理器

添加按钮点击处理器。

::: leivii
```js
{
  $id: 'geek-button-0',
  $type: 'geek-button',
  $visible: true,
  text: '点击',
  type: 'primary',
  $handlers: [{
    type: 'component',
    name: 'click',
    target: 'geek-button-0',
    action: '$message',
    params: [{
      type: 'doc',
      target: '',
      action: {
        type: 'success',
        message: '点击了按钮'
      },
      name: 'options'
    }]
  }]
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| text | 按钮文本 | string | - | - |
| icon | 图标类名 | string | - | - |
| type | 类型 | string | primary / success / warning / danger / info / text | - |
| size | 尺寸 | string | medium/small/mini | - |
| authCode | 权限 | string | - | - |
| disabled | 禁用 | boolean | - | - |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数|
| ---- | ---- | ---- |
| showLoading | 显示加载中 | - |
| cancelLoading | 取消加载 | - |

</div>

## Events

<div class="events">

| 事件名 | 说明 | 回调参数|
| ---- | ---- | ---- |
| click | 点击事件 | (event: Event) |

</div>
