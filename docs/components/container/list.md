---
title: 列表
---

# 列表

常用的列表组件。

## 基础用法

基础的列表用法，本例包含了两个list-item。

::: leivii
``` js
[
  {
    "$id": "geek-list-sdPYcY31mAPw",
    "$type": "geek-list",
    "$visible": true,
    "$body": [],
    "actions": [
      {
        "$id": "geek-text-UOzuaENXrgsN",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "用户名：name",
        "type": "text"
      },
      {
        "$id": "geek-text-Fq94tGg0R0lo",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "联系电话：12345678"
      },
      {
        "$id": "geek-text-JqJy8Rmvkzt1",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "居住地：苏州市"
      },
      {
        "$id": "geek-text-JmJ1e4Acspsv",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "联系地址：江苏省苏州市吴中区吴中大道 1188 号"
      },
      {
        "$id": "geek-button-6aAM7lDQjFfD",
        "$type": "geek-button",
        "$visible": true,
        "text": "lang.wms.fed.details",
        "$classes": null,
        "disabled": null,
        "type": "text",
        "size": "",
        "$handlers": [
          {
            "type": "component",
            "name": "click",
            "target": "geek-dialog-NlfjgWSoqy3E",
            "action": "open",
            "params": [
              {
                "type": "component",
                "target": "geek-list-sdPYcY31mAPw",
                "action": "loadData",
                "name": "e",
                "params": []
              }
            ]
          }
        ]
      }
    ],
    "$classes": "pl-xl",
    "title": "",
    "listClass": "",
    "showSelection": null,
    "direction": "column",
    "wrap": "wrap",
    "justify": "end"
  },
  {
    "$id": "geek-list-Vk4pV7LMMFId",
    "$type": "geek-list",
    "$visible": true,
    "$body": [],
    "actions": [
      {
        "$id": "geek-text-ahKm5YGe7xlF",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "用户名：name1",
        "type": "text"
      },
      {
        "$id": "geek-text-uvV5TFQ3nG4Q",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "联系电话：456789123"
      },
      {
        "$id": "geek-text-GuxgQ1pdtpwm",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "居住地：合肥市"
      },
      {
        "$id": "geek-text-W9hIdMwwyQAJ",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "联系地址：安徽省合肥市蜀山区130号"
      }
    ],
    "$classes": "pl-xl",
    "title": "",
    "listClass": "",
    "showSelection": null,
    "direction": "column",
    "wrap": "wrap",
    "justify": "end"
  },
  {
    "$id": "geek-dialog-NlfjgWSoqy3E",
    "$type": "geek-dialog",
    "$visible": true,
    "$body": [
      {
        "$id": "geek-form-gwcfNg4LfZe3",
        "$type": "geek-form",
        "$visible": true,
        "$body": [
          {
            "$id": "geek-input-ujyxRRWWfhla",
            "$type": "geek-input",
            "$visible": true,
            "label": "lang.wms.fed.userName",
            "$classes": null,
            "rows": 0,
            "maxlength": 0,
            "disabled": null,
            "prop": "name",
            "value": "name"
          },
          {
            "$id": "geek-input-oUfjHsgt26EG",
            "$type": "geek-input",
            "$visible": true,
            "prop": "number",
            "$classes": null,
            "rows": 0,
            "maxlength": 0,
            "disabled": null,
            "label": "lang.wms.fed.contactNumber",
            "value": "12345678"
          }
        ],
        "grids": [],
        "$classes": null,
        "gutter": 0
      }
    ],
    "actions": [],
    "$classes": null,
    "title": "lang.wms.fed.details",
    "customClass": null,
    "showClose": null
  }
]
```
:::

## 自定义样式

自定义样式列表

