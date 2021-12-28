---
title: 输入框
---
# 输入框

常用的输入框。

## 基础用法

输入框的用法。

::: leivii
``` js
{
  '$id': 'geek-form-vKASImljAamf',
  '$type': 'geek-form',
  '$visible': true,
  '$body': [{
    '$id': 'geek-input-0DW0CTTEhZ8a',
    '$type': 'geek-input',
    '$visible': true,
    'label': '标题',
    '$classes': null,
    'rows': 0,
    'maxlength': 0,
    'disabled': null,
    'prop': 'text'
  }],
  'grids': [],
  '$classes': null,
  'gutter': 0,
  'cols': 4
}
```
:::

## 禁用状态

输入框不可用状态。

::: leivii
``` js
{
  '$id': 'geek-form-vKASImljAamf',
  '$type': 'geek-form',
  '$visible': true,
  '$body': [{
    '$id': 'geek-input-0DW0CTTEhZ8a',
    '$type': 'geek-input',
    '$visible': true,
    'label': '标题',
    '$classes': null,
    'rows': 0,
    'maxlength': 0,
    'disabled': true
  }],
  'grids': [],
  '$classes': null,
  'gutter': 0,
  'cols': 4
}
```
:::


## 文本域

用于输入多行文本信息，通过将 type 属性的值指定为 textarea。

::: leivii
``` js
{
  "$id": "geek-form-UClwZ5TJqyXw",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-input-kXio7yN2gfAi",
    "$type": "geek-input",
    "$visible": true,
    'label': '标题',
    "type": "textarea",
    "$classes": null,
    "rows": 0,
    "maxlength": 0,
    "disabled": null,
    "prop": "text"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 文本域指定高度

用于指定rows，确定文本域显示高度。

::: leivii
``` js
{
  "$id": "geek-form-UClwZ5TJqyXw",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-input-kXio7yN2gfAi",
    "$type": "geek-input",
    "$visible": true,
    'label': '标题',
    "type": "textarea",
    "$classes": null,
    "rows": 2,
    "maxlength": 0,
    "disabled": null,
    "prop": "text1"
  },{
    "$id": "geek-input-ABCD7yN2gfAi",
    "$type": "geek-input",
    "$visible": true,
    'label': '标题',
    "type": "textarea",
    "$classes": null,
    "rows": 5,
    "maxlength": 0,
    "disabled": null,
    "prop": "text2"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 输入框尺寸

::: leivii
``` js
{
  "$id": "geek-form-4Bq0MvyKnW7L",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-input-JLXXkiyw2UBS",
      "$type": "geek-input",
      "$visible": true,
      "label": "迷你",
      "$classes": null,
      "maxlength": 0,
      "disabled": null,
      "size": "mini",
      "prop": "text1"
    },
    {
      "$id": "geek-input-lUvMsQL27Do0",
      "$type": "geek-input",
      "$visible": true,
      "label": "小",
      "$classes": null,
      "maxlength": 0,
      "disabled": null,
      "size": "small",
      "prop": "text2"
    },
    {
      "$id": "geek-input-vmQla2I1DCNI",
      "$type": "geek-input",
      "$visible": true,
      "label": "正常",
      "$classes": null,
      "maxlength": 0,
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

## 输入长度限制

::: leivii
``` js
{
  "$id": "geek-form-4Bq0MvyKnW7L",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-input-vmQla2I1DCNI",
      "$type": "geek-input",
      "$visible": true,
      "label": "长度5",
      "$classes": null,
      "maxlength": 5,
      "disabled": null,
      "prop": "text1"
    },
    {
      "$id": "geek-input-mhfGtNPTXQi3",
      "$type": "geek-input",
      "$visible": true,
      "maxlength": 10,
      "$classes": null,
      "disabled": null,
      "label": "长度10",
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

## 复合型输入框

::: leivii
``` js
{
  "$id": "geek-form-vKASImljAamf",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-input-0DW0CTTEhZ8a",
      "$type": "geek-input",
      "$visible": true,
      "label": "标题",
      "$classes": null,
      "disabled": null,
      "prop": "text1",
      "prepend": {
        "$id": "geek-button-l1BoDuB1GB1X",
        "$type": "geek-button",
        "$visible": true,
        "text": "按钮"
      }
    },
    {
      "$id": "geek-input-ryUTJg7jUmGR",
      "$type": "geek-input",
      "$visible": true,
      "label": "标题",
      "prop": "text2",
      "append": {
        "$id": "geek-icon-3c6agUiREsPh",
        "$type": "geek-icon",
        "$visible": true,
      },
      "$classes": null,
      "rows": 0,
      "maxlength": 0,
      "disabled": null
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
      "$id": "geek-input-MOpCuY9DQRDl",
      "$type": "geek-input",
      "$visible": true,
      "label": "必填",
      "$classes": null,
      "maxlength": 0,
      "disabled": null,
      "rules": [
        "required"
      ],
      "prop": "text1"
    },
    {
      "$id": "geek-input-OnPMuqrtvNrO",
      "$type": "geek-input",
      "$visible": true,
      "label": "正整数",
      "$classes": null,
      "maxlength": 0,
      "disabled": null,
      "rules": [
        "enterInteger"
      ],
      "prop": "text2"
    },
    {
      "$id": "geek-input-oV7pygWrnsSQ",
      "$type": "geek-input",
      "$visible": true,
      "label": "自定义验证-正整数",
      "$classes": null,
      "maxlength": 0,
      "disabled": null,
      "rules": [
        "function validator(label) {\n  return {\n    validator: (rule, value, callback) => {\n      callback( !/^[1-9]\\d*$/.test(value) ? new Error('请输入正整数') : undefined)\n    },\n    trigger: 'change'\n  }\n}"
      ],
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

## 处理器

添加输入框修改、输入、回车处理器。

::: leivii
``` js
{
  "$id": "geek-form-4Bq0MvyKnW7L",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-input-MOpCuY9DQRDl",
      "$type": "geek-input",
      "$visible": true,
      "label": "修改",
      "$classes": null,
      "maxlength": 0,
      "disabled": null,
      "rules": null,
      "prop": "text1",
      "$handlers": [{
        "type": "component",
        "name": "change",
        "target": "geek-form-4Bq0MvyKnW7L",
        "action": "$message",
        "params": [{
          "type": "doc",
          "target": "",
          "action": {
            "type": "info",
            "message": "lang.wms.fed.modify"
          },
          "name": "options"
        }]
      }]
    },
    {
      "$id": "geek-input-OnPMuqrtvNrO",
      "$type": "geek-input",
      "$visible": true,
      "label": "输入",
      "$classes": null,
      "maxlength": 0,
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
      "$id": "geek-input-oV7pygWrnsSQ",
      "$type": "geek-input",
      "$visible": true,
      "label": "回车",
      "$classes": null,
      "maxlength": 0,
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
        }
      ]
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

<div class='props'>

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| label | 标题 | string | - | - |
| prop | 字段名 | string | - | - |
| placeholder | 占位符 | string | - | - |
| type | 类型 | text/textarea | - | text |
| rows | 行数（仅textarea有效） | - | - |
| size | 尺寸（仅text有效） | string | medium/small/mini | - |
| maxlength | 最大长度 | string | - | - |
| prepend | 前置内容 | object | - | - |
| append | 后置内容 | object | - | - |
| rules | 规则验证 | array | - | - |
| disabled | 禁用 | boolean | - | - |
| value | 默认值 | String/Number | - | - |

</div>