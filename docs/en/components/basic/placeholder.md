---
title: 占位符
---

# 占位符

常用的占位操作。

## 基础用法

基础的占位符用法。

::: leivii
``` js
{
  '$id': 'geek-page',
  '$type': 'geek-page',
  '$visible': true,
  '$body': [{
      '$id': 'geek-text-ixnDo6OkC6Lx',
      '$type': 'geek-text',
      '$visible': true
    },
    {
      '$id': 'geek-text-LbNvzIDyawJj',
      '$type': 'geek-text',
      '$visible': true
    },
    {
      '$id': 'geek-placeholder-bAtrHwrJZM0m',
      '$type': 'geek-placeholder',
      '$visible': true
    },
    {
      '$id': 'geek-text-G9UoDcsNzkrQ',
      '$type': 'geek-text',
      '$visible': true
    }
  ],
  'bodyStyle': {},
  '$classes': null
}
```
:::

## 占位符样式

进阶的占位符用法。

::: leivii
``` js
{
  '$id': 'geek-page',
  '$type': 'geek-page',
  '$visible': true,
  '$body': [{
      '$id': 'geek-text-ixnDo6OkC6Lx',
      '$type': 'geek-text',
      '$visible': true
    },
    {
      '$id': 'geek-placeholder-wVu3U9UJ6Oe3',
      '$type': 'geek-placeholder',
      '$visible': true,
      'bodyStyle': {
        'background': 'red',
        'width': '200px',
        'height': '5px',
        'border-radius': '4px',
      },
      '$classes': null
    },
    {
      '$id': 'geek-text-LbNvzIDyawJj',
      '$type': 'geek-text',
      '$visible': true
    },
    {
      '$id': 'geek-placeholder-bAtrHwrJZM0m',
      '$type': 'geek-placeholder',
      '$visible': true,
      'bodyStyle': {
        'height': '50px'
      },
      '$classes': null,
      'title': 'lang.wms.fed.occupy'
    },
    {
      '$id': 'geek-text-G9UoDcsNzkrQ',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null
    }
  ],
  'bodyStyle': {},
  '$classes': null
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | 标题 | string | - | - |
| bodyStyle | 样式 | object | css属性 | - |

</div>