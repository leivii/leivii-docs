---
title: 树
---

# 树形控件

用清晰的层级结构展示信息，可展开或折叠。

## 基础用法

基础的树形结构展示。

::: leivii
``` js
{
    "$id": "geek-tree-dJLQgEY3ORuX",
    "$type": "geek-tree",
    "$visible": true,
    "defaultProps": {
        "children": "nodes",
        "label": "text"
    },
    "$classes": null,
    "showCheckbox": false,
    "filterable": false,
    "defaultExpandAll": false,
    "$dataSource": [
        {
            "type": "api",
            "subtype": "LIST",
            "autoProcess": true,
            "scoped": true,
            "cache": false,
            "root": "data",
            "method": "GET",
            "api": "/waresType/queryTreeWaresTypeList",
            "params": {
                "type": "custom",
                "target": "",
                "action": {
                    "warehouseAreaCategoryAsIntSplit": {
                        "type": "expression",
                        "target": "",
                        "action": "1,2"
                    }
                }
            },
            "data": {
                "type": "custom",
                "action": {}
            },
            "key": "queryTreeWaresTypeList"
        }
    ],
    "$prop": "queryTreeWaresTypeList",
    "checkStrictly": false,
    "placeholder": "请输入"
}
```
:::

## 可选择

适用于需要选择层级时使用。

::: leivii
``` js
{
    "$id": "geek-page",
    "$type": "geek-page",
    "$visible": true,
    "$body": [{
        "$id": "geek-container-7vHY9SORoWJ1",
        "$type": "geek-container",
        "$visible": true,
        "$body": [
            {
                "$id": "geek-button-pbVdoZSHKrCu",
                "$type": "geek-button",
                "$visible": true,
                "$handlers": [
                    {
                        "type": "component",
                        "name": "click",
                        "target": "geek-tree-0SnEz2oITmMO",
                        "action": "getCheckedNodes",
                        "params": []
                    }
                ],
                "$classes": null,
                "text": "通过node获取",
                "disabled": null
            },
            {
                "$id": "geek-button-bEfNILd5dqyc",
                "$type": "geek-button",
                "$visible": true,
                "$handlers": [
                    {
                        "type": "component",
                        "name": "click",
                        "target": "geek-tree-0SnEz2oITmMO",
                        "action": "setCheckedKeys",
                        "params": [
                            {
                                "type": "expression",
                                "target": "",
                                "action": "{{[{id: 7, text: \"A\"}]}}",
                                "name": "e"
                            }
                        ]
                    }
                ],
                "$classes": null,
                "text": "通过node设置",
                "disabled": null
            },
            {
                "$id": "geek-button-2",
                "$type": "geek-button",
                "$visible": true,
                "$handlers": [
                    {
                        "type": "component",
                        "name": "click",
                        "target": "geek-tree-0SnEz2oITmMO",
                        "action": "setCheckedKeys",
                        "params": [
                            {
                                "type": "expression",
                                "target": "",
                                "action": "{{[1]}}",
                                "name": "e"
                            }
                        ]
                    }
                ],
                "$classes": null,
                "text": "通过key设置（数组）",
                "disabled": null
            },
            {
                "$id": "geek-button-3",
                "$type": "geek-button",
                "$visible": true,
                "$handlers": [
                    {
                        "type": "component",
                        "name": "click",
                        "target": "geek-tree-0SnEz2oITmMO",
                        "action": "setCheckedKeys",
                        "params": [
                            {
                                "type": "expression",
                                "target": "",
                                "action": "1,7",
                                "name": "e"
                            }
                        ]
                    }
                ],
                "$classes": null,
                "text": "通过key设置（字符串）",
                "disabled": null
            }
        ],
        "grids": [],
        "$classes": null,
        "limit": 0,
        "gutter": 0,
        "rows": 1,
        "cols": 4
    },
    {
        "$id": "geek-tree-0SnEz2oITmMO",
        "$type": "geek-tree",
        "$visible": true,
        "defaultProps": {
            "children": "nodes",
            "label": "text"
        },
        "$classes": null,
        "showCheckbox": true,
        "filterable": null,
        "defaultExpandAll": null,
        "$dataSource": [
            {
                "type": "api",
                "subtype": "LIST",
                "autoProcess": true,
                "scoped": true,
                "cache": false,
                "root": "data",
                "method": "GET",
                "api": "/waresType/queryTreeWaresTypeList",
                "params": {
                    "type": "custom",
                    "target": "",
                    "action": {
                        "warehouseAreaCategoryAsIntSplit": {
                            "type": "expression",
                            "target": "",
                            "action": "1,2"
                        }
                    }
                },
                "data": {
                    "type": "custom",
                    "action": {}
                },
                "key": "queryTreeWaresTypeList"
            }
        ],
        "$prop": "queryTreeWaresTypeList",
        "checkStrictly": false
    }],
    "bodyStyle": {},
    "$classes": null
}
```
:::

