---
title: 搜索框
---

# 搜索框

通常需要搭配其他组件使用（子组件仅限选择表单和按钮）。比如 page 配置 数据源 后，可以用来实现简单数据过滤查找 。

## 基础用法
用于展示一个简单搜索框。

::: leivii
``` js
{
    "$id": "geek-search-bar-HG29N0kLjTrN",
    "$type": "geek-search-bar",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-form-0",
            "$type": "geek-form",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-input-0",
                    "$type": "geek-input",
                    "placeholder": "请输入",
                    "$visible": true,
                    "prop": "code",
                    "$classes": null,
                    "rows": 0,
                    "maxlength": 0,
                    "disabled": null
                },
                {
                    "$id": "geek-input-1",
                    "$type": "geek-input",
                    "placeholder": "请输入",
                    "$visible": true,
                    "prop": "code2",
                    "$classes": null,
                    "rows": 0,
                    "maxlength": 0,
                    "disabled": null
                },
                {
                    "$id": "geek-input-2",
                    "$type": "geek-input",
                    "placeholder": "请输入",
                    "$visible": true,
                    "prop": "code3",
                    "$classes": null,
                    "rows": 0,
                    "maxlength": 0,
                    "disabled": null
                }
            ],
            "grids": [],
            "$classes": null,
            "gutter": 20,
            "cols": 3
        }
    ],
    "actions": [],
    "$classes": null,
    "unfoldNum": 2,
    "folded": true,
    "$handlers": []
}
```
:::

## 处理器事件
查询通常用于表格获取数据、重置用于重置表单。

::: leivii
``` js
{
    "$id": "geek-search-bar-HG29N0kLjTrN",
    "$type": "geek-search-bar",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-form-1",
            "$type": "geek-form",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-input-3",
                    "$type": "geek-input",
                    "placeholder": "请输入",
                    "$visible": true,
                    "prop": "code",
                    "$classes": null,
                    "rows": 0,
                    "maxlength": 0,
                    "disabled": null
                }
            ],
            "grids": [],
            "$classes": null,
            "gutter": 0,
            "cols": 3
        }
    ],
    "actions": [],
    "$classes": null,
    "unfoldNum": 0,
    "folded": null,
    "$handlers": [
        {
            "type": "component",
            "name": "search",
            "target": "geek-form-1",
            "action": "",
            "params": []
        },
        {
            "type": "component",
            "name": "unfold",
            "target": "",
            "action": "",
            "params": []
        },
        {
            "type": "component",
            "name": "reset",
            "target": "geek-form-1",
            "action": "reset",
            "params": []
        },
        {
            "type": "component",
            "name": "fold",
            "target": "geek-table-0ErEq5wnedIb",
            "action": "loadData",
            "params": []
        }
    ]
}
```
:::

## 自定义组件
自定义添加底部操作栏组件。

::: leivii
``` js
{
    "$id": "geek-search-bar-HG29N0kLjTrN",
    "$type": "geek-search-bar",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-form-2",
            "$type": "geek-form",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-input-4",
                    "$type": "geek-input",
                    "placeholder": "请输入",
                    "$visible": true,
                    "prop": "code",
                    "$classes": null,
                    "rows": 0,
                    "maxlength": 0,
                    "disabled": null
                }
            ],
            "grids": [],
            "$classes": null,
            "gutter": 0,
            "cols": 3
        }
    ],
    "actions": [
        {
            "$id": "geek-button-HEMYcpjsBFJg",
            "$type": "geek-button",
            "$visible": true,
            "text": "查询",
            "$handlers": [{
                "type": "expression",
                "name": "click",
                "action": "console.log('自定义')"
            }]
        }
    ],
    "$classes": null,
    "unfoldNum": 0,
    "folded": null,
    "$handlers": []
}
```
:::


## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| $body | 子节点 | Array | - | - |
| folded | 默认折叠 | Boolean | -  | - |
| unfoldNum | 节点折叠数 | Number | - | - |
| actions | 操作区 | Array | - | - |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数|
| ---- | ---- | ---- |
| - | - | - |

</div>

## Events

<div class="events">

| 事件名 | 说明 | 回调参数|
| ---- | ---- | ---- |
| fold | 折叠 | - |
| unfold | 展开 | - |
| reset | 重置 | 通常重置会调子组件表单的重置方法 |
| search | 查询 | - |

</div>
