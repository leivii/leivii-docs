---
title: 标签页
---

# 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。

::: leivii
``` js
{
  "$id": "geek-tab-WXJJVx1oU15S",
  "$type": "geek-tab",
  "$visible": true,
  "tabs": [{
      "name": "tab1639979926492",
      "title": "lang.wms.fed.userManagement",
      "content": [{
        "$id": "geek-text-TYK91nBN8sWV",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": null,
        "text": "用户管理"
      }]
    },
    {
      "name": "tab1639979952829",
      "title": "lang.wms.fed.storeManagement",
      "content": [{
        "$id": "geek-text-HftzHGQ7nFix",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": null,
        "text": "店铺管理"
      }]
    },
    {
      "name": "tab1639979965557",
      "title": "lang.wms.fed.rightsManagement",
      "content": [{
        "$id": "geek-text-hzXkYfIdr6b1",
        "$type": "geek-text",
        "$visible": true,
        "highlight": {
          "start": 0,
          "end": 0
        },
        "$classes": null,
        "text": "权限管理"
      }]
    }
  ],
  "$classes": null,
  "$body": []
}
```
:::

## 选项卡样式

选项卡样式的标签页，将mode设置为card。

::: leivii
``` js
{
  "$id": "geek-container-lAUlecznkIzi",
  "$type": "geek-container",
  "$visible": true,
  "$body": [{
    "$id": "geek-tab-WXJJVx1oU15S",
    "$type": "geek-tab",
    "$visible": true,
    "tabs": [{
        "name": "tab1639979926492",
        "title": "lang.wms.fed.userManagement",
        "content": [{
          "$id": "geek-text-TYK91nBN8sWV",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "用户管理"
        }]
      },
      {
        "name": "tab1639979952829",
        "title": "lang.wms.fed.storeManagement",
        "content": [{
          "$id": "geek-text-HftzHGQ7nFix",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "店铺管理"
        }]
      },
      {
        "name": "tab1639979965557",
        "title": "lang.wms.fed.rightsManagement",
        "content": [{
          "$id": "geek-text-hzXkYfIdr6b1",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "权限管理"
        }]
      }
    ],
    "$classes": "bg-color-white",
    "$body": [],
    "mode": "card"
  }],
  "grids": [],
  "$classes": "bg-color-white",
  "limit": 0,
  "gutter": 0
}
```
:::

## 卡片化

卡片化的标签页，将mode设置为border-card。

::: leivii
``` js
{
  "$id": "geek-container-lAUlecznkIzi",
  "$type": "geek-container",
  "$visible": true,
  "$body": [{
    "$id": "geek-tab-WXJJVx1oU15S",
    "$type": "geek-tab",
    "$visible": true,
    "tabs": [{
        "name": "tab1639979926492",
        "title": "lang.wms.fed.userManagement",
        "content": [{
          "$id": "geek-text-TYK91nBN8sWV",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "用户管理"
        }]
      },
      {
        "name": "tab1639979952829",
        "title": "lang.wms.fed.storeManagement",
        "content": [{
          "$id": "geek-text-HftzHGQ7nFix",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "店铺管理"
        }]
      },
      {
        "name": "tab1639979965557",
        "title": "lang.wms.fed.rightsManagement",
        "content": [{
          "$id": "geek-text-hzXkYfIdr6b1",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "权限管理"
        }]
      }
    ],
    "$classes": "bg-color-white",
    "$body": [],
    "mode": "border-card"
  }],
  "grids": [],
  "$classes": "bg-color-white",
  "limit": 0,
  "gutter": 0
}
```
:::

## 默认选中

通过设置defaultActive，默认选择打开标签。

::: leivii
``` js
{
  "$id": "geek-container-lAUlecznkIzi",
  "$type": "geek-container",
  "$visible": true,
  "$body": [{
    "$id": "geek-tab-WXJJVx1oU15S",
    "$type": "geek-tab",
    "$visible": true,
    "tabs": [{
        "name": "tab1639979926492",
        "title": "lang.wms.fed.userManagement",
        "content": [{
          "$id": "geek-text-TYK91nBN8sWV",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "用户管理"
        }]
      },
      {
        "name": "tab1639979952829",
        "title": "lang.wms.fed.storeManagement",
        "content": [{
          "$id": "geek-text-HftzHGQ7nFix",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "店铺管理"
        }]
      },
      {
        "name": "tab1639979965557",
        "title": "lang.wms.fed.rightsManagement",
        "content": [{
          "$id": "geek-text-hzXkYfIdr6b1",
          "$type": "geek-text",
          "$visible": true,
          "highlight": {
            "start": 0,
            "end": 0
          },
          "$classes": null,
          "text": "权限管理"
        }]
      }
    ],
    "$classes": "bg-color-white",
    "$body": [],
    "mode": "",
    "defaultActive": "tab1639979952829"
  }],
  "grids": [],
  "$classes": "bg-color-white",
  "limit": 0,
  "gutter": 0
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| mode | 风格类型 | string | card/border-card | - |
| tabs | 标签页 | tabsProps | - | - |
| defaultActive | 默认选中 | String | - | - |

</div>

## tabsProps

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| name | 标签页id | string | - | 'tab' + Date.now() |
| title | 标签名 | string | - | - |
| content | 标签子节点 | Array | - | - |

</div>