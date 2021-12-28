---
title: 表格
---

# 表格控件

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。
。

::: leivii
``` js
{
    "$id": "geek-table-u9JYAfxo27nG",
    "$type": "geek-table",
    "$visible": true,
    "actions": [],
    "columns": [
        {
            "name": "userName",
            "label": "用户名",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        },
        {
            "name": "realName",
            "label": "姓名",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        },
        {
            "name": "phone",
            "label": "电话",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        }
    ],
    "$classes": null,
    "fitWidth": null,
    "$dataSource": [
        {
            "type": "api",
            "subtype": "LIST",
            "autoProcess": true,
            "scoped": true,
            "cache": false,
            "root": "data.recordList",
            "method": "GET",
            "api": "/coreresource/auth/user/pageQuery/v1",
            "params": {
                "type": "custom",
                "target": "",
                "action": {
                    "pageSize": {
                        "type": "expression",
                        "target": "",
                        "action": "2000"
                    },
                    "currentPage": {
                        "type": "component",
                        "target": "geek-table-u9JYAfxo27nG",
                        "action": "getPage",
                        "params": []
                    }
                }
            },
            "data": {
                "type": "custom",
                "action": {}
            },
            "key": "pageQuery"
        }
    ],
    "$prop": "pageQuery"
}
```
:::

## 分页表格

当数据量过多时，使用分页分解数据。 subtype设置为PAGING_LIST。showPagination设置为true

::: leivii
``` js
{
    "$id": "geek-table-u9JYAfxo27nG",
    "$type": "geek-table",
    "$visible": true,
    "actions": [],
    "columns": [
        {
            "name": "userName",
            "label": "用户名",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        },
        {
            "name": "realName",
            "label": "姓名",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        },
        {
            "name": "phone",
            "label": "电话",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        }
    ],
    "$classes": null,
    "fitWidth": null,
    "showSelection": false,
    "showIndex": true,
    "showPagination": true,
    "$dataSource": [
        {
            "type": "api",
            "subtype": "PAGING_LIST",
            "autoProcess": true,
            "scoped": true,
            "cache": false,
            "root": "data",
            "method": "GET",
            "api": "/coreresource/auth/user/pageQuery/v1",
            "params": {
                "type": "objectMerge",
                "target": "",
                "action": [
                    {
                        "type": "component",
                        "target": "geek-table-u9JYAfxo27nG",
                        "action": "getPagination",
                        "params": [
                            {
                                "type": "doc",
                                "target": "",
                                "action": "currentPage",
                                "name": "e=\"currentPage\""
                            },
                            {
                                "type": "doc",
                                "target": "",
                                "action": "pageSize",
                                "name": "t=\"pageSize\""
                            }
                        ]
                    }
                ]
            },
            "data": {
                "type": "custom",
                "action": {}
            },
            "page": "currentPage",
            "size": "pageSize",
            "total": "recordCount",
            "list": "recordList",
            "key": "pageQuery"
        }
    ],
    "$prop": "pageQuery",
    "filterArr": [
        "userName",
        "realName",
        "phone"
    ]
}
```
:::

## 可选择

选择多行数据时使用 showSelection，并根据设置selectionProps返回对象数组

::: leivii
``` js
{
    "$id": "geek-table-1",
    "$type": "geek-table",
    "$visible": true,
    "actions": [{
        "$id": "geek-button-1",
        "$type": "geek-button",
        "$visible": true,
        "$handlers": [
            {
                "type": "expression",
                "target": "",
                "name": "click",
                "action": "console.log(this.$('geek-table-1').getSelection(','))"
            }
        ],
        "$classes": null,
        "text": "通过表达式获取选中行值",
        "disabled": null
    },{
        "$id": "geek-button-8MXO8cuESD8P",
        "$type": "geek-button",
        "$visible": true,
        "$handlers": [
            {
                "type": "component",
                "name": "click",
                "target": "geek-table-1",
                "action": "getSelection",
                "params": [{
                    "type": "doc",
                    "target": "",
                    "name": "e",
                    "action": ","
                }]
            }
        ],
        "$classes": null,
        "text": "通过组件获取选中行值",
        "disabled": null
    },
    {
        "$id": "geek-button-W3sMAXvV2Ta9",
        "$type": "geek-button",
        "$visible": true,
        "$handlers": [
            {
                "type": "component",
                "name": "click",
                "target": "geek-table-1",
                "action": "setSelection",
                "params": [{
                    "type": "expression",
                    "target": "",
                    "name": "selected",
                    "action": "[273,274]"
                }]
            }
        ],
        "$classes": null,
        "text": "切换第一、第二行的选中状态",
        "disabled": null
    }],
    "columns": [
        {
            "name": "userName",
            "label": "用户名",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        },
        {
            "name": "realName",
            "label": "姓名",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        },
        {
            "name": "phone",
            "label": "电话",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        }
    ],
    "$classes": null,
    "fitWidth": null,
    "showSelection": true,
    "showIndex": null,
    "showPagination": null,
    "$dataSource": [
        {
            "type": "api",
            "subtype": "LIST",
            "autoProcess": true,
            "scoped": true,
            "cache": false,
            "root": "data.recordList",
            "method": "GET",
            "api": "/coreresource/auth/user/pageQuery/v1",
            "params": {
                "type": "custom",
                "target": "",
                "action": {
                    "pageSize": {
                        "type": "expression",
                        "target": "",
                        "action": "2000"
                    },
                    "currentPage": {
                        "type": "component",
                        "target": "geek-table-1",
                        "action": "getPage",
                        "params": []
                    }
                }
            },
            "data": {
                "type": "custom",
                "action": {}
            },
            "key": "pageQuery"
        }
    ],
    "$prop": "pageQuery",
    "clickRowToSelect": false,
    "filterable": false,
    "selectionProps": [
        "userId",
        "userName"
    ],
    "$handlers": [],
    "rowKey": "userId"
}
```
:::

