---
title: 上传
---

# 上传

常用的上传按钮。

## 基础用法

基础的上传用法。

::: leivii
``` js
{
  '$id': 'geek-container-s58WDAIM8rpX',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-upload-HYB2T1aGQOeM',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': 'test/upload',
      'size': 'small'
    },
    {
      '$id': 'geek-upload-nWq3epIQy3xj',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传',
      '$classes': null,
      'disabled': null,
      'type': 'success',
      'url': 'test/upload',
      'size': 'small'
    },
    {
      '$id': 'geek-upload-a4ki627z1VKc',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传',
      '$classes': null,
      'disabled': null,
      'type': 'warning',
      'url': 'test/upload',
      'size': 'small'
    },
    {
      '$id': 'geek-upload-4rVTt9xLeYOT',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传',
      '$classes': null,
      'disabled': null,
      'type': 'danger',
      'url': 'test/upload',
      'size': 'small'
    },
    {
      '$id': 'geek-upload-x6qOADsoWEAd',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传',
      '$classes': null,
      'disabled': null,
      'type': 'info',
      'url': 'test/upload',
      'size': 'small'
    },
    {
      '$id': 'geek-upload-zA5tEh9tUqvU',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传',
      '$classes': null,
      'disabled': null,
      'type': 'text',
      'url': 'test/upload',
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

## 上传尺寸

上传按钮的尺寸。

::: leivii
``` js
{
  '$id': 'geek-container-s58WDAIM8rpX',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-upload-BgqeP02zLWSV',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': 'test/upload',
      'size': 'mini'
    },
    {
      '$id': 'geek-upload-HYB2T1aGQOeM',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': 'test/upload',
      'size': 'small'
    },
    {
      '$id': 'geek-upload-8z6GTyqZOESg',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': 'test/upload',
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

## 上传类型

上传的文件类型。

::: leivii
``` js
{
  '$id': 'geek-container-s58WDAIM8rpX',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-upload-HYB2T1aGQOeM',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传.png',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': 'test/upload',
      'size': 'small',
      'accept': '.png'
    },
    {
      '$id': 'geek-upload-8z6GTyqZOESg',
      '$type': 'geek-upload',
      '$visible': true,
      'text': '上传.doc',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': 'test/upload',
      'size': 'small',
      'accept': '.doc'
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

## 自定义上传

自定义上传的方法。

::: leivii
``` js
{
  '$id': 'geek-container-s58WDAIM8rpX',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [
      {
          '$id': 'geek-upload-6LGoMVqqo8nK',
          '$type': 'geek-upload',
          '$visible': true,
          'type': 'primary',
          '$classes': null,
          'text': '上传',
          'disabled': null,
          'size': 'small',
          'customUpload': `(data, key) => {\n  let formdata = new FormData()\n  formdata.append('myfile', data.file)\n  this.$axios({\n    url: 'http://rap2api.taobao.org/app/mock/272877/api/upload?parseXMLName=asnExcelImport.xml',\n    method: 'POST',\n    data: formdata\n  })\n}`
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

## 上传子节点

上传的子节点。

::: leivii
``` js
{
  '$id': 'geek-container-s58WDAIM8rpX',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-upload-HYB2T1aGQOeM',
      '$type': 'geek-upload',
      '$visible': true,
      'text': 'lang.wms.fed.upload',
      '$classes': null,
      'disabled': null,
      'type': '',
      'url': 'test/upload',
      'size': 'small',
      'accept': '.png',
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
      '$id': 'geek-upload-8z6GTyqZOESg',
      '$type': 'geek-upload',
      '$visible': true,
      'text': 'lang.wms.fed.upload',
      '$classes': null,
      'disabled': null,
      'type': 'primary',
      'url': 'test/upload',
      'size': 'small',
      'accept': '.doc',
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
          'text': '上传'
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
| url | 上传地址 | string | - | - |
| name | 文件上传字段名 | string | - | file |
| text | 按钮文本 | - | - |
| type | 按钮类型 | string | primary / success / warning / danger / info / text | - |
| size | 尺寸 | string | medium/small/mini | - |
| accept | 文件类型 | string | - | - |
| child | 子节点 | object | - | - |
| customUpload | 自定义上传 | string | - | - |
| authCode | 权限 | string | - | - |
| disabled | 禁用 | boolean | - | - |

</div>
