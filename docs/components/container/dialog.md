---
title: 对话框
---

# 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

调用组件的打开弹窗open，显示Dialog

::: leivii
``` js
{
    "$id": "geek-container-0",
    "$type": "geek-container",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-button-TMVHmGjhzWdJ",
            "$type": "geek-button",
            "$visible": true,
            "$handlers": [
                {
                    "type": "component",
                    "name": "click",
                    "target": "geek-dialog-OAiSCU90jTxL",
                    "action": "open",
                    "params": [
                        {
                            "type": "doc",
                            "target": "",
                            "action": null,
                            "name": "e"
                        }
                    ]
                }
            ],
            "$classes": null,
            "text": "点击打开弹窗",
            "disabled": null
        },
        {
            "$id": "geek-dialog-OAiSCU90jTxL",
            "$type": "geek-dialog",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-text-6jTNy9EkkvxY",
                    "$type": "geek-text",
                    "$visible": true,
                    "highlight": {
                        "start": 0,
                        "end": 0
                    },
                    "$classes": null,
                    "text": "这是一段信息"
                }
            ],
            "actions": [],
            "$classes": null,
            "title": "提示",
            "customClass": null,
            "showClose": true
        }
    ],
    "grids": [],
    "$classes": null,
    "limit": 0,
    "gutter": 0
}
```
:::

## 自定义内容

组件的内容可以是任意的，甚至可以是表格或表单

::: leivii
``` js
{
    "$id": "geek-container-0",
    "$type": "geek-container",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-button-TMVHmGjhzWdJ",
            "$type": "geek-button",
            "$visible": true,
            "$handlers": [
                {
                    "type": "component",
                    "name": "click",
                    "target": "geek-dialog-1",
                    "action": "open",
                    "params": [
                        {
                            "type": "doc",
                            "target": "",
                            "action": null,
                            "name": "e"
                        }
                    ]
                }
            ],
            "$classes": null,
            "text": "点击打开弹窗，打开控制台查看提交内容",
            "disabled": null
        },
        {
            "$id": "geek-dialog-1",
            "$type": "geek-dialog",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-form-CFjz3Ydzxsqt",
                    "$type": "geek-form",
                    "$visible": true,
                    "$body": [
                        {
                            "name": "",
                            "label": "策略代码",
                            "minWidth": 0,
                            "tooltip": false,
                            "fixed": "",
                            "$body": [],
                            "type": "input",
                            "dict": "",
                            "$id": "geek-input-6PvHqsttj321",
                            "$type": "geek-input",
                            "$visible": true,
                            "prop": "ruleCode",
                            "rules": [
                                "required"
                            ],
                            "$classes": null,
                            "rows": 0,
                            "maxlength": 0,
                            placeholder: "请输入"
                        },
                        {
                            "name": "",
                            "label": "策略名称",
                            "minWidth": 0,
                            "tooltip": false,
                            "fixed": "",
                            "$body": [],
                            "type": "input",
                            "dict": "",
                            "$id": "geek-input-EvcQOg5tUatN",
                            "$type": "geek-input",
                            "$visible": true,
                            "prop": "ruleName",
                            placeholder: "请输入"
                        }
                    ],
                    "grids": [],
                    "$classes": null,
                    "gutter": 30,
                    "cols": 4
                },
                {
                    "$id": "geek-form-ScmePVTY3n7R",
                    "$type": "geek-form",
                    "$visible": true,
                    "$body": [
                        {
                            "$id": "geek-table-pzhhQDWd4Q0J",
                            "$type": "geek-table",
                            "$visible": true,
                            "actions": [],
                            "columns": [
                                {
                                    "name": "baseStationPriorityDetails",
                                    "label": "",
                                    "minWidth": 0,
                                    "tooltip": false,
                                    "expand": true,
                                    "$body": [
                                        {
                                            "$id": "geek-table-UwP0PDZ2sqXN",
                                            "$type": "geek-table",
                                            "$visible": true,
                                            "actions": [],
                                            "columns": [
                                                {
                                                    "name": "status",
                                                    "label": "启用",
                                                    "minWidth": 0,
                                                    "tooltip": false,
                                                    "$body": [],
                                                    "type": "dict",
                                                    "dict": "enable"
                                                },
                                                {
                                                    "name": "priority",
                                                    "label": "优先级",
                                                    "minWidth": 0,
                                                    "tooltip": false,
                                                    "$body": []
                                                },
                                                {
                                                    "name": "priorityValueName",
                                                    "label": "明细项",
                                                    "minWidth": 0,
                                                    "tooltip": false,
                                                    "$body": []
                                                }
                                            ],
                                            "$classes": null,
                                            "fitWidth": null,
                                            "showSelection": null,
                                            "showIndex": true,
                                            "showPagination": null,
                                            "$prop": "scopeData.baseStationPriorityDetails",
                                            "prop": "",
                                            "indexLabel": "行号",
                                            "$handlers": []
                                        }
                                    ]
                                },
                                {
                                    "name": "priorityValue",
                                    "label": "波次信息条件",
                                    "minWidth": 0,
                                    "tooltip": false,
                                    "$body": []
                                }
                            ],
                            "$classes": "mt-md",
                            "fitWidth": false,
                            "showSelection": null,
                            "showIndex": true,
                            "showPagination": null,
                            "indexLabel": "行号",
                            "prop": "baseStationPriorities",
                            "$prop": "queryBaseStationPriorityRuleByRuleId",
                            "$dataSource": [
                                {
                                    "type": "api",
                                    "subtype": "LIST",
                                    "autoProcess": true,
                                    "scoped": true,
                                    "cache": false,
                                    "root": "data.baseStationPriorities",
                                    "method": "GET",
                                    "api": "http://rap2api.taobao.org/app/mock/295925/beetle/api_v1/stationConfigController/queryBaseStationPriorityRuleByRuleId",
                                    "params": {
                                        "type": "custom",
                                        "target": "",
                                        "action": {
                                            "ruleId": {
                                                "type": "expression",
                                                "target": "",
                                                "action": "this.dataSource.scopeData.id"
                                            },
                                            "dynamicWaveFlag": {
                                                "type": "expression",
                                                "target": "",
                                                "action": "1"
                                            }
                                        }
                                    },
                                    "data": {
                                        "type": "custom",
                                        "action": {}
                                    },
                                    "key": "queryBaseStationPriorityRuleByRuleId"
                                },
                                {
                                    "type": "custom",
                                    "subtype": "dict",
                                    "autoProcess": true,
                                    "scoped": true,
                                    "cache": false,
                                    "root": "data",
                                    "dictValue": [
                                        {
                                            "label": "启用",
                                            "value": 1
                                        },
                                        {
                                            "label": "禁用",
                                            "value": 0
                                        }
                                    ],
                                    "key": "enable"
                                }
                            ],
                            "$handlers": []
                        }
                    ],
                    "grids": [],
                    "$classes": null,
                    "gutter": 0
                }
            ],
            "actions": [],
            "$classes": null,
            "title": "明细",
            "customClass": null,
            "showClose": true,
            "$handlers": [
                {
                    "type": "component",
                    "name": "open",
                    "target": "geek-table-pzhhQDWd4Q0J",
                    "action": "loadData",
                    "params": []
                },
                {
                "type": "expression",
                "name": "confirm",
                "action": "console.log({form: this.$('geek-form-CFjz3Ydzxsqt').getForm(),table: this.$('geek-form-ScmePVTY3n7R').getForm().baseStationPriorities})"
                }
            ]
        }
    ],
    "grids": [],
    "$classes": null,
    "limit": 0,
    "gutter": 0
}
```
:::


