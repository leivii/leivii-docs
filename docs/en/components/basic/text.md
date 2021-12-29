---
title: 文本
---

# 文本

常用的文本。

## 文本类型

类型可配置为：文本、时间、字典。

::: leivii
``` js
{
  '$id': 'geek-container-Xeo2dfuHFjLM',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-text-N5FLRL8atGFF',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0,
        'fontSize': 0
      },
      '$classes': null
    },
    {
      '$id': 'geek-text-zi35DRkZ7aXb',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'type': 'time',
      'text': '{{new Date()}}',
      'format': 'YYYY-MM-DD hh:mm:ss'
    },
    {
      '$id': 'geek-text-hFxKVSNPQ1YX',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'type': 'dict'
    },
    {
      '$id': 'geek-text-DWKDo9E5EGfg',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'type': 'dict',
      'textAlign': 'center',
      'whiteSpace': '',
      'code': 'dict',
      '$prop': 'dict',
      'text': '1'
    }
  ],
  'grids': [],
  '$classes': 'm-md',
  'limit': 0,
  'gutter': 0,
  'cols': 5,
  '$dataSource': [{
    'type': 'custom',
    'subtype': 'dict',
    'autoProcess': true,
    'scoped': false,
    'cache': false,
    'root': 'data',
    'dictValue': [{
      'label': '字典1',
      'value': '1'
    }],
    'key': 'dict'
  }]
}
```
:::

## 颜色

文本配置颜色。

::: leivii
``` js
{
  '$id': 'geek-container-Xeo2dfuHFjLM',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-text-hFxKVSNPQ1YX',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'type': 'dict'
    },
    {
      '$id': 'geek-text-Quq7f9sfG4py',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'color': '#FF6200'
    },
    {
      '$id': 'geek-text-uaL9XcpjvpDH',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'color': '#88FF00'
    },
    {
      '$id': 'geek-text-gfzmhTAi8xDk',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'color': '#00FFD4'
    }
  ],
  'grids': [],
  '$classes': '',
  'limit': 0,
  'gutter': 0,
  'cols': 5,
}
```
:::

## 字号

文本配置字体大小。

::: leivii
``` js
{
  '$id': 'geek-container-Xeo2dfuHFjLM',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-text-hFxKVSNPQ1YX',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'type': 'dict'
    },
    {
      '$id': 'geek-text-RPNoBNOBTizk',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'fontSize': '14px'
    },
    {
      '$id': 'geek-text-Quq7f9sfG4py',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'color': null,
      'fontSize': '24px'
    }
  ],
  'grids': [],
  '$classes': '',
  'limit': 0,
  'gutter': 0,
  'cols': 5,
}
```
:::

## 行高

文本配置行高。

::: leivii
``` js
{
  '$id': 'geek-container-Xeo2dfuHFjLM',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-text-hFxKVSNPQ1YX',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
    },
    {
      '$id': 'geek-text-sXfrbzkMdftT',
      '$type': 'geek-text',
      '$visible': true
    },
    {
      '$id': 'geek-text-uHSNRtfVqlOS',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'lineHeight': '60px'
    }
  ],
  'grids': [],
  '$classes': '',
  'limit': 0,
  'gutter': 0,
  'cols': 5,
  '$dataSource': []
}
```
:::

## 对齐

文本配置对齐方式。

::: leivii
``` js
{
  '$id': 'geek-container-EpfIw3Ul9DNG',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-text-KQGcfzh5P13u',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'textAlign': 'left'
    },
    {
      '$id': 'geek-text-4INkMgAQcSbQ',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'textAlign': 'center'
    },
    {
      '$id': 'geek-text-hmM45rgBqtXm',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'textAlign': 'right'
    }
  ],
  'grids': [],
  '$classes': null,
  'limit': 0,
  'gutter': 20,
  'cols': 5
}
```
:::

## 高亮

文本配置部分高亮。

::: leivii
``` js
{
  '$id': 'geek-container-EpfIw3Ul9DNG',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
    '$id': 'geek-text-c80Aqt09aixI',
    '$type': 'geek-text',
    '$visible': true,
    'highlight': {
      'start': 4,
      'end': 8,
      'color': 'red',
      'fontSize': '20px'
    },
    '$classes': null,
    'text': '文本显示红色放大字体'
  }],
  'grids': [],
  '$classes': null,
  'limit': 0,
  'gutter': 20,
  'cols': 5
}
```
:::

## 内容溢出

文本内容溢出处理。

::: leivii
``` js
{
  '$id': 'geek-container-EpfIw3Ul9DNG',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-text-kougqi4WEShn',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': 'border',
      'text': '文本超出范围依然显示',
      'overflow': 'visible',
      'whiteSpace': 'nowrap'
    },
    {
      '$id': 'geek-text-YaIzO8pMBZbM',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'overflow': 'hidden',
      'text': '文本超出范围隐藏',
      'whiteSpace': 'nowrap'
    },
    {
      '$id': 'geek-text-onxurxJwT6Fm',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'text': '文本滚动',
      'overflow': 'scroll',
      'whiteSpace': 'nowrap'
    },
    {
      '$id': 'geek-text-3Bo5FPMjWS5b',
      '$type': 'geek-text',
      '$visible': true,
      'highlight': {
        'start': 0,
        'end': 0
      },
      '$classes': null,
      'text': '文本超出范围之后滚动',
      'overflow': 'auto',
      'whiteSpace': 'nowrap'
    }
  ],
  'grids': [],
  '$classes': null,
  'limit': 0,
  'gutter': 100,
  'cols': 6
}
```
:::

## Props

<div class='props'>

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| text | 文本 | string | - | - |
| type | 类型 | string | text/ time / dict/ expression  | - |
| format | 时间格式 | string | - | YYYY-MM-DD |
| dict | 字典 | array | - | - |
| color | 颜色 | string | - | - |
| fontSize | 字号 | string | - | - |
| textAlign | 对齐 | string | left/center/right | left |
| highlight | 高亮 | object | {'start': '','end': '','color': 'red','fontSize': ''} | - |
| whiteSpace | 换行 | string | wrap/nowrap | - |
| overflow | 内容溢出 | string | visible/hidden/scroll/auto | - |

</div>
