---
title: 页面
---

# 页面
Page 组件是 leivii 页面 JSON 配置中顶级容器组件，是整个页面配置的入口组件。

## 基本用法
内容区可以渲染各种组件

::: leivii
``` js
{
    "$id": "geek-page",
    "$type": "geek-page",
    "$visible": true,
    "$body": [
        {
            "$id": "geek-form-COzmyNhLf4br",
            "$type": "geek-form",
            "$visible": true,
            "$body": [
                {
                    "$id": "geek-input-7fL0I3k0hbmP",
                    "$type": "geek-input",
                    "$visible": true,
                    "placeholder": "请输入",
                    "label": "姓名"
                }
            ],
            "grids": [],
            "$classes": null,
            "gutter": 0
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
| bodyStyle | 包裹样式 | Object | -  | - |

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
| mounted | 页面挂载的时候触发回调 | - |
| destroyed | 页面销毁的时候触发回调 | - |

</div>