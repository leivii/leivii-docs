---
title: 弹性容器
---

# 弹性容器

用于弹性布局的容器组件，同flex属性样式：
>组件采用了 flex 布局，使用前请确定目标浏览器是否兼容

## 基础用法

::: leivii
``` js
{
    "$id": "geek-flex-container-ns03RuA3Wd03",
    "$type": "geek-flex-container",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-button-CXsXt2C8oZ95",
            "$type": "geek-button",
            "$visible": true,
            "text": "1"
        },
        {
            "$id": "geek-button-e00nQ1YBsuNs",
            "$type": "geek-button",
            "$visible": true,
            "text": "2"
        }
    ],
    "$classes": null,
    "justify": "space-between",
    "align": "center"
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| direction | 子元素的排列方向 | string | row / column | row |
| wrap | 换行属性 | String | inherit / wrap / nowrap  | inherit |
| gutter | 元素之间的间隔 | Number / String | 同flex-gutter属性样式 | - |
| justify |主轴（横向）上的对齐方式 | String | 同justify-content属性样式 | start |
| align | 交叉轴（纵向）上的对齐方式 | String | 同align-items属性样式 | top |
| width | 宽度 | String | - | auto |
| height | 高度 | String | - | 100% |

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