## 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。

::: leivii
``` js
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
            "api": "/stationConfigController/queryBaseStationPriorityRuleByRuleId",
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
```
:::

## 表格过滤

通过关键字过滤表格。设置filterArr添加需过滤的表格列属性

::: leivii
``` js
{
    "$id": "geek-table-u9JYAfxo27nG",
    "$type": "geek-table",
    "$visible": true,
    "actions": [],
    "columns": [
        {
            "name": "userName",
            "label": "用户名",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        },
        {
            "name": "realName",
            "label": "姓名",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        },
        {
            "name": "phone",
            "label": "电话",
            "minWidth": 0,
            "tooltip": false,
            "fixed": "",
            "$body": [],
            "type": "text"
        }
    ],
    "$classes": null,
    "fitWidth": null,
    "showIndex": null,
    "showPagination": null,
    "$dataSource": [
        {
            "type": "api",
            "subtype": "LIST",
            "autoProcess": true,
            "scoped": true,
            "cache": false,
            "root": "data.recordList",
            "method": "GET",
            "api": "/coreresource/auth/user/pageQuery/v1",
            "params": {
                "type": "custom",
                "target": "",
                "action": {
                    "pageSize": {
                        "type": "expression",
                        "target": "",
                        "action": "2000"
                    },
                    "currentPage": {
                        "type": "component",
                        "target": "geek-table-u9JYAfxo27nG",
                        "action": "getPage",
                        "params": []
                    }
                }
            },
            "data": {
                "type": "custom",
                "action": {}
            },
            "key": "pageQuery"
        }
    ],
    "$prop": "pageQuery",
    "filterArr": [
        "userName",
        "realName",
        "phone"
    ],
    "clickRowToSelect": false,
    "filterable": true,
    "placeholder": "输入关键词进行过滤"
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| actions | 操作区 | Array | - | - |
| fitWidth | 自适应宽 | boolean | - | false |
| showSelection | 是否可以选中  | boolean | - | false |
| selectionProps | 多选字段 | array | - | - |
| selectionDisableProps | 多选禁用 | object | - | - |
| filterable | 是否对表格进行筛选操作,依据filterArr为参数 | boolean | - | false |
| filterArr | 表格列字段集合，key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | array | - | - |
| placeholder | 查询输入框占位符 | string | - | 请输入 |
| clickRowToSelect | 点击是否选中 | boolean | - | false |
| showIndex | 是否显示序号 | boolean | - | false |
| indexLabel | 序号文本 | String | - | - |
| showPagination | 是否显示分页 | boolean | - | false |
| pageSizes | 分页数量 | Array | - | [10, 20, 50, 100] |
| pageSize | 分页条数 | Number | - | 10 |
| rowKey | 行数据的 Key，用来优化 Table 的渲染 | String | - | id |

</div>

## ColumnsProps

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| name | 对应列内容的字段名 | String | - | - |
| label | 显示的标题 | String | - | - |
| minWidth | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | Number | - | - |
| tooltip | 超出隐藏 | boolean | - | false |
| expand | 可展开 | boolean | - | false |
| fixed | 列是否固定在左侧或者右侧 | string | left / right | - |
| $body | 子组件，渲染嵌套数据的配置选项	 | Array | - | - |
| type | 类型 | text / time / dict / expression | - | - |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| loadData | 获取表格数据 | - |
| getPagination | 获取分页信息 | 当前页字段默认currentPage,条数字段默认为pageSize } |
| getPage | 获取当前页 | - |
| getPageSize | 获取分页条数 | - |
| getTotal | 获取总数量 | - |
| checkSelection | 检查选中行 | - |
| setSelection | 设置选中行，根据设置的rowKey赋予表格选中列集合 | - |
| getSelection | 获取选中行 | 连接符 |
| exportExcel | 导出选中数据 | 报表名称：报表，报表类型：xlsx |
| getValue | 获取所有数据 | - |
| setValue | 设置数据（仅作为表单项使用时） | - |
| removeItem | 删除当前行数据 | - |
| removeSelection | 删除选中行 | - |
| handleRowClick | 点击行回调 | - |
| selectable | 判断多选是否禁用 | - |
| handlerExpand | 展开行回调 | - |

</div>

## Events

<div class="events">

| 事件名 | 说明 | 回调参数|
| ---- | ---- | ---- |
| change | 数据改变 |  |
| rowClick | 当某一行被点击时会触发该事件 | 当前row |
| removeItem | 删除行 |  |
| removeSelection | 删除选中行 | 删除提示信息 |
| expandClick | 展开行 | 当前row |

</div>
