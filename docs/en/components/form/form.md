---
title: 表单
---

# 表单

由输入框、下拉框、单选框、穿梭框等多个控件组成，主要用于收集、校验、提交和展示表单数据。

## 基础用法

典型表单，包含各种表单项，可以配置表单项、重置表单项和提交接口api。

::: leivii
``` js
{
  "$id": "geek-container-H1FTaLb6j7UL",
  "$type": "geek-container",
  "$visible": true,
  "$body": [
    {
      "$id": "geek-form-JACnf8saNWmK",
      "$type": "geek-form",
      "$visible": true,
      "$body": [
        {
          "$id": "geek-input-N44gIg6bnfIF",
          "$type": "geek-input",
          "$visible": true,
          "label": "lang.wms.fed.employeeFullName",
          "$classes": null,
          "rows": 0,
          "maxlength": 0,
          "disabled": null,
          "placeholder": "lang.wms.fed.pleaseEnterContents",
          "prop": "employName"
        },
        {
          "$id": "geek-input-EAS30nI4h8yl",
          "$type": "geek-input",
          "$visible": true,
          "label": "lang.wms.fed.email",
          "$classes": null,
          "rows": 0,
          "maxlength": 0,
          "disabled": null,
          "prop": "email"
        }
      ],
      "grids": [],
      "$classes": null,
      "gutter": 50,
      "cols": 4,
      "hideFooter": false,
      "action": "/api/saveForm"
    }
  ],
  "grids": [],
  "$classes": null,
  "limit": 0,
  "gutter": 0
}
```
:::

## 自定义标签形式

通过设置Form中的labelPosition属性可以使该表单中组件继承该属性的标签对齐方式，同时还可使用labelSuffix属性为组件标签添加后缀名。

:::leivii
```js
{
  "$id": "geek-container-H1FTaLb6j7UL",
  "$type": "geek-container",
  "$visible": true,
  "$body": [
    {
      "$id": "geek-form-JACnf8saNWmK",
      "$type": "geek-form",
      "$visible": true,
      "$body": [
        {
          "$id": "geek-input-N44gIg6bnfIF",
          "$type": "geek-input",
          "$visible": true,
          "$classes": "",
          "rows": 0,
          "maxlength": 0,
          "disabled": null,
          "label": "lang.wms.fed.attribute"
        },
        {
          "$id": "geek-select-0uDQ7uGvQQWu",
          "$type": "geek-select",
          "$visible": true,
          "label": "lang.wms.fed.type",
          "$classes": null,
          "popperClass": null,
          "clearable": null,
          "multiple": null,
          "allowCreate": null,
          "filterable": null,
          "disabled": null,
          "$dataSource": [
            {
              "type": "custom",
              "subtype": "dict",
              "autoProcess": true,
              "scoped": true,
              "cache": false,
              "root": "data",
              "dictValue": [
                {
                  "label": "lang.wms.fed.areaType",
                  "value": "0"
                },
                {
                  "label": "lang.wms.fed.movementType",
                  "value": "1"
                }
              ],
              "key": "styles"
            }
          ],
          "$prop": "styles",
          "prop": "styles",
          "value": "0"
        },
        {
          "$id": "geek-input-number-O9HuOK1DDBnJ",
          "$type": "geek-input-number",
          "$visible": true,
          "label": "lang.wms.fed.long/mm",
          "$classes": null,
          "placeholder": "",
          "precision": 0,
          "disabled": null
        },
        {
          "$id": "geek-switch-VzKjK1cGMvL0",
          "$type": "geek-switch",
          "$visible": true,
          "label": "lang.wms.fed.exchangeTask.status",
          "$classes": null,
          "activeText": "",
          "inactiveText": "",
          "disabled": null
        }
      ],
      "grids": [],
      "$classes": "",
      "gutter": 50,
      "cols": 4,
      "hideFooter": true,
      "labelPosition": "left",
      "labelSuffix": "-自定义"
    }
  ],
  "grids": [],
  "$classes": null,
  "limit": 0,
  "gutter": 0
}
```
:::

## 自定义提交按钮栏

Form默认会在底部渲染提交和重置按钮，用于执行表单的相关默认行为。本例可通过设置hideFooter属性隐藏默认按钮栏，同时通过$body属性可配置所需的行为按钮。

