---
title: 容器
---

# 容器

用于布局的容器组件，方便快速搭建页面的基本结构：
>组件采用了 flex 布局，使用前请确定目标浏览器是否兼容

## 基础用法

使用单一分栏创建基础的栅格布局。

<div class="container-doc">

::: leivii
``` js
{
    "$id": "geek-container-PayvEEWj5idB",
    "$type": "geek-container",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-text-v9GvascFaczv",
            "$type": "geek-text",
            "$visible": true,
            "highlight": {
                "start": 0,
                "end": 0
            },
            "$classes": null,
            "text": "1"
        },
        {
            "$id": "geek-text-1CyPxm5kStoI",
            "$type": "geek-text",
            "$visible": true,
            "text": "2"
        },
        {
            "$id": "geek-text-phQMfBtnzKdO",
            "$type": "geek-text",
            "$visible": true,
            "highlight": {
                "start": 0,
                "end": 0
            },
            "$classes": null,
            "text": "3"
        },
        {
            "$id": "geek-text-C9dZMo6AG2SZ",
            "$type": "geek-text",
            "$visible": true,
            "text": "4"
        }
    ],
    "grids": [],
    "$classes": null,
    "limit": 4,
    "gutter": 0,
    "rows": 1,
    "cols": 4,
    "scalable": true
}
```
:::

## 分栏间隔

使用 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

::: leivii
``` js
{
    "$id": "geek-container-PayvEEWj5idB",
    "$type": "geek-container",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-text-v9GvascFaczv",
            "$type": "geek-text",
            "$visible": true,
            "highlight": {
                "start": 0,
                "end": 0
            },
            "$classes": null,
            "text": "1"
        },
        {
            "$id": "geek-text-1CyPxm5kStoI",
            "$type": "geek-text",
            "$visible": true,
            "text": "2"
        },
        {
            "$id": "geek-text-phQMfBtnzKdO",
            "$type": "geek-text",
            "$visible": true,
            "highlight": {
                "start": 0,
                "end": 0
            },
            "$classes": null,
            "text": "3"
        },
        {
            "$id": "geek-text-C9dZMo6AG2SZ",
            "$type": "geek-text",
            "$visible": true,
            "text": "4"
        }
    ],
    "grids": [],
    "$classes": null,
    "limit": 4,
    "gutter": 20,
    "rows": 1,
    "cols": 4,
    "scalable": true
}
```
:::

## 分栏偏移

通过制定网格属性可以指定分栏偏移的栏数。

::: leivii

``` js
{
    "$id": "geek-container-4LRzD4RcwkPh",
    "$type": "geek-container",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-text-LrqXrJ3YpBf6",
            "$type": "geek-text",
            "$visible": true,
            "highlight": {
                "start": 0,
                "end": 0
            },
            "$classes": null,
            "text": "1"
        },
        {
            "$id": "geek-text-xkfu12jBKnFU",
            "$type": "geek-text",
            "$visible": true,
            "highlight": {
                "start": 0,
                "end": 0
            },
            "$classes": null,
            "text": "2"
        },
        {
            "$id": "geek-text-zDpahzFFTYF7",
            "$type": "geek-text",
            "$visible": true,
            "highlight": {
                "start": 0,
                "end": 0
            },
            "$classes": "",
            "text": "3"
        },
        {
            "$id": "geek-text-LX6DXEGeF67r",
            "$type": "geek-text",
            "$visible": true,
            "highlight": {
                "start": 0,
                "end": 0
            },
            "$classes": null,
            "text": "4"
        },
        {
            "$id": "geek-text-s61Fa9zehdFg",
            "$type": "geek-text",
            "$visible": true,
            "highlight": {
                "start": 0,
                "end": 0
            },
            "$classes": null,
            "text": "5"
        }
    ],
    "grids": [
        {
            "row": "auto",
            "cols": [
                {
                    "span": 6,
                    "offset": 0,
                    "push": 6,
                    "pull": 0,
                    "align": "left"
                },
                {
                    "span": 6,
                    "offset": 0,
                    "push": 6,
                    "pull": 0,
                    "align": "left"
                }
            ]
        },
        {
            "row": "auto",
            "cols": [
                {
                    "span": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "align": "left"
                },
                {
                    "span": 12,
                    "offset": 6,
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
                    "span": 12,
                    "offset": 0,
                    "push": 6,
                    "pull": 0,
                    "align": "left"
                }
            ]
        }
    ],
    "$classes": null,
    "limit": 0,
    "gutter": 0,
    "rows": 1,
    "cols": 1,
    "scalable": true
}
```
:::

</div>

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| mode | 子元素的排列方向 | string | vertical / horizontal | vertical |
| scalable | 是否允许扩展 | boolean | - | - |
| limit | 显示数量 | Number | - | 0为全部显示 |
| grids | 网格 | array | - | - |
| rows | 行数 | Array / Number | - | - |
| cols | 列数 | Array / Number | - | - |
| gutter | 元素之间的间隔 | Number | - | - |
| cells | 格子描述 | Object | - | - |
| height | 高度 | String | - | - |
| $body | 子节点 | Array | - | - |

</div>

## Grids Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| row | 行高 | String | - | - |
| span | 列数 |  Number | - | - |
| offset | 左间隔格数 |  Number | - | - |
| push | 右移格数 |  Number | - | - |
| pull | 左移格数 |  Number | - | - |
| align | 对齐方式 |  String | left / right | left |

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
