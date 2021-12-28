---
title: 下拉框
---

# 下拉框

常用的下拉框。

## 基础用法

下拉框的用法。

::: leivii
``` js
{
  "$id": "geek-form-LD8cb0l5WHcn",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-select-8DzwdJh6w6Bj",
    "$type": "geek-select",
    "$visible": true,
    "label": "下拉框",
    "prop": "select",
    "$classes": null,
    "popperClass": null,
    "clearable": null,
    "multiple": null,
    "allowCreate": null,
    "filterable": null,
    "disabled": null,
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
    }],
    "$prop": "options"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 禁用状态

不可用状态。

::: leivii
``` js

{
  "$id": "geek-form-LD8cb0l5WHcn",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-select-8DzwdJh6w6Bj",
    "$type": "geek-select",
    "$visible": true,
    "label": "下拉框",
    "prop": "select",
    "$classes": null,
    "popperClass": null,
    "clearable": null,
    "multiple": null,
    "allowCreate": null,
    "filterable": null,
    "disabled": true,
    "value": "1",
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
    }],
    "$prop": "options"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 尺寸

::: leivii
``` js

{
  "$id": "geek-form-LD8cb0l5WHcn",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-select-8DzwdJh6w6Bj",
    "$type": "geek-select",
    "$visible": true,
    "label": "下拉框",
    "prop": "select",
    "$classes": null,
    "popperClass": null,
    "clearable": null,
    "multiple": null,
    "allowCreate": null,
    "filterable": null,
    "disabled": null,
    "size": "mini",
  },{
    "$id": "geek-select-8DzwdJh6w6Bj",
    "$type": "geek-select",
    "$visible": true,
    "label": "下拉框",
    "prop": "select",
    "$classes": null,
    "popperClass": null,
    "clearable": null,
    "multiple": null,
    "allowCreate": null,
    "filterable": null,
    "disabled": null,
    "size": "small",
  },{
    "$id": "geek-select-8DzwdJh6w6Bj",
    "$type": "geek-select",
    "$visible": true,
    "label": "下拉框",
    "prop": "select",
    "$classes": null,
    "popperClass": null,
    "clearable": null,
    "multiple": null,
    "allowCreate": null,
    "filterable": null,
    "disabled": null,
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 可清空单选

包含清空按钮，可将选择器清空为初始状态。

::: leivii
``` js
{
  "$id": "geek-form-LD8cb0l5WHcn",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-select-8DzwdJh6w6Bj",
    "$type": "geek-select",
    "$visible": true,
    "label": "下拉框",
    "prop": "select",
    "$classes": null,
    "popperClass": null,
    "clearable": true,
    "multiple": null,
    "allowCreate": null,
    "filterable": null,
    "disabled": null,
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
    }],
    "$prop": "options"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 基础多选

适用性较广的基础多选，用 Tag 展示已选项；多选数据以数组形势返回，但提供连接符，可返回以连接符链接的字符串。

::: leivii
``` js
{
  "$id": "geek-form-LD8cb0l5WHcn",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-select-8DzwdJh6w6Bj",
    "$type": "geek-select",
    "$visible": true,
    "label": "下拉框",
    "prop": "select",
    "$classes": null,
    "popperClass": null,
    "clearable": true,
    "multiple": true,
    "allowCreate": null,
    "filterable": null,
    "disabled": null,
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
    }],
    "$prop": "options"
  }],
  "grids": [],
  "$classes": null,
  "gutter": 20,
  "cols": 4
}
```
:::

## 可搜索

可以利用搜索功能快速查找选项。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
      "$id": "geek-select-sphjTwWBwqhv",
      "$type": "geek-select",
      "$visible": true,
      "$prop": "options",
      "$classes": null,
      "label": '搜索',
      "prop": "select1",
      "popperClass": null,
      "clearable": null,
      "multiple": null,
      "allowCreate": null,
      "filterable": true,
      "disabled": null,
      "remoteFilter": {
        "params": {
          "type": "component",
          "target": "",
          "action": ""
        }
      }
    },
    {
      "$id": "geek-select-gE6yipGxrtq8",
      "$type": "geek-select",
      "$visible": true,
      "label": '远程搜索',
      "prop": "select2",
      "filterable": true,
      "remoteFilter": {
        "url": "/query/search",
        "query": "keyword",
        "params": {
          "type": "component",
          "target": "geek-select-gE6yipGxrtq8",
          "action": "getValue",
          "params": []
        },
        "root": "data",
        "label": "label",
        "value": "name"
      },
      "$classes": null,
      "popperClass": null,
      "clearable": null,
      "multiple": null,
      "allowCreate": null,
      "disabled": null,
      "$prop": "options"
    },{
      "$id": "geek-select-ertjTwWBwedf",
      "$type": "geek-select",
      "$visible": true,
      "$prop": "options",
      "$classes": null,
      "label": '可创建条目',
      "prop": "select3",
      "popperClass": null,
      "clearable": null,
      "multiple": null,
      "allowCreate": true,
      "filterable": true,
      "disabled": null,
      "remoteFilter": {
        "params": {
          "type": "component",
          "target": "",
          "action": ""
        }
      }
    }
  ],
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

## 处理器

添加下拉框修改处理器。

::: leivii
``` js
{
  "$id": "geek-form-TYXnuCF59Jpm",
  "$type": "geek-form",
  "$visible": true,
  "$body": [{
    "$id": "geek-select-sphjTwWBwqhv",
    "$type": "geek-select",
    "$visible": true,
    "$prop": "options",
    "$classes": null,
    "popperClass": null,
    "clearable": null,
    "multiple": null,
    "allowCreate": null,
    "filterable": false,
    "disabled": null,
    "remoteFilter": {
      "params": {
        "type": "component",
        "target": "",
        "action": ""
      }
    },
    "$handlers": [{
      "type": "component",
      "name": "change",
      "target": "geek-form-TYXnuCF59Jpm",
      "action": "$message",
      "params": [{
        "type": "doc",
        "target": "",
        "action": {
          "type": "success",
          "message": "lang.wms.fed.modificationSuccess"
        },
        "name": "options"
      }]
    }],
    "prop": "select",
    "label": "下拉框"
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
| labelWidth | 标签宽度 | string | - | - |
| prop | 字段名 | string | - | - |
| placeholder | 占位符 | string | - | - |
| popperClass | 下拉框主题 | string | - | - |
| size | 尺寸 | string | medium/small/mini | - |
| clearable | 可清除 | boolean | - | false |
| multiple | 多选 | boolean | - | false |
| connector | 连接符（多选可用） | string | - | - |
| allowCreate | 可创建 | boolean | - | false |
| filterable | 可查询 | boolean | - | false |
| remoteFilter | 远程查询接口 | Object | - | - |
| filterOptions | 过滤函数 | string | - | 'options => options' |
| rules | 规则验证 | array | - | - |
| disabled | 禁用 | boolean | - | false |
| value | 默认值 | String/Number/Array | - | - |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数|
| ---- | ---- | ---- |
| getLabel | 获取显示数据 | - |

</div>