:::leivii
```js
{
  "$id": "geek-container-H1FTaLb6j7UL",
  "$type": "geek-container",
  "$visible": true,
  "$body": [
    {
      "$id": "geek-form-JACnf8saNWmK",
      "$type": "geek-form",
      "$visible": true,
      "$body": [
        {
          "$id": "geek-input-N44gIg6bnfIF",
          "$type": "geek-input",
          "$visible": true,
          "$classes": "",
          "rows": 0,
          "maxlength": 0,
          "disabled": null,
          "label": "lang.wms.fed.employeeFullName",
          "prop": "name"
        },
        {
          "$id": "geek-input-0aQfZAoKCZZN",
          "$type": "geek-input",
          "$visible": true,
          "$classes": "",
          "rows": 0,
          "maxlength": 0,
          "disabled": null,
          "label": "lang.wms.fed.detailedAddress",
          "prop": "address"
        },
        {
          "$id": "geek-button-ec8MPA1oQzNV",
          "$type": "geek-button",
          "$visible": true,
          "text": "lang.wms.fed.submit",
          "$classes": null,
          "disabled": null,
          "type": "primary",
          "$handlers": [
            {
              "type": "component",
              "name": "click",
              "target": "geek-form-JACnf8saNWmK",
              "action": "$message",
              "params": [
                {
                  "type": "doc",
                  "target": "",
                  "action": {
                    "type": "success",
                    "message": "表单提交"
                  },
                  "name": "options"
                }
              ]
            }
          ]
        }
      ],
      "grids": [
        {
          "row": "auto",
          "cols": [
            {
              "span": 6,
              "offset": 1,
              "push": 0,
              "pull": 0,
              "align": "left"
            },
            {
              "span": 6,
              "offset": 1,
              "push": 0,
              "pull": 0,
              "align": "left"
            },
            {
              "span": 2,
              "offset": 16,
              "push": 0,
              "pull": 0,
              "align": "left"
            }
          ]
        }
      ],
      "$classes": "",
      "gutter": 0,
      "cols": 0,
      "hideFooter": true,
      "labelPosition": "top",
      "labelSuffix": ""
    }
  ],
  "grids": [],
  "$classes": null,
  "limit": 0,
  "gutter": 0
}
```
:::

## 表单内组件布局控制

根据具体目标，通过设置Form中的grids属性可以实现合适的网格布局方式。

:::leivii
```js
{
  "$id": "geek-container-H1FTaLb6j7UL",
  "$type": "geek-container",
  "$visible": true,
  "$body": [
    {
      "$id": "geek-form-JACnf8saNWmK",
      "$type": "geek-form",
      "$visible": true,
      "$body": [
        {
          "$id": "geek-input-N44gIg6bnfIF",
          "$type": "geek-input",
          "$visible": true,
          "$classes": "",
          "rows": 0,
          "maxlength": 0,
          "disabled": null,
          "label": "lang.wms.fed.attribute"
        },
        {
          "$id": "geek-select-0uDQ7uGvQQWu",
          "$type": "geek-select",
          "$visible": true,
          "label": "lang.wms.fed.warehouseAreaCategory",
          "$classes": null,
          "popperClass": null,
          "clearable": null,
          "multiple": null,
          "allowCreate": null,
          "filterable": null,
          "disabled": null,
          "$dataSource": [
            {
              "type": "custom",
              "subtype": "dict",
              "autoProcess": true,
              "scoped": true,
              "cache": false,
              "root": "data",
              "dictValue": [
                {
                  "label": "lang.wms.fed.warehouseAreaCategory",
                  "value": 0
                },
                {
                  "label": "lang.wms.fed.belongToCategory",
                  "value": 1
                }
              ],
              "key": "storeCategory"
            }
          ],
          "$prop": "storeCategory",
          "prop": "store"
        },
        {
          "$id": "geek-input-number-O9HuOK1DDBnJ",
          "$type": "geek-input-number",
          "$visible": true,
          "label": "lang.wms.fed.long/mm",
          "$classes": null,
          "placeholder": "",
          "precision": 0,
          "disabled": null
        },
        {
          "$id": "geek-switch-VzKjK1cGMvL0",
          "$type": "geek-switch",
          "$visible": true,
          "label": "lang.wms.fed.exchangeTask.status",
          "$classes": null,
          "activeText": "",
          "inactiveText": "",
          "disabled": null
        }
      ],
      "grids": [
        {
          "row": "auto",
          "cols": [
            {
              "span": 8,
              "offset": 1,
              "push": 0,
              "pull": 0,
              "align": "left"
            },
            {
              "span": 8,
              "offset": 1,
              "push": 0,
              "pull": 0,
              "align": "left"
            }
          ]
        },
        {
          "row": "auto",
          "cols": [
            {
              "span": 8,
              "offset": 1,
              "push": 0,
              "pull": 0,
              "align": "left"
            },
            {
              "span": 8,
              "offset": 1,
              "push": 0,
              "pull": 0,
              "align": "left"
            }
          ]
        }
      ],
      "$classes": "",
      "gutter": 0,
      "cols": 0,
      "hideFooter": true,
      "labelPosition": "",
      "labelSuffix": ""
    }
  ],
  "grids": [],
  "$classes": null,
  "limit": 0,
  "gutter": 0
}
```
:::

