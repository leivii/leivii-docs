---
title: 时间
---

# 时间选择

用于选择或输入时间。

## 基础用法

基础的时间选择控件。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-time-picker-6u5wcye7J07R",
    "$type": "geek-time-picker",
    "$visible": true,
    "pickerOptions": {},
    "$classes": null,
    "isRange": null,
    "disabled": null,
    "label": "lang.wms.fed.item1206",
    "prop": "time"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "$dataSource": []
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
    "$id": "geek-time-picker-6u5wcye7J07R",
    "$type": "geek-time-picker",
    "$visible": true,
    "pickerOptions": {},
    "$classes": null,
    "isRange": null,
    "disabled": true,
    "label": "lang.wms.fed.item1206",
    "prop": "time"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "$dataSource": []
}
```
:::

## 时间范围

可在一个选择器中便捷地选择一个时间范围。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-time-picker-6u5wcye7J07R",
    "$type": "geek-time-picker",
    "$visible": true,
    "pickerOptions": {},
    "$classes": null,
    "isRange": true,
    "disabled": null,
    "label": "lang.wms.fed.item1206",
    "prop": "time"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "$dataSource": []
}
```
:::

## 时间限制

通过selectableRange限制可选时间范围。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-time-picker-mCSs3BuppsY2",
    "$type": "geek-time-picker",
    "$visible": true,
    "pickerOptions": {
      "selectableRange": [
        "00:00:00 - 03:00:00"
      ],
      "format": ""
    },
    "$classes": null,
    "isRange": null,
    "disabled": null,
    "label": "lang.wms.fed.item1206",
    "prop": "time1",
    "value": "{{new Date('2021-12-01 01:00:00')}}"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "$dataSource": []
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| label | 标题 | string | - | - |
| prop | 字段名 | string | - | - |
| isRange | 时间范围 | boolean | - |false |
| separator | 分隔符（时间范围可用） | string | - | - |
| pickerOptions | 高级选项（时间范围限制） | object | - | - |
| valueFormat | 值格式 | string | hh:mm/hh:mm:ss/timestamp/millisecond | - |
| size | 尺寸 | string | medium/small/mini | - |
| startPlaceholder | 起始时间占位符 | string | - | '开始时间' |
| endPlaceholder | 结束时间占位符 | string | - | '结束时间' |
| rules | 规则验证 | array | - | - |
| disabled | 禁用 | boolean | - | false |
| value | 默认值 | String/Number/Array/Date | - | - |

</div>
