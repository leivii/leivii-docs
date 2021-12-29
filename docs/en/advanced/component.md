---
title: 注册组件
---

# 注册组件

Leivii编辑器 从底层设计上支持扩展，实际上 Leivii 本身的组件也是通过注册机制添加进去的。

::: tip 注册组件的方法
```ts
Leivii.API.registComponent(name?: string, component: Vue)
```
:::

例如我们有以下组件：

<<< @/docs/advanced/sample/Card.vue

将其注册到 Leivii：

```js
import Card from 'Card.vue'
import { Leivii } from 'leivii-editor'

Leivii.API.registComponent(Card)
```

在编辑器中使用组件，并绑定组件抛出的 **添加** 事件：

::: leivii
```js
{
  "$id": "my-card-jAitKkMKDcEH",
  "$type": "my-card",
  "$visible": true,
  "$body": [
    {
      "$id": "geek-flex-container-pR7TbuH9C7Tg",
      "$type": "geek-flex-container",
      "$visible": true,
      "$body": [
        {
          "$id": "geek-icon-UfdVArzw9AK7",
          "$type": "geek-icon",
          "$visible": true,
          "iconClass": "logo",
          "$classes": null,
          "title": "",
          "size": 100
        },
        {
          "$id": "geek-text-k4aXYmVPZOHR",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "EIVII",
          "fontSize": "80px",
          "color": "#FFAE00"
        }
      ],
      "$classes": "p-lg",
      "justify": "center",
      "align": "flex-end"
    }
  ],
  "$classes": "m",
  "title": "我的卡片",
  "$handlers": [
    {
      "type": "component",
      "name": "add",
      "target": "my-card-jAitKkMKDcEH",
      "action": "$message",
      "params": [
        {
          "type": "doc",
          "target": "",
          "action": {
            "type": "success",
            "message": "lang.wms.fed.successfulOperation"
          },
          "name": "options"
        }
      ]
    }
  ]
}
```
:::