## 嵌套表单

当表单中需要根据数据加载不同表单项时，可以考虑表单内嵌入标签页，同时不同标签页下嵌入不同表单

:::leivii
```js
{
  "$id": "geek-container-H1FTaLb6j7UL",
  "$type": "geek-container",
  "$visible": true,
  "$body": [
    {
      "$id": "geek-form-JACnf8saNWmK",
      "$type": "geek-form",
      "$visible": true,
      "$body": [
        {
          "$id": "geek-select-F51tDLWj3Ldd",
          "$type": "geek-select",
          "$visible": true,
          "label": "lang.wms.fed.ownerCode",
          "$classes": "pr-xl pl",
          "popperClass": null,
          "clearable": null,
          "multiple": null,
          "allowCreate": null,
          "filterable": null,
          "disabled": null,
          "$dataSource": [
            {
              "type": "custom",
              "subtype": "dict",
              "autoProcess": true,
              "scoped": true,
              "cache": false,
              "root": "data",
              "dictValue": [
                {
                  "label": "lang.wms.fed.coding",
                  "value": "0"
                },
                {
                  "label": "lang.wms.fed.errorCoding",
                  "value": "1"
                },
                {
                  "label": "lang.wms.fed.codeDoesNotExist",
                  "value": "2"
                }
              ],
              "key": "cargoCode"
            }
          ],
          "$prop": "cargoCode",
          "prop": "code",
          "value": "0"
        },
        {
          "$id": "geek-input-3FiEVsiewDgi",
          "$type": "geek-input",
          "$visible": true,
          "label": "lang.wms.fed.skuCode",
          "$classes": "pr-xl pl",
          "rows": 0,
          "maxlength": 0,
          "disabled": null,
          "prop": "commodityCode"
        },
        {
          "$id": "geek-select-u0t9bWzpBTOZ",
          "$type": "geek-select",
          "$visible": true,
          "label": "lang.wms.fed.exchangeTask.status",
          "$classes": "pr-xl pl",
          "popperClass": null,
          "clearable": null,
          "multiple": null,
          "allowCreate": null,
          "filterable": null,
          "disabled": null,
          "$dataSource": [
            {
              "type": "custom",
              "subtype": "dict",
              "autoProcess": true,
              "scoped": true,
              "cache": false,
              "root": "data",
              "dictValue": [
                {
                  "label": "lang.wms.fed.available",
                  "value": "1"
                },
                {
                  "label": "lang.wms.fed.unavailable",
                  "value": "2"
                }
              ],
              "key": "status"
            }
          ],
          "$prop": "status",
          "prop": "status",
          "value": "1"
        },
        {
          "$id": "geek-tab-BPihJ9SRxuwz",
          "$type": "geek-tab",
          "$visible": true,
          "tabs": [
            {
              "name": "tab1639730952175",
              "title": "lang.wms.fed.mainInformation",
              "content": [
                {
                  "$id": "geek-form-mYCZSBzhsK6F",
                  "$type": "geek-form",
                  "$visible": true,
                  "$body": [
                    {
                      "$id": "geek-input-pgSZ4v3cZDRA",
                      "$type": "geek-input",
                      "$visible": true,
                      "label": "lang.wms.fed.strategyCenter",
                      "$classes": null,
                      "rows": 0,
                      "maxlength": 0,
                      "disabled": null,
                      "prop": "strategyCenter"
                    },
                    {
                      "$id": "geek-select-RiQHtPjrbdiX",
                      "$type": "geek-select",
                      "$visible": true,
                      "label": "lang.wms.fed.strategyType",
                      "$classes": null,
                      "popperClass": null,
                      "clearable": null,
                      "multiple": null,
                      "allowCreate": null,
                      "filterable": null,
                      "disabled": null,
                      "$dataSource": [
                        {
                          "type": "custom",
                          "subtype": "dict",
                          "autoProcess": true,
                          "scoped": true,
                          "cache": false,
                          "root": "data",
                          "dictValue": [
                            {
                              "label": "lang.wms.fed.strategyName",
                              "value": "0"
                            },
                            {
                              "label": "lang.wms.fed.policyCode",
                              "value": "1"
                            },
                            {
                              "label": "lang.wms.fed.strategyCodeOrNameOrDetailCannotBeEmpty---",
                              "value": "2"
                            }
                          ],
                          "key": "strategyType"
                        }
                      ],
                      "$prop": "strategyType",
                      "prop": "type",
                      "value": "0"
                    },
                    {
                      "$id": "geek-select-h3jifjZxNsUA",
                      "$type": "geek-select",
                      "$visible": true,
                      "label": "lang.wms.common.fed.restockClass",
                      "$classes": null,
                      "popperClass": null,
                      "clearable": null,
                      "multiple": null,
                      "allowCreate": null,
                      "filterable": null,
                      "disabled": null,
                      "$dataSource": [
                        {
                          "type": "custom",
                          "subtype": "dict",
                          "autoProcess": true,
                          "scoped": true,
                          "cache": false,
                          "root": "data",
                          "dictValue": [
                            {
                              "label": "lang.wms.fed.class.c",
                              "value": "0"
                            },
                            {
                              "label": "lang.wms.fed.class.b",
                              "value": "1"
                            },
                            {
                              "label": "lang.wms.fed.class.a",
                              "value": "2"
                            }
                          ],
                          "key": "category"
                        }
                      ],
                      "$prop": "category",
                      "prop": "category",
                      "value": "0"
                    },
                    {
                      "$id": "geek-select-CslXYs9G1qo3",
                      "$type": "geek-select",
                      "$visible": true,
                      "label": "lang.wms.fed.attribute",
                      "$classes": null,
                      "popperClass": null,
                      "clearable": null,
                      "multiple": null,
                      "allowCreate": null,
                      "filterable": null,
                      "disabled": null,
                      "$dataSource": [
                        {
                          "type": "custom",
                          "subtype": "dict",
                          "autoProcess": true,
                          "scoped": true,
                          "cache": false,
                          "root": "data",
                          "dictValue": [
                            {
                              "label": "lang.wms.fed.property04",
                              "value": "0"
                            },
                            {
                              "label": "lang.wms.fed.property08",
                              "value": "1"
                            },
                            {
                              "label": "lang.wms.fed.property07",
                              "value": "2"
                            },
                            {
                              "label": "lang.wms.fed.porperty05",
                              "value": "3"
                            }
                          ],
                          "key": "attributes"
                        }
                      ],
                      "$prop": "attributes",
                      "prop": "attributes",
                      "value": "0"
                    }
                  ],
                  "grids": [],
                  "$classes": null,
                  "gutter": 40,
                  "cols": 4
                }
              ]
            },
            {
              "name": "tab1639730975707",
              "title": "lang.wms.fed.controlInformation",
              "content": [
                {
                  "$id": "geek-form-dQgOO6sg0jRi",
                  "$type": "geek-form",
                  "$visible": true,
                  "$body": [
                    {
                      "$id": "geek-input-BpTjPVYiNAnF",
                      "$type": "geek-input",
                      "$visible": true,
                      "label": "lang.wms.fed.strategyCenter",
                      "$classes": null,
                      "rows": 0,
                      "maxlength": 0,
                      "disabled": null
                    },
                    {
                      "$id": "geek-select-In7uDOLteY6z",
                      "$type": "geek-select",
                      "$visible": true,
                      "label": "lang.wms.fed.strategyType",
                      "$classes": null,
                      "popperClass": null,
                      "clearable": null,
                      "multiple": null,
                      "allowCreate": null,
                      "filterable": null,
                      "disabled": null,
                      "$dataSource": [
                        {
                          "type": "custom",
                          "subtype": "dict",
                          "autoProcess": true,
                          "scoped": true,
                          "cache": false,
                          "root": "data",
                          "dictValue": [
                            {
                              "label": "lang.wms.fed.strategyName",
                              "value": "0"
                            },
                            {
                              "label": "lang.wms.fed.policyCode",
                              "value": "1"
                            },
                            {
                              "label": "lang.wms.fed.strategyCodeOrNameOrDetailCannotBeEmpty---",
                              "value": "2"
                            }
                          ],
                          "key": "strategyType"
                        }
                      ],
                      "$prop": "strategyType",
                      "prop": "type",
                      "value": "0"
                    },
                    {
                      "$id": "geek-select-XQQZ5iz6qBcs",
                      "$type": "geek-select",
                      "$visible": true,
                      "label": "lang.wms.fed.attribute",
                      "$classes": null,
                      "popperClass": null,
                      "clearable": null,
                      "multiple": null,
                      "allowCreate": null,
                      "filterable": null,
                      "disabled": null,
                      "$dataSource": [
                        {
                          "type": "custom",
                          "subtype": "dict",
                          "autoProcess": true,
                          "scoped": true,
                          "cache": false,
                          "root": "data",
                          "dictValue": [
                            {
                              "label": "lang.wms.fed.property04",
                              "value": "0"
                            },
                            {
                              "label": "lang.wms.fed.property08",
                              "value": "1"
                            },
                            {
                              "label": "lang.wms.fed.property07",
                              "value": "2"
                            },
                            {
                              "label": "lang.wms.fed.porperty05",
                              "value": "3"
                            }
                          ],
                          "key": "attributes"
                        }
                      ],
                      "$prop": "attributes",
                      "prop": "attributes",
                      "value": "0"
                    },
                    {
                      "$id": "geek-select-fffRi6Nkc8Nj",
                      "$type": "geek-select",
                      "$visible": true,
                      "label": "lang.wms.common.fed.restockClass",
                      "$classes": null,
                      "popperClass": null,
                      "clearable": null,
                      "multiple": null,
                      "allowCreate": null,
                      "filterable": null,
                      "disabled": null,
                      "$dataSource": [
                        {
                          "type": "custom",
                          "subtype": "dict",
                          "autoProcess": true,
                          "scoped": true,
                          "cache": false,
                          "root": "data",
                          "dictValue": [
                            {
                              "label": "lang.wms.fed.class.c",
                              "value": "0"
                            },
                            {
                              "label": "lang.wms.fed.class.b",
                              "value": "1"
                            },
                            {
                              "label": "lang.wms.fed.class.a",
                              "value": "2"
                            }
                          ],
                          "key": "category"
                        }
                      ],
                      "$prop": "category",
                      "prop": "category",
                      "value": "0"
                    }
                  ],
                  "grids": [],
                  "$classes": null,
                  "gutter": 40,
                  "cols": 4
                }
              ]
            },
            {
              "name": "tab1639730984044",
              "title": "lang.wms.fed.taskInformation",
              "content": [
                {
                  "$id": "geek-form-jsQT3xsao4fg",
                  "$type": "geek-form",
                  "$visible": true,
                  "$body": [
                    {
                      "$id": "geek-input-munmM6keDRys",
                      "$type": "geek-input",
                      "$visible": true,
                      "label": "lang.wms.fed.strategyCenter",
                      "$classes": null,
                      "rows": 0,
                      "maxlength": 0,
                      "disabled": null
                    },
                    {
                      "$id": "geek-select-NK9oGo3XMWUr",
                      "$type": "geek-select",
                      "$visible": true,
                      "label": "lang.wms.fed.strategyType",
                      "$classes": null,
                      "popperClass": null,
                      "clearable": null,
                      "multiple": null,
                      "allowCreate": null,
                      "filterable": null,
                      "disabled": null,
                      "$dataSource": [
                        {
                          "type": "custom",
                          "subtype": "dict",
                          "autoProcess": true,
                          "scoped": true,
                          "cache": false,
                          "root": "data",
                          "dictValue": [
                            {
                              "label": "lang.wms.fed.strategyName",
                              "value": "0"
                            },
                            {
                              "label": "lang.wms.fed.policyCode",
                              "value": "1"
                            },
                            {
                              "label": "lang.wms.fed.strategyCodeOrNameOrDetailCannotBeEmpty---",
                              "value": "2"
                            }
                          ],
                          "key": "strategyType"
                        }
                      ],
                      "$prop": "strategyType",
                      "prop": "type",
                      "value": "0"
                    },
                    {
                      "$id": "geek-select-OyHtbbEmNBrY",
                      "$type": "geek-select",
                      "$visible": true,
                      "label": "lang.wms.fed.attribute",
                      "$classes": null,
                      "popperClass": null,
                      "clearable": null,
                      "multiple": null,
                      "allowCreate": null,
                      "filterable": null,
                      "disabled": null,
                      "$dataSource": [
                        {
                          "type": "custom",
                          "subtype": "dict",
                          "autoProcess": true,
                          "scoped": true,
                          "cache": false,
                          "root": "data",
                          "dictValue": [
                            {
                              "label": "lang.wms.fed.property04",
                              "value": "0"
                            },
                            {
                              "label": "lang.wms.fed.property08",
                              "value": "1"
                            },
                            {
                              "label": "lang.wms.fed.property07",
                              "value": "2"
                            },
                            {
                              "label": "lang.wms.fed.porperty05",
                              "value": "3"
                            }
                          ],
                          "key": "attributes"
                        }
                      ],
                      "$prop": "attributes",
                      "prop": "attributes",
                      "value": "0"
                    },
                    {
                      "$id": "geek-select-EPiRoCTBhP9d",
                      "$type": "geek-select",
                      "$visible": true,
                      "label": "lang.wms.common.fed.restockClass",
                      "$classes": null,
                      "popperClass": null,
                      "clearable": null,
                      "multiple": null,
                      "allowCreate": null,
                      "filterable": null,
                      "disabled": null,
                      "$dataSource": [
                        {
                          "type": "custom",
                          "subtype": "dict",
                          "autoProcess": true,
                          "scoped": true,
                          "cache": false,
                          "root": "data",
                          "dictValue": [
                            {
                              "label": "lang.wms.fed.class.c",
                              "value": "0"
                            },
                            {
                              "label": "lang.wms.fed.class.b",
                              "value": "1"
                            },
                            {
                              "label": "lang.wms.fed.class.a",
                              "value": "2"
                            }
                          ],
                          "key": "category"
                        }
                      ],
                      "$prop": "category",
                      "prop": "category",
                      "value": "0"
                    }
                  ],
                  "grids": [],
                  "$classes": null,
                  "gutter": 40,
                  "cols": 4
                }
              ]
            }
          ],
          "$classes": ""
        }
      ],
      "grids": [
        {
          "row": "auto",
          "cols": [
            {
              "span": 8,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "align": "left"
            },
            {
              "span": 8,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "align": "left"
            },
            {
              "span": 8,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "align": "left"
            }
          ]
        }
      ],
      "$classes": "",
      "gutter": 0,
      "cols": 0,
      "hideFooter": true,
      "labelPosition": "",
      "labelSuffix": ""
    },
    {
      "$id": "geek-button-B8oxsJT7CxKe",
      "$type": "geek-button",
      "$visible": true,
      "text": "lang.wms.fed.submit",
      "$classes": null,
      "disabled": null,
      "type": "primary",
      "$handlers": [
        {
          "type": "component",
          "name": "click",
          "target": "geek-form-JACnf8saNWmK",
          "action": "validate",
          "params": []
        },
        {
          "type": "component",
          "name": "click",
          "target": "geek-form-JACnf8saNWmK",
          "action": "$message",
          "params": [
            {
              "type": "doc",
              "target": "",
              "action": {
                "type": "success",
                "message": "查看控制台获取的表单信息"
              },
              "name": "options"
            }
          ]
        },
        {
          "type": "expression",
          "name": "click",
          "action": "console.log('form===', this.$('geek-form-JACnf8saNWmK').getForm())"
        }
      ]
    }
  ],
  "grids": [],
  "$classes": null,
  "limit": 0,
  "gutter": 0,
  "mode": "vertical"
}
```
:::

## Props

<div class='props'>

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| $body | 子节点 | array | - | - |
| action | 接口 | string | - | - |
| size | 尺寸 | string | mini/small/medium | - |
| hideFooter | 隐藏按钮 | boolean | - | true |
| labelPosition | 标签位置 | string | top/left/right | top |
| labelWidth | 标签宽度 | string | - | auto |
| labelSuffix | 标签后缀 | string | - | - |
| submitText | 提交文本 | string | - | 提交 |
| width | 宽度 | string/number | - | auto |
| cols | 列数 | number | - | 1 |
| gutter | 间隔 | number | - | 0 |
| grids | 网格 | array | - | - |

</div>

## Methods

<div class="methods">

| 方法名 | 说明 | 参数|
| ---- | ---- | ---- |
| getForm | 获取表单数据 | - |
| getProp | 获取属性值 | prop: string |
| setProp | 设置属性值 | prop: string, val: string |
| validate | 表单验证 | - |

</div>

## Events

<div class="events">

| 事件名 | 说明 | 回调参数|
| ---- | ---- | ---- |
| submit | 提交 | - |
| reset | 重置 | - |

</div>