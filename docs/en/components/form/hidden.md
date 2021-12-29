---
title: 隐藏域
---

# 隐藏域

用于文本占位、收集表单不可见信息等。

## 基础用法

基础的隐藏域用法，当用户进行操作时会显示隐藏域值。

::: leivii
``` js
{
  "$id": "geek-flex-container",
  "$type": "geek-flex-container",
  "$visible": true,
  "wrap": "wrap",
  "$body": [
    {
      "$id": "geek-form-iHPI0pZvrJsV",
      "$type": "geek-form",
      "$visible": true,
      "$body": [
        {
          "$id": "geek-hidden-HbKDVJsFW6V8",
          "$type": "geek-hidden",
          "$visible": true,
          "value": "当前任务为盲盘，系统数量已隐藏",
          "$classes": null,
          "prop": "hidden",
          "$handlers": []
        },
        {
          "$id": "geek-button-cW4Csv66JNwG",
          "$type": "geek-button",
          "$visible": true,
          "type": "text",
          "$classes": "pr pl fs",
          "text": "点击获取隐藏域",
          "disabled": null,
          "$handlers": [
            {
              "type": "component",
              "name": "click",
              "target": "geek-hidden-HbKDVJsFW6V8",
              "action": "$message",
              "params": [
                {
                  "type": "dataSource",
                  "target": "",
                  "action": "form.data.hidden",
                  "name": "options"
                }
              ]
            }
          ]
        }
      ],
      "grids": [],
      "$classes": null,
      "gutter": 0
    }
  ],
  "$classes": null
}
```
:::

## 自定义

可自定义配置不同内容，本例使用了value字段，可使用该字段给隐藏域设置不同类型文本值。

::: leivii
``` js
{
  "$id": "geek-flex-container",
  "$type": "geek-flex-container",
  "$visible": true,
  "wrap": "wrap",
  "$body": [
    {
      "$id": "geek-form-iHPI0pZvrJsV",
      "$type": "geek-form",
      "$visible": true,
      "$body": [
        {
          "$id": "geek-hidden-HbKDVJsFW6V8",
          "$type": "geek-hidden",
          "$visible": true,
          "value": {
            "name": "SONY",
            "code": "100"
          },
          "$classes": null,
          "prop": "hidden",
          "$handlers": []
        },
        {
          "$id": "geek-button-cW4Csv66JNwG",
          "$type": "geek-button",
          "$visible": true,
          "type": "text",
          "$classes": "pr pl fs",
          "text": "点击获取隐藏域",
          "disabled": null,
          "$handlers": [
            {
              "type": "component",
              "name": "click",
              "target": "geek-hidden-HbKDVJsFW6V8",
              "action": "$confirm",
              "params": [
                {
                  "type": "dataSource",
                  "target": "",
                  "action": "form.data.hidden",
                  "name": "options"
                },
                {
                  "type": "doc",
                  "target": "",
                  "action": "隐藏域文本值",
                  "name": "title"
                },
                {
                  "type": "dataSource",
                  "target": "",
                  "action": "form.data.hidden.name",
                  "name": "options"
                }
              ]
            }
          ]
        }
      ],
      "grids": [],
      "$classes": null,
      "gutter": 0
    }
  ],
  "$classes": null
}
```
:::
## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| label | 标题 | string | - | 隐藏域 |
| prop | 字段 | string | - | - |
| value | 默认值 | string/number/boolean/object/array | - | - |

</div>