---
title: 下载
---

# 下载

常用的下载按钮。

## 基础用法

基础的下载用法。

::: leivii
``` js
{
  '$id': 'geek-container-s58WDAIM8rpX',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-download-HYB2T1aGQOeM',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': '/test/downLoad',
      'size': 'small'
    },
    {
      '$id': 'geek-download-nWq3epIQy3xj',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'success',
      'url': '/test/downLoad',
      'size': 'small'
    },
    {
      '$id': 'geek-download-a4ki627z1VKc',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'warning',
      'url': '/test/downLoad',
      'size': 'small'
    },
    {
      '$id': 'geek-download-4rVTt9xLeYOT',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'danger',
      'url': '/test/downLoad',
      'size': 'small'
    },
    {
      '$id': 'geek-download-x6qOADsoWEAd',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'info',
      'url': '/test/downLoad',
      'size': 'small'
    },
    {
      '$id': 'geek-download-zA5tEh9tUqvU',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'text',
      'url': '/test/downLoad',
      'size': 'small'
    }
  ],
  'grids': [],
  '$classes': null,
  'limit': 0,
  'gutter': 20,
  'cols': 6
}
```
:::

## 下载尺寸

下载按钮的尺寸。

::: leivii
``` js
{
  '$id': 'geek-container-s58WDAIM8rpX',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-download-BgqeP02zLWSV',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': '/test/downLoad',
      'size': 'mini'
    },
    {
      '$id': 'geek-download-HYB2T1aGQOeM',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': '/test/downLoad',
      'size': 'small'
    },
    {
      '$id': 'geek-download-8z6GTyqZOESg',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': '/test/downLoad',
      'size': 'medium'
    }
  ],
  'grids': [],
  '$classes': null,
  'limit': 0,
  'gutter': 20,
  'cols': 6
}
```
:::

## 下载前后的逻辑判断

如果下载没有其他业务逻辑，配置好url和参数后，点击会自动执行下载方法；
如果在下载前后需要做一些特殊处理，可以通过处理器的点击事件去配置。

::: leivii
``` js
{
  '$id': 'geek-container-s58WDAIM8rpX',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
    '$id': 'geek-download-A0Oc46v3thfy',
    '$type': 'geek-download',
    '$visible': true,
    'text': 'lang.wms.fed.downLoad',
    '$classes': null,
    'params': {
      'type': 'custom',
      'target': '',
      'action': {
        'id': {
          'type': 'expression',
          'target': '',
          'action': '1'
        }
      }
    },
    'disabled': null,
    'type': 'primary',
    'size': 'small',
    'url': 'test/downLoad',
    '$handlers': [{
        'type': 'component',
        'name': 'click',
        'target': 'geek-download-A0Oc46v3thfy',
        'action': '$confirm',
        'params': [{
            'type': 'doc',
            'target': '',
            'action': '确认下载？',
            'name': 'message'
          },
          {
            'type': 'doc',
            'target': '',
            'action': '',
            'name': 'title'
          },
          {
            'type': 'doc',
            'target': '',
            'action': {},
            'name': 'options'
          }
        ]
      },
      {
        'type': 'component',
        'name': 'click',
        'target': 'geek-download-A0Oc46v3thfy',
        'action': 'downloadAction',
        'params': []
      }
    ]
  }],
  'grids': [],
  '$classes': null,
  'limit': 0,
  'gutter': 20,
  'cols': 6
}
```
:::

## 下载子节点

下载的子节点。

::: leivii
``` js
{
  '$id': 'geek-container-s58WDAIM8rpX',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-download-HYB2T1aGQOeM',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': '',
      'url': '/test/downLoad',
      'size': 'small',
      'child': {
        '$id': 'geek-image-N5bLfdIExCdi',
        '$type': 'geek-image',
        '$visible': true,
        'url': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
        '$classes': null,
        'width': '100px'
      }
    },
    {
      '$id': 'geek-download-8z6GTyqZOESg',
      '$type': 'geek-download',
      '$visible': true,
      'text': '下载',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': '/test/downLoad',
      'size': 'small',
      'child': {
        '$id': 'geek-container-PdLIf1BzpalU',
        '$type': 'geek-container',
        '$visible': true,
        '$body': [{
          '$id': 'geek-text-zhvI15O9UIIj',
          '$type': 'geek-text',
          '$visible': true,
          'highlight': {
            'start': 0,
            'end': 0
          },
          '$classes': 'p-md',
          'text': '下载'
        }],
        'grids': [],
        '$classes': 'border border-color-primary',
        'limit': 0,
        'gutter': 0
      }
    }
  ],
  'grids': [],
  '$classes': null,
  'limit': 0,
  'gutter': 20,
  'cols': 6
}
```
:::

## Props

<div class='props'>

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| url | 下载地址 | string | - | - |
| text | 按钮文本 | - | - |
| type | 按钮类型 | string | primary / success / warning / danger / info / text | - |
| size | 尺寸 | string | medium/small/mini | - |
| params | 下载参数 | object | - | - |
| child | 子节点 | object | - | - |
| authCode | 权限 | string | - | - |
| disabled | 禁用 | boolean | - | - |

</div>
