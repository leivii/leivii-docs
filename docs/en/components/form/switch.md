---
title: 开关
---

# 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-switch-9fEQz06WmSab",
    "$type": "geek-switch",
    "$visible": true,
    "label": "开关",
    "$classes": null,
    "activeText": "",
    "inactiveText": "",
    "disabled": null,
    "prop": "switch",
    "activeValue": 1,
    "inactiveValue": 0
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
    "$id": "geek-switch-9fEQz06WmSab",
    "$type": "geek-switch",
    "$visible": true,
    "label": "开关",
    "$classes": null,
    "activeText": "",
    "inactiveText": "",
    "disabled": true,
    "prop": "switch",
    "activeValue": 1,
    "inactiveValue": 0
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4,
  "$dataSource": []
}
```
:::

## 文字描述

可配置文字及颜色。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-switch-9fEQz06WmSab",
      "$type": "geek-switch",
      "$visible": true,
      "$classes": null,
      "activeText": "lang.wms.fed.yes",
      "inactiveText": "lang.wms.fed.no",
      "disabled": null,
      "prop": "switch1",
      "$prop": "",
      "activeValue": 1,
      "inactiveValue": 0
    },
    {
      "$id": "geek-switch-OJFzRJgPDgA1",
      "$type": "geek-switch",
      "$visible": true,
      "activeValue": 1,
      "$classes": null,
      "activeText": "lang.wms.fed.yes",
      "inactiveText": "lang.wms.fed.no",
      "disabled": null,
      "prop": "switch2",
      "activeColor": "#1BEE26",
      "activeValue": 1,
      "inactiveValue": 0
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

## 扩展的 value 类型

设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-switch-9fEQz06WmSab",
    "$type": "geek-switch",
    "$visible": true,
    "label": "开关",
    "$classes": null,
    "activeText": "1",
    "inactiveText": "0",
    "disabled": null,
    "prop": "switch",
    "activeValue": 1,
    "inactiveValue": 0
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
| activeText | 打开时文字 | string | - | - |
| inactiveText | 关闭时文字 | string | - | - |
| activeColor | 打开时颜色 | string | - | - |
| inactiveColor | 关闭时颜色 | string | - | - |
| activeValue | 打开时的值 | String/Number/Boolean | - | - |
| inactiveValue | 关闭时的值 | String/Number/Boolean | - | - |
| rules | 规则验证 | array | - | - |
| disabled | 禁用 | boolean | - | false |
| value | 默认值 | String/Number/Boolean | - | - |

</div>
