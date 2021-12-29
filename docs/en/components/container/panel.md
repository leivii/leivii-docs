---
title: 面板
---

# 面板

将信息聚合在面板容器中展示。

## 基础用法

包含标题内容。

::: leivii
``` js
{
    "$id": "geek-panel-g9LZN0XGGcMb",
    "$type": "geek-panel",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-form-kcj6uTpDGhsh",
            "$type": "geek-form",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-input-number-XmyNtCUwEQgV",
                    "$type": "geek-input-number",
                    "$visible": true,
                    "label": "编号",
                    "$classes": null,
                    "placeholder": "",
                    "precision": 0,
                    "disabled": null,
                    "rules": [
                        "required"
                    ],
                    "prop": "zindex",
                    "min": 1,
                    "max": 9999
                },
                {
                    "$id": "geek-select-jvMGsiZzbba6",
                    "$type": "geek-select",
                    "$visible": true,
                    "remoteFilter": {},
                    "$classes": null,
                    "placeholder": "请选择",
                    "popperClass": null,
                    "clearable": true,
                    "multiple": null,
                    "filterable": null,
                    "disabled": null,
                    "$prop": "getAllAreaExtByArea",
                    "label": "逻辑区",
                    "prop": "warehouseAreaId",
                    "value": "",
                    "allowCreate": null
                }
            ],
            "grids": [],
            "$classes": null,
            "gutter": 20,
            "cols": 3,
            "hideFooter": true,
            "submitText": "添加到明细"
        },
        {
            "$id": "geek-flex-container-eM47xKmmVlNx",
            "$type": "geek-flex-container",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-button-PZ9XSrAfy0Fy",
                    "$type": "geek-button",
                    "$visible": true,
                    "text": "添加到明细",
                    "$classes": null,
                    "disabled": null,
                    "type": "primary",
                    "$handlers": [
                        {
                            "type": "component",
                            "name": "click",
                            "target": "geek-form-kcj6uTpDGhsh",
                            "action": "validate",
                            "params": []
                        },
                        {
                            "type": "expression",
                            "name": "click"
                        }
                    ]
                }
            ],
            "$classes": "mb-md",
            "justify": "end",
            "gutter": ""
        }
    ],
    "actions": [],
    "$classes": null,
    "headActions": [],
    "title": "明细查询"
}
```
:::

## 底部配置按钮

可以通过配置actions数组，实现渲染底部按钮栏

::: leivii
``` js
{
    "$id": "geek-panel-g9LZN0XGGcMb",
    "$type": "geek-panel",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-form-kcj6uTpDGhsh",
            "$type": "geek-form",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-input-number-XmyNtCUwEQgV",
                    "$type": "geek-input-number",
                    "$visible": true,
                    "label": "编号",
                    "$classes": null,
                    "placeholder": "",
                    "precision": 0,
                    "disabled": null,
                    "rules": [
                        "required"
                    ],
                    "prop": "zindex",
                    "min": 1,
                    "max": 9999
                },
                {
                    "$id": "geek-select-jvMGsiZzbba6",
                    "$type": "geek-select",
                    "$visible": true,
                    "remoteFilter": {},
                    "$classes": null,
                    "placeholder": "请选择",
                    "popperClass": null,
                    "clearable": true,
                    "multiple": null,
                    "filterable": null,
                    "disabled": null,
                    "$prop": "getAllAreaExtByArea",
                    "label": "逻辑区",
                    "prop": "warehouseAreaId",
                    "value": "",
                    "allowCreate": null
                }
            ],
            "grids": [],
            "$classes": null,
            "gutter": 20,
            "cols": 3,
            "hideFooter": true,
            "submitText": "添加到明细"
        },
        {
            "$id": "geek-flex-container-eM47xKmmVlNx",
            "$type": "geek-flex-container",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-button-PZ9XSrAfy0Fy",
                    "$type": "geek-button",
                    "$visible": true,
                    "text": "添加到明细",
                    "$classes": null,
                    "disabled": null,
                    "type": "primary",
                    "$handlers": [
                        {
                            "type": "component",
                            "name": "click",
                            "target": "geek-form-kcj6uTpDGhsh",
                            "action": "validate",
                            "params": []
                        },
                        {
                            "type": "expression",
                            "name": "click"
                        }
                    ]
                }
            ],
            "$classes": "mb-md",
            "justify": "end",
            "gutter": ""
        }
    ],
    "actions": [{
        "$id": "geek-button-dL7Zh7uf5LYI",
        "$type": "geek-button",
        "$visible": true,
        "text": "查看详情"
    }],
    "$classes": null,
    "headActions": [
        {
            "$id": "geek-button-vkVnojpsL0S4",
            "$type": "geek-button",
            "$visible": true,
            "text": "导出",
            "$classes": null,
            "disabled": null,
            "size": "medium",
            "type": "primary"
        }
    ],
    "title": "明细查询"
}
```
:::


## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | 标题 | string | - | - |
| titleClasses | 标题主题 | String | Theme  | - |
| headActions | 头部操作区 | Array | - | - |
| actions | 底部操作区 | Array | - | - |

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
| - | - | - |

</div>
