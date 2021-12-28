---
title: 穿梭框
---

# 穿梭框

## 基础用法

基础的穿梭框控件。

::: leivii
``` js
{
  "$id": "geek-form-F0T5RgBAIzgY",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-transfer-v8CVFqQhiNoj",
    "$type": "geek-transfer",
    "$visible": true,
    "props": {
      "label": "label",
      "key": "value"
    },
    "$classes": null,
    "filterable": null,
    "filterPlaceholder": "",
    "$dataSource": [{
      "type": "custom",
      "subtype": "dict",
      "autoProcess": true,
      "scoped": false,
      "cache": false,
      "root": "data",
      "dictValue": [{
          "label": "Chris",
          "value": "1"
        },
        {
          "label": "David",
          "value": "2"
        },
        {
          "label": "Sally",
          "value": "3"
        }
      ],
      "key": "o"
    }],
    "$prop": "o",
    "prop": "transfer",
    "titles": [
      "列表1",
      "列表2"
    ]
  }],
  "grids": [],
  "$classes": null,
  "gutter": 0
}
```
:::

## 可搜索

在数据很多的情况下，可以对数据进行搜索和过滤。

::: leivii
``` js
{
  "$id": "geek-form-F0T5RgBAIzgY",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-transfer-v8CVFqQhiNoj",
    "$type": "geek-transfer",
    "$visible": true,
    "props": {
      "label": "label",
      "key": "value"
    },
    "$classes": null,
    "filterable": true,
    "filterPlaceholder": "",
    "$dataSource": [{
      "type": "custom",
      "subtype": "dict",
      "autoProcess": true,
      "scoped": false,
      "cache": false,
      "root": "data",
      "dictValue": [{
          "label": "Chris",
          "value": "1"
        },
        {
          "label": "David",
          "value": "2"
        },
        {
          "label": "Sally",
          "value": "3"
        }
      ],
      "key": "o"
    }],
    "$prop": "o",
    "prop": "transfer",
    "titles": [
      "列表1",
      "列表2"
    ]
  }],
  "grids": [],
  "$classes": null,
  "gutter": 0
}
```
:::

## 数据项属性别名

默认情况下，Transfer 仅能识别数据项中的 key、label 和 disabled 字段。如果你的数据的字段名不同，可以使用 props 属性为它们设置别名。
项目中字典配置是label和value，所以属性默认给出label和value，可按需修改。

::: leivii
``` js
{
  "$id": "geek-form-F0T5RgBAIzgY",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-transfer-v8CVFqQhiNoj",
    "$type": "geek-transfer",
    "$visible": true,
    "props": {
      "label": "label",
      "key": "value"
    },
    "$classes": null,
    "filterable": true,
    "filterPlaceholder": "",
    "$dataSource": [{
      "type": "custom",
      "subtype": "dict",
      "autoProcess": true,
      "scoped": false,
      "cache": false,
      "root": "data",
      "dictValue": [{
          "label": "Chris",
          "value": "1"
        },
        {
          "label": "David",
          "value": "2"
        },
        {
          "label": "Sally",
          "value": "3"
        }
      ],
      "key": "o"
    }],
    "$prop": "o",
    "prop": "transfer",
    "titles": [
      "列表1",
      "列表2"
    ]
  }],
  "grids": [],
  "$classes": null,
  "gutter": 0
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| label | 标题 | string | - | - |
| prop | 字段名 | string | - | - |
| titles | 左右标题 | string | - | - |
| filterable | 可查询 | boolean | - | - |
| filterPlaceholder | 查询占位符 | string | - | - |
| props | 字段别名 | object | - | {label: 'label', key: 'value'} |
| rules | 规则验证 | array | - | - |
| value | 默认值 | Array | - | - |

</div>
