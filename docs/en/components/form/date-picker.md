---
title: 日期选择
---

# 日期选择

用于选择或输入日期。

## 基础用法

以「日」为基本单位，基础的日期选择控件。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-date-picker-eB6nrtbtmWrM",
    "$type": "geek-date-picker",
    "$visible": true,
    "prop": "date",
    "$classes": null,
    "disabled": null
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
    "$id": "geek-date-picker-eB6nrtbtmWrM",
    "$type": "geek-date-picker",
    "$visible": true,
    "prop": "date",
    "$classes": null,
    "disabled": true
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "$dataSource": []
}
```
:::

## 其他日期单位

通过扩展基础的日期选择，可以选择周、月、年或多个日期。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-date-picker-eB6nrtbtmWrM",
      "$type": "geek-date-picker",
      "$visible": true,
      "prop": "date1",
      "$classes": null,
      "disabled": null,
      "type": "year",
      "label": "年"
    },
    {
      "$id": "geek-date-picker-LdyMyJXQg4vg",
      "$type": "geek-date-picker",
      "$visible": true,
      "type": "month",
      "$classes": null,
      "disabled": null,
      "prop": "date2",
      "label": "月"
    },
    {
      "$id": "geek-date-picker-AvPrrOM3RK6o",
      "$type": "geek-date-picker",
      "$visible": true,
      "type": "week",
      "$classes": null,
      "disabled": null,
      "prop": "date3",
      "label": "周"
    },
    {
      "$id": "geek-date-picker-UiUzwBmj3CvH",
      "$type": "geek-date-picker",
      "$visible": true,
      "type": "dates",
      "$classes": null,
      "disabled": null,
      "prop": "date4",
      "label": "多个日期"
    }
  ],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "$dataSource": []
}
```
:::

## 选择日期范围

可在一个选择器中便捷地选择一个时间范围。

::: leivii
``` js

{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-date-picker-LdyMyJXQg4vg",
      "$type": "geek-date-picker",
      "$visible": true,
      "type": "daterange",
      "$classes": null,
      "disabled": null,
      "prop": "date2",
      "label": "日期范围"
    },
    {
      "$id": "geek-date-picker-AvPrrOM3RK6o",
      "$type": "geek-date-picker",
      "$visible": true,
      "type": "monthrange",
      "$classes": null,
      "disabled": null,
      "prop": "date3",
      "label": "月范围"
    },
    {
      "$id": "geek-date-picker-eB6nrtbtmWrM",
      "$type": "geek-date-picker",
      "$visible": true,
      "prop": "date1",
      "$classes": null,
      "disabled": null,
      "type": "datetimerange",
      "format": "yyyy-MM-dd hh:mm:ss",
      "label": "时间范围"
    }
  ],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 3,
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
| type | 类型 | string | year/month/date/dates/week/datetime/datetimerange/daterange/monthrange | - |
| connector | 连接符 | string | - | - |
| size | 尺寸 | string | medium/small/mini | - |
| separator | 分隔符 | string | - | - |
| format | 日期格式 | string | yyyy-MM-dd/yyyy-MM-dd hh:mm:ss/timestamp | - |
| valueFormat | 值格式 | string | yyyy-MM-dd/timestamp | - |
| startPlaceholder | 起始时间占位符 | string | - | '开始时间' |
| endPlaceholder | 结束时间占位符 | string | - | '结束时间' |
| rules | 规则验证 | array | - | - |
| disabled | 禁用 | boolean | - | false |
| value | 默认值 | String/Number/Array/Date | - | - |

</div>