::: leivii
``` js
[
  {
    "$id": "geek-list-sdPYcY31mAPw",
    "$type": "geek-list",
    "$visible": true,
    "$body": [],
    "actions": [
      {
        "$id": "geek-text-UOzuaENXrgsN",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl bg-color-primary",
        "text": "用户名：name",
        "type": "text",
        "color": "#212222"
      },
      {
        "$id": "geek-text-Fq94tGg0R0lo",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl bg-color-danger",
        "text": "手机号：12345678"
      },
      {
        "$id": "geek-text-JqJy8Rmvkzt1",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "居住地：苏州市"
      },
      {
        "$id": "geek-text-JmJ1e4Acspsv",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "联系地址：江苏省苏州市吴中区吴中大道 1188 号"
      }
    ],
    "$classes": "pl-xl",
    "title": "",
    "listClass": "",
    "showSelection": null,
    "direction": "column",
    "wrap": "wrap",
    "justify": "end"
  },
  {
    "$id": "geek-list-Vk4pV7LMMFId",
    "$type": "geek-list",
    "$visible": true,
    "$body": [],
    "actions": [
      {
        "$id": "geek-text-ahKm5YGe7xlF",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "用户名：name1",
        "type": "text"
      },
      {
        "$id": "geek-text-uvV5TFQ3nG4Q",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "手机号：456789123"
      },
      {
        "$id": "geek-text-GuxgQ1pdtpwm",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "居住地：合肥市"
      },
      {
        "$id": "geek-text-W9hIdMwwyQAJ",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": "pr-xl",
        "text": "联系地址：安徽省合肥市蜀山区130号"
      }
    ],
    "$classes": "pl-xl bg-color-primary",
    "title": "",
    "listClass": "",
    "showSelection": null,
    "direction": "column",
    "wrap": "wrap",
    "justify": "end"
  }
]
```
:::

## 多层嵌套

嵌套列表

::: leivii
``` js
{
  "$id": "geek-list-Vk4pV7LMMFId",
  "$type": "geek-list",
  "$visible": true,
  "$body": [],
  "actions": [
    {
      "$id": "geek-text-ahKm5YGe7xlF",
      "$type": "geek-text",
      "$visible": true,
      "highlight": {
        "start": 0,
        "end": 0
      },
      "$classes": "pr-xl",
      "text": "用户名：name1",
      "type": "text"
    },
    {
      "$id": "geek-text-uvV5TFQ3nG4Q",
      "$type": "geek-text",
      "$visible": true,
      "highlight": {
        "start": 0,
        "end": 0
      },
      "$classes": "pr-xl",
      "text": "手机号：456789123"
    },
    {
      "$id": "geek-text-GuxgQ1pdtpwm",
      "$type": "geek-text",
      "$visible": true,
      "highlight": {
        "start": 0,
        "end": 0
      },
      "$classes": "pr-xl",
      "text": "居住地：合肥市"
    },
    {
      "$id": "geek-text-W9hIdMwwyQAJ",
      "$type": "geek-text",
      "$visible": true,
      "highlight": {
        "start": 0,
        "end": 0
      },
      "$classes": "pr-xl",
      "text": "联系地址：安徽省合肥市蜀山区130号"
    },
    {
      "$id": "geek-list-9i76XByfNmTm",
      "$type": "geek-list",
      "$visible": true,
      "$body": [],
      "actions": [
        {
          "$id": "geek-text-8HuV1aJ2CT9j",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": "pr-xl",
          "text": "用户名：xxxx"
        },
        {
          "$id": "geek-text-05YwM7SDOZbA",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0,
            "fontSize": 0
          },
          "$classes": null,
          "text": "居住地：苏州市"
        }
      ],
      "$classes": null,
      "title": "",
      "listClass": null,
      "showSelection": null
    }
  ],
  "$classes": "pl-xl",
  "title": "",
  "listClass": "",
  "showSelection": null,
  "direction": "row",
  "wrap": "wrap",
  "justify": "end",
  "$handlers": []
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | 标题 | string | - | - |
| prop | 字段 | string | - | - |
| actions | 操作区 | array | - | - |
| listClass | 列表主题 | string | - | - |
| showSelection | 多选 | boolean | - | - |
| clickRowToSelect | 点击选中 | boolean | - | - |
| direction | 方向 | string | row/column | row |
| wrap | 换行 | string | inherit/wrap/nowrap | inherit |
| justify | 横向排列 | string | - | start |
| align | 纵向排列 | string | - | top |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数|
| ---- | ---- | ---- |
| loadData | 更新数据源，获取列表所有数据 | - |
| checkSelection | 检查选中行 | - |
| getSelection | 获取选中行，参数值作为某一行数据中所需的连接符 | sep |
| getValue | 获取所有数据 | - |
| selectable | 判断多选是否禁用 | row, index |

</div>

## Events

<div class="events">

| 事件名 | 说明 | 回调参数|
| ---- | ---- | ---- |
| addItem | 添加行 | - |
| removeItem | 删除行 | row |
| removeSelection | 删除选中行 | selection, tip |
| rowClick | 点击行 | selection, row |

</div>