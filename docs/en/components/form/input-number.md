---
title: 数字输入框
---

# 数字输入框

常用的数字输入框。

## 基础用法

数字输入框的用法。

::: leivii
``` js
{
  "$id": "geek-form-vKASImljAamf",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-input-number-HE4NkyJDPI4W",
    "$type": "geek-input-number",
    "$visible": true,
    "label": "标题",
    "$classes": null,
    "disabled": null,
    "prop": "text",
    "value": 0
  }],
  "grids": [],
  "$classes": null,
  "gutter": 0,
  "cols": 4
}
```
:::

## 禁用状态

数字输入框不可用状态。

::: leivii
``` js
{
  "$id": "geek-form-vKASImljAamf",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-input-number-HE4NkyJDPI4W",
    "$type": "geek-input-number",
    "$visible": true,
    "label": "标题",
    "$classes": null,
    "disabled": true
  }],
  "grids": [],
  "$classes": null,
  "gutter": 0,
  "cols": 4
}
```
:::

## 尺寸

::: leivii
``` js
{
  "$id": "geek-form-4Bq0MvyKnW7L",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-input-number-HE4NkyJDPI4W",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "迷你",
      "$classes": null,
      "disabled": null,
      "size": "mini",
      "prop": "text1"
    },
    {
      "$id": "geek-input-number-lUvMsQL27Do0",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "小",
      "$classes": null,
      "disabled": null,
      "size": "small",
      "prop": "text2"
    },
    {
      "$id": "geek-input-number-vmQla2I1DCNI",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "正常",
      "$classes": null,
      "disabled": null,
      "prop": "text3"
    }
  ],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 长度限制

数字输入框最大最小值

::: leivii
``` js
{
  "$id": "geek-form-4Bq0MvyKnW7L",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-input-number-pTPlbK8LRrsN",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "范围-1~5",
      "min": -1,
      "$classes": null,
      "placeholder": "",
      "precision": 0,
      "disabled": null,
      "max": 5,
      "prop": "text1"
    },
    {
      "$id": "geek-input-number-kQG7BoC3O4Y7",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "范围0~100",
      "min": 0,
      "$classes": null,
      "placeholder": "",
      "precision": 0,
      "disabled": null,
      "max": 100,
      "prop": "text2"
    }
  ],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 精度

数字输入框精度

::: leivii
``` js
{
  "$id": "geek-form-4Bq0MvyKnW7L",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-input-number-pTPlbK8LRrsN",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "精度2",
      "$classes": null,
      "placeholder": "",
      "precision": 0,
      "disabled": null,
      "prop": "text1",
      "precision": 2,
    },
    {
      "$id": "geek-input-number-kQG7BoC3O4Y7",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "精度3",
      "$classes": null,
      "placeholder": "",
      "precision": 0,
      "disabled": null,
      "prop": "text2",
      "precision": 3,
    }
  ],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 表单验证

::: leivii
``` js
{
  "$id": "geek-form-4Bq0MvyKnW7L",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-input-number-pTPlbK8LRrsN",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "必填",
      "prop": "text1",
      "min": -1,
      "$classes": null,
      "placeholder": "",
      "precision": 0,
      "disabled": null,
      "max": 5,
      "rules": [
        "required"
      ]
    },
  ],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 处理器

添加输入框修改、输入、回车处理器。

::: leivii
``` js
{
  "$id": "geek-form-4Bq0MvyKnW7L",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-input-number-pTPlbK8LRrsN",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "修改",
      "$classes": null,
      "disabled": null,
      "rules": null,
      "prop": "text1",
      "$handlers": [{
        "type": "component",
        "name": "change",
        "target": "geek-page",
        "action": "$message",
        "params": [{
          "type": "doc",
          "target": "",
          "action": {
            "type": "info",
            "message": "lang.wms.fed.input"
          },
          "name": "options"
        }]
      }]
    },
    {
      "$id": "geek-input-number-kQG7BoC3O4Y7",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "输入",
      "$classes": null,
      "disabled": null,
      "rules": null,
      "prop": "text2",
      "$handlers": [{
        "type": "component",
        "name": "input",
        "target": "geek-form-4Bq0MvyKnW7L",
        "action": "$message",
        "params": [{
          "type": "doc",
          "target": "",
          "action": {
            "type": "info",
            "message": "lang.wms.fed.input"
          },
          "name": "options"
        }]
      }]
    },
    {
      "$id": "geek-input-number-vmQla2I1DCNI",
      "$type": "geek-input-number",
      "$visible": true,
      "label": "回车",
      "$classes": null,
      "disabled": null,
      "rules": null,
      "prop": "text3",
      "$handlers": [{
        "type": "component",
        "name": "enter",
        "target": "geek-form-4Bq0MvyKnW7L",
        "action": "$message",
        "params": [{
          "type": "doc",
          "target": "",
          "action": {
            "type": "info",
            "message": "回车"
          },
          "name": "options"
        }]
      }]
    }
  ],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::


## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| label | 标题 | string | - | - |
| prop | 字段名 | string | - | - |
| placeholder | 占位符 | string | - | - |
| min | 最小值 | number | - | - |
| max | 最大值 | number | - | - |
| precision | 精度 | number | - | - |
| size | 尺寸 | string | medium/small/mini | - |
| rules | 规则验证 | array | - | - |
| disabled | 禁用 | boolean | - | - |
| value | 默认值 | Number | - | - |

</div>