---
title: 链接
---

# 链接

常用的跳转链接。

## 基础用法

基础的链接用法。

::: leivii
``` js
{
  '$id': 'geek-container-oAyRkGYugqxu',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-link-JBMCf6JlfSHB',
      '$type': 'geek-link',
      '$visible': true,
      'type': 'info',
      '$classes': null,
      'underline': null,
      'newWindow': null,
      'disabled': null,
      'icon': '',
      'href': ''
    },
    {
      '$id': 'geek-link-Xfm3Js6Jg9Iv',
      '$type': 'geek-link',
      '$visible': true,
      'type': 'primary',
      '$classes': null,
      'underline': null,
      'newWindow': null,
      'disabled': null,
      'href': ''
    },
    {
      '$id': 'geek-link-SZrOat5tVZHX',
      '$type': 'geek-link',
      '$visible': true,
      'type': 'success',
      '$classes': null,
      'underline': null,
      'newWindow': null,
      'disabled': null,
      'href': ''
    },
    {
      '$id': 'geek-link-ndy3BXaoA6dz',
      '$type': 'geek-link',
      '$visible': true,
      'type': 'warning',
      '$classes': null,
      'underline': null,
      'newWindow': null,
      'disabled': null,
      'href': ''
    },
    {
      '$id': 'geek-link-gDrHigBSi9Nk',
      '$type': 'geek-link',
      '$visible': true,
      'type': 'danger',
      '$classes': null,
      'underline': null,
      'newWindow': null,
      'disabled': null,
      'href': ''
    }
  ],
  'grids': [],
  '$classes': 'm-md',
  'limit': 0,
  'gutter': 20,
  'rows': 1,
  'cols': 5,
  'mode': 'vertical'
}
```
:::

## 禁用状态

链接不可用状态。

::: leivii
``` js
{
  '$id': 'geek-container-oAyRkGYugqxu',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [
      {
          '$id': 'geek-link-JBMCf6JlfSHB',
          '$type': 'geek-link',
          '$visible': true,
          'type': 'info',
          '$classes': null,
          'underline': false,
          'newWindow': false,
          'disabled': true,
          'icon': '',
          'href': 'https://www.baidu.com/'
      },
      {
          '$id': 'geek-link-Xfm3Js6Jg9Iv',
          '$type': 'geek-link',
          '$visible': true,
          'type': 'primary',
          '$classes': null,
          'underline': null,
          'newWindow': null,
          'disabled': true,
          'href': 'https://www.baidu.com/'
      },
      {
          '$id': 'geek-link-SZrOat5tVZHX',
          '$type': 'geek-link',
          '$visible': true,
          'type': 'success',
          '$classes': null,
          'underline': null,
          'newWindow': null,
          'disabled': true,
          'href': 'https://www.baidu.com/'
      },
      {
          '$id': 'geek-link-ndy3BXaoA6dz',
          '$type': 'geek-link',
          '$visible': true,
          'type': 'warning',
          '$classes': null,
          'underline': null,
          'newWindow': null,
          'disabled': true,
          'href': 'https://www.baidu.com/'
      },
      {
          '$id': 'geek-link-gDrHigBSi9Nk',
          '$type': 'geek-link',
          '$visible': true,
          'type': 'danger',
          '$classes': null,
          'underline': null,
          'newWindow': null,
          'disabled': true,
          'href': 'https://www.baidu.com/'
      }
  ],
  'grids': [],
  '$classes': 'm-md',
  'limit': 0,
  'gutter': 20,
  'rows': 1,
  'cols': 5,
  'mode': 'vertical'
}
```
:::

## 属性展示

带有下划线、新窗口打开、图标的链接。

::: leivii
```js
{
  '$id': 'geek-container-oAyRkGYugqxu',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [
      {
          '$id': 'geek-link-JBMCf6JlfSHB',
          '$type': 'geek-link',
          '$visible': true,
          'type': 'info',
          '$classes': null,
          'underline': true,
          'newWindow': false,
          'disabled': true,
          'icon': '',
          'href': 'https://www.baidu.com/',
          'text': '下划线'
      },
      {
          '$id': 'geek-link-Xfm3Js6Jg9Iv',
          '$type': 'geek-link',
          '$visible': true,
          'type': 'primary',
          '$classes': null,
          'underline': null,
          'newWindow': true,
          'disabled': true,
          'href': 'https://www.baidu.com/',
          'text': '新窗口'
      },
      {
          '$id': 'geek-link-SZrOat5tVZHX',
          '$type': 'geek-link',
          '$visible': true,
          'type': 'success',
          '$classes': null,
          'underline': null,
          'newWindow': null,
          'disabled': true,
          'href': 'https://www.baidu.com/',
          'icon': 'save',
          'text': '图标'
      }
  ],
  'grids': [],
  '$classes': 'm-md',
  'limit': 0,
  'gutter': 20,
  'rows': 1,
  'cols': 5,
  'mode': 'vertical'
}
```
:::

## Props

<div class='props'>

| 参数     | 说明     | 类型    | 可选值                                             | 默认值 |
| -------- | -------- | ------- | -------------------------------------------------- | ------ |
| text     | 链接文本 | string  | -                                                  | -      |
| icon     | 图标类名 | string  | -                                                  | -      |
| type     | 类型     | string  | primary / success / warning / danger / info / text | -      |
| underline | 下划线   | string  | -                                                  | -      |
| newWindow | 新窗口     | string  | -                                                | -      |
| disabled | 禁用     | boolean | -                                                  | false      |

</div>

## Events

<div class='events'>

| 事件名 | 说明     | 回调参数       |
| ------ | -------- | -------------- |
| click  | 点击事件 | (event: Event) |

</div>
