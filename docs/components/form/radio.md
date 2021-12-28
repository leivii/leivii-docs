---
title: 单选框
---

# 单选框

在一组备选项中进行单选。

## 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-radio-HacsGHG22hgX",
    "$type": "geek-radio",
    "$visible": true,
    "$prop": "options",
    "$classes": null,
    "disabled": null,
    "prop": "radio",
    "label": "单选框",
    "value": "1"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "$dataSource": [{
    "type": "custom",
    "subtype": "dict",
    "autoProcess": true,
    "scoped": false,
    "cache": false,
    "root": "data",
    "dictValue": [{
        "label": "lang.wms.fed.yes",
        "value": "1"
      },
      {
        "label": "lang.wms.fed.no",
        "value": "0"
      }
    ],
    "key": "options"
  }]
}
```
:::

## 禁用状态

不可用状态。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-radio-HacsGHG22hgX",
    "$type": "geek-radio",
    "$visible": true,
    "$prop": "options",
    "$classes": null,
    "disabled": true,
    "prop": "radio",
    "label": "单选框",
    "value": "1"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "$dataSource": [{
    "type": "custom",
    "subtype": "dict",
    "autoProcess": true,
    "scoped": false,
    "cache": false,
    "root": "data",
    "dictValue": [{
        "label": "lang.wms.fed.yes",
        "value": "1"
      },
      {
        "label": "lang.wms.fed.no",
        "value": "0"
      }
    ],
    "key": "options"
  }]
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| label | 标题 | string | - | - |
| prop | 字段名 | string | - | - |
| filterOptions | 过滤函数 | string | - | 'options => options' |
| rules | 规则验证 | array | - | - |
| disabled | 禁用 | boolean | - | false |
| value | 默认值 | String/Number/Boolean | - | - |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数|
| ---- | ---- | ---- |
| getLabel | 获取显示数据 | - |

</div>