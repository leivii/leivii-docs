---
title: 复选框
---

# 复选框

一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-checkbox-vzSnPdS5y5RO",
    "$type": "geek-checkbox",
    "$visible": true,
    "$prop": "options",
    "$classes": null,
    "showCheckAll": false,
    "disabled": null,
    "prop": "checkbox",
    "checkAllText": "",
    "label": "lang.wms.fed.multipleChoose"
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
    "$id": "geek-checkbox-vzSnPdS5y5RO",
    "$type": "geek-checkbox",
    "$visible": true,
    "$prop": "options",
    "$classes": null,
    "showCheckAll": false,
    "disabled": true,
    "prop": "checkbox",
    "checkAllText": "",
    "label": "lang.wms.fed.multipleChoose"
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

## 全选

可开启全选按钮。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-checkbox-vzSnPdS5y5RO",
    "$type": "geek-checkbox",
    "$visible": true,
    "$prop": "options",
    "$classes": null,
    "showCheckAll": true,
    "disabled": null,
    "prop": "checkbox",
    "checkAllText": "lang.wms.fed.allSelect",
    "label": "lang.wms.fed.multipleChoose"
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
| showCheckAll | 显示全选 | boolean | - | - |
| checkAllText | 显示全选（全选为true可用） | string | - | - |
| connector | 连接符（全选为true可用） | string | - | - |
| filterOptions | 过滤函数 | string | - | 'options => options' |
| rules | 规则验证 | array | - | - |
| disabled | 禁用 | boolean | - | false |
| value | 默认值 | Array | - | - |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数|
| ---- | ---- | ---- |
| getLabel | 获取显示数据 | - |

</div>