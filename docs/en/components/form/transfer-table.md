---
title: 表格穿梭框
---

# 表格穿梭框

## 基础用法

基础的表格穿梭框控件。

::: leivii
``` js
{
  "$id": "geek-form-F0T5RgBAIzgY",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-transfer-table-I9h0OQFR6vfb",
    "$type": "geek-transfer-table",
    "$visible": true,
    "$dataSource": [{
      "type": "api",
      "subtype": "LIST",
      "autoProcess": true,
      "scoped": false,
      "cache": false,
      "root": "data",
      "method": "GET",
      "api": "/api/tablelist",
      "params": {
        "type": "custom",
        "target": "",
        "action": {}
      },
      "data": {
        "type": "custom",
        "action": {}
      },
      "key": "table"
    }],
    "$classes": null,
    "filterable": false,
    "filterPlaceholder": "",
    "height": 0,
    "$prop": "table",
    "columns": [{
        "name": "warehouseCode",
        "label": "lang.wms.fed.warehouseCode",
        "minWidth": 0,
        "tooltip": false,
        "$body": []
      },
      {
        "name": "warehouseName",
        "label": "lang.wms.fed.warehouseName",
        "minWidth": 0,
        "tooltip": false,
        "$body": [],
        "type": "text"
      }
    ],
    "prop": "tableTransfer",
    "valueKey": "warehouseCode"
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
    "$id": "geek-transfer-table-I9h0OQFR6vfb",
    "$type": "geek-transfer-table",
    "$visible": true,
    "$dataSource": [{
      "type": "api",
      "subtype": "LIST",
      "autoProcess": true,
      "scoped": false,
      "cache": false,
      "root": "data",
      "method": "GET",
      "api": "/api/tablelist",
      "params": {
        "type": "custom",
        "target": "",
        "action": {}
      },
      "data": {
        "type": "custom",
        "action": {}
      },
      "key": "table"
    }],
    "$classes": null,
    "filterable": true,
    "filterPlaceholder": "lang.wms.fed.pleaseEnter",
    "height": 0,
    "$prop": "table",
    "columns": [{
        "name": "warehouseCode",
        "label": "lang.wms.fed.warehouseCode",
        "minWidth": 0,
        "tooltip": false,
        "$body": []
      },
      {
        "name": "warehouseName",
        "label": "lang.wms.fed.warehouseName",
        "minWidth": 0,
        "tooltip": false,
        "$body": [],
        "type": "text"
      }
    ],
    "prop": "tableTransfer",
    "valueKey": "warehouseCode"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 0
}
```
:::

## 字段别名

使用情况下须指定字段别名，选中后会返回对应字段的数组。

::: leivii
``` js
{
  "$id": "geek-form-F0T5RgBAIzgY",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-transfer-table-I9h0OQFR6vfb",
    "$type": "geek-transfer-table",
    "$visible": true,
    "$dataSource": [{
      "type": "api",
      "subtype": "LIST",
      "autoProcess": true,
      "scoped": false,
      "cache": false,
      "root": "data",
      "method": "GET",
      "api": "/api/tablelist",
      "params": {
        "type": "custom",
        "target": "",
        "action": {}
      },
      "data": {
        "type": "custom",
        "action": {}
      },
      "key": "table"
    }],
    "$classes": null,
    "filterable": false,
    "filterPlaceholder": "",
    "height": 0,
    "$prop": "table",
    "columns": [{
        "name": "warehouseCode",
        "label": "lang.wms.fed.warehouseCode",
        "minWidth": 0,
        "tooltip": false,
        "$body": []
      },
      {
        "name": "warehouseName",
        "label": "lang.wms.fed.warehouseName",
        "minWidth": 0,
        "tooltip": false,
        "$body": [],
        "type": "text"
      }
    ],
    "prop": "tableTransfer",
    "valueKey": "warehouseCode"
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
| prop | 字段名 | string | - | - |
| titles | 左右标题 | string | - | - |
| filterable | 可查询 | boolean | - | - |
| filterPlaceholder | 查询占位符 | string | - | - |
| columns | 列 | columnsProps | - | - |
| valueKey | 字段别名 | String | - | - |
| height | 高度 | Number | - | 0 |
| pageSize | 分页数量 | Number | - | 10 |
| value | 默认值 | Array | - | - |

</div>

## columnsProps

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| name | 字段 | string | - | - |
| label | 标题 | string | - | - |
| minWidth | 最小宽度 | Number | - | - |
| tooltip | 超出隐藏 | Boolean | - | - |
| fixed | 固定列 | string | ''/left/right | - |
| $body | 子组件 | Array | - | - |
| type | 类型 | String | text/time/dict | - |
| dict | dict | String | - | - |
| format | 格式化 | String | - | - |

</div>