## 嵌套的 Dialog
因为Dialog组件是append到body上的，所以支持多层嵌套，可以将它们平级放置

::: leivii
``` js
{
    "$id": "geek-container-1",
    "$type": "geek-container",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-button-borlmlUCk8z2",
            "$type": "geek-button",
            "$visible": true,
            "$handlers": [
                {
                    "type": "component",
                    "name": "click",
                    "target": "geek-dialog-VBqN7irg9EZK",
                    "action": "open",
                    "params": [
                        {
                            "type": "component",
                            "target": "",
                            "action": "",
                            "name": "e",
                            "params": []
                        }
                    ]
                }
            ],
            "$classes": null,
            "text": "打开第一层弹窗",
            "disabled": null
        },
        {
            "$id": "geek-dialog-VBqN7irg9EZK",
            "$type": "geek-dialog",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-button-9qRODvv4VitC",
                    "$type": "geek-button",
                    "$visible": true,
                    "$handlers": [
                        {
                            "type": "component",
                            "name": "click",
                            "target": "geek-dialog-9duDFP5kEiFS",
                            "action": "open",
                            "params": [
                                {
                                    "type": "component",
                                    "target": "",
                                    "action": "",
                                    "name": "e",
                                    "params": []
                                }
                            ]
                        }
                    ],
                    "$classes": null,
                    "text": "打开第二层弹窗",
                    "disabled": null
                }
            ],
            "actions": [],
            "$classes": null,
            "title": "第一层弹窗",
            "customClass": null,
            "showClose": true,
            "showDefaultActions": false
        },
        {
            "$id": "geek-dialog-9duDFP5kEiFS",
            "$type": "geek-dialog",
            "$visible": true,
            "$body": [],
            "actions": [],
            "$classes": null,
            "title": "第二层弹窗",
            "customClass": null,
            "showClose": true,
            "showDefaultActions": false
        }
    ],
    "bodyStyle": {},
    "$classes": null
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | 标题 | string | - | - |
| customClass | 窗体主题 | String | Theme  | - |
| width | 宽度 | String | - | 50% |
| height | 高度 | String | - | auto |
| actions | 操作区 | Array | - | - |
| closeOnEsc | 是否点击ESC关闭 | Boolean | - | true |
| showDefaultActions | 是否显示操作按钮 | Boolean | - | true |
| showClose | 是否显示关闭图标 | Boolean | - | false |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数|
| ---- | ---- | ---- |
| open | 打开弹窗 | 弹窗数据 |
| close | 关闭弹窗 | - |

</div>

## Events

<div class="events">

| 事件名 | 说明 | 回调参数|
| ---- | ---- | ---- |
| open | Dialog 打开的回调 | - |
| close | Dialog 关闭的回调 | - |
| submit | Dialog 提交的回调 | - |

</div>