## 是否展开全部

可将 Tree 的节点设置为默认展开或默认选中。

::: leivii
``` js
{
    "$id": "geek-tree-dJLQgEY3ORuX",
    "$type": "geek-tree",
    "$visible": true,
    "defaultProps": {
        "children": "nodes",
        "label": "text"
    },
    "$classes": null,
    "showCheckbox": false,
    "filterable": false,
    "defaultExpandAll": true,
    "$dataSource": [
        {
            "type": "api",
            "subtype": "LIST",
            "autoProcess": true,
            "scoped": true,
            "cache": false,
            "root": "data",
            "method": "GET",
            "api": "/waresType/queryTreeWaresTypeList",
            "params": {
                "type": "custom",
                "target": "",
                "action": {
                    "warehouseAreaCategoryAsIntSplit": {
                        "type": "expression",
                        "target": "",
                        "action": "1,2"
                    }
                }
            },
            "data": {
                "type": "custom",
                "action": {}
            },
            "key": "queryTreeWaresTypeList"
        }
    ],
    "$prop": "queryTreeWaresTypeList",
    "checkStrictly": false,
    "placeholder": "请输入"
}
```
:::
    
## 节点过滤

通过关键字过滤树节点。

::: leivii
``` js
{
    "$id": "geek-tree-dJLQgEY3ORuX",
    "$type": "geek-tree",
    "$visible": true,
    "defaultProps": {
        "children": "nodes",
        "label": "text"
    },
    "$classes": null,
    "showCheckbox": false,
    "filterable": true,
    "defaultExpandAll": false,
    "$dataSource": [
        {
            "type": "api",
            "subtype": "LIST",
            "autoProcess": true,
            "scoped": true,
            "cache": false,
            "root": "data",
            "method": "GET",
            "api": "/waresType/queryTreeWaresTypeList",
            "params": {
                "type": "custom",
                "target": "",
                "action": {
                    "warehouseAreaCategoryAsIntSplit": {
                        "type": "expression",
                        "target": "",
                        "action": "1,2"
                    }
                }
            },
            "data": {
                "type": "custom",
                "action": {}
            },
            "key": "queryTreeWaresTypeList"
        }
    ],
    "$prop": "queryTreeWaresTypeList",
    "checkStrictly": false,
    "placeholder": "输入关键字进行过滤"
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| defaultExpandAll | 是否默认展开所有节点 | boolean | - | false |
| showCheckbox | 节点是否可被选择	 | boolean | - | false |
| checkStrictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法 | boolean | - | false |
| filterable | 是否对树节点进行筛选操作,依据nodeKey为参数 | boolean | - | false |
| placeholder | 查询输入框占位符 | string | - | 请输入 |
| nodeKey | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | string | - | id |

</div>

## DefaultProps

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| label | 指定节点标签为节点对象的某个属性值 | string | - | label |
| children | 指定子树为节点对象的某个属性值 | string | - | children |

</div>


## Methods

<div class="methods">

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getCheckedNodes | 设置目前勾选的节点，使用此方法必须设置 node-key 属性 | - |
| getCheckedKeys | 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组 | - |
| setCheckedKeys | 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性 | 勾选节点的 key 的数组或者字符串，若checkStrictly为true则仅设置叶子节点的选中状态 |

</div>

## Events

<div class="events">

| 事件名 | 说明 | 回调参数|
| ---- | ---- | ---- |
| - | - | - |

</div>
