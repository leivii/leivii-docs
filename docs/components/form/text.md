---
title: 文本
---

# 文本

常用的文本。

## 基础用法

用于展示文本信息。

::: leivii
``` js
{
  "$id": "geek-form-F0T5RgBAIzgY",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-form-text-8703B0D9h3kf",
    "$type": "geek-form-text",
    "$visible": true,
    "label": "姓名：",
    "$classes": null,
    "placeholder": "",
    "value": "Chris",
    "prop": "text",
    "format": ""
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "labelPosition": "left"
}
```
:::

## 日期配置

可通过format配置日期格式。

::: leivii
``` js
{
  "$id": "geek-form-F0T5RgBAIzgY",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-form-text-8703B0D9h3kf",
      "$type": "geek-form-text",
      "$visible": true,
      "label": "lang.wms.fed.dataDictionary",
      "$classes": null,
      "placeholder": "",
      "value": "2020-12-01 12:00:00",
      "prop": "text",
      "format": "YYYY-MM-DD",
      "$dataSource": [],
      "$prop": "dict",
      "dict": ""
    },
    {
      "$id": "geek-form-text-tDU0GMve3jkw",
      "$type": "geek-form-text",
      "$visible": true,
      "label": "lang.wms.fed.dataDictionary",
      "$classes": null,
      "placeholder": "",
      "value": "2020-12-01 12:00:00",
      "prop": "text",
      "format": "YYYY-MM-DD hh:mm:ss",
      "$dataSource": [],
      "$prop": "dict",
      "dict": ""
    }
  ],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "labelPosition": "left"
}
```
:::

## 字典配置

可配置字典，展示文案。

::: leivii
``` js
{
  "$id": "geek-form-F0T5RgBAIzgY",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-form-text-8703B0D9h3kf",
    "$type": "geek-form-text",
    "$visible": true,
    "label": "lang.wms.fed.dataDictionary",
    "$classes": null,
    "placeholder": "",
    "value": "1",
    "prop": "text",
    "format": "",
    "$dataSource": [{
      "type": "custom",
      "subtype": "dict",
      "autoProcess": true,
      "scoped": true,
      "cache": false,
      "root": "data",
      "dictValue": [{
          "label": "lang.wms.fed.class.a",
          "value": "1"
        },
        {
          "label": "lang.wms.fed.class.b",
          "value": "2"
        }
      ],
      "key": "dict"
    }],
    "$prop": "dict",
    "dict": "dict"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "labelPosition": "left"
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
| format | 日期格式 | string | - | - |
| dict | 字典 | string | - | - |
| value | 默认值 | String/Number/Boolean | - | - |

</div>