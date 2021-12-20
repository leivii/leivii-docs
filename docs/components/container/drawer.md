---
title: 抽屉
---

# 抽屉

Drawer 拥有和 drawer 几乎相同的 API, 在 UI 上带来不一样的体验.

## 基础用法

呼出一个临时的侧边栏, 可以从多个方向呼出

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
                    "target": "geek-drawer-OAiSCU90jTxL",
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
            "text": "点击打开抽屉",
            "disabled": null
        },
        {
            "$id": "geek-drawer-OAiSCU90jTxL",
            "$type": "geek-drawer",
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
            "showCloseButton": true
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

和 Dialog 组件一样, Drawer 同样可以在其内部嵌套各种丰富的操作

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
                    "target": "geek-drawer-1",
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
            "text": "点击打开抽屉，打开控制台查看提交内容",
            "disabled": null
        },
        {
            "$id": "geek-drawer-1",
            "$type": "geek-drawer",
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
            "actions": [{
                "$id": "geek-button-5ujVBM72P4vN",
                "$type": "geek-button",
                "$visible": true,
                "text": "提交",
                "$classes": null,
                "disabled": null,
                "$handlers": [
                    {
                        "type": "expression",
                        "name": "click",
                        "action": "console.log({form: this.$('geek-form-CFjz3Ydzxsqt').getForm(),table: this.$('geek-form-ScmePVTY3n7R').getForm().baseStationPriorities})"
                    }
                ]
            }],
            "$classes": null,
            "title": "明细",
            "customClass": null,
            "showCloseButton": true
        }
    ],
    "grids": [],
    "$classes": null,
    "limit": 0,
    "gutter": 0
}
```
:::

## 多层嵌套

Drawer 组件也拥有多层嵌套的方法

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
                    "target": "geek-drawer-VBqN7irg9EZK",
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
            "text": "打开第一层抽屉",
            "disabled": null
        },
        {
            "$id": "geek-drawer-VBqN7irg9EZK",
            "$type": "geek-drawer",
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
                            "target": "geek-drawer-9duDFP5kEiFS",
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
                    "text": "打开第二层抽屉",
                    "disabled": null
                }
            ],
            "actions": [],
            "$classes": null,
            "title": "第一层抽屉",
            "customClass": null,
            "showCloseButton": true
        },
        {
            "$id": "geek-drawer-9duDFP5kEiFS",
            "$type": "geek-drawer",
            "$visible": true,
            "$body": [],
            "actions": [],
            "$classes": null,
            "title": "第二层抽屉",
            "customClass": null,
            "showCloseButton": true
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
| showHeader | 是否显示标题 | Boolean | - | true |
| title | 标题 | string | - | - |
| customClass | 窗体主题 | String | Theme  | - |
| position | Drawer 打开的方向 | String | rtl / ltr / ttb / btt  | - |
| size | 尺寸 | String / Number | -  | 30% |
| actions | 操作区 | Array | - | - |
| actionsJustify | 横向排列 | String | - | end |
| closeOnEsc | 是否点击ESC关闭 | Boolean | - | true |
| modal | 是否显示遮罩 | Boolean | - | true |
| showCloseButton | 是否显示关闭图标 | Boolean | - | false |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数|
| ---- | ---- | ---- |
| open | 打开抽屉 | 抽屉数据 |
| close | 关闭抽屉 | - |

</div>

## Events

<div class="events">

| 事件名 | 说明 | 回调参数|
| ---- | ---- | ---- |
| open | drawer 打开的回调 | - |
| close | drawer 关闭的回调 | - |

</div>
