---
title: 图片
---

# 图片

常用的图片。

## 基础用法

基础的图片用法。

::: leivii
``` js
{
  '$id': 'geek-image-NfizHiiw9GR1',
  '$type': 'geek-image',
  '$visible': true,
  'url': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
  '$classes': null,
  'width': '100px',
  'height': ''
}
```
:::

## 图片大小

图片的宽高。

::: leivii
``` js
{
  '$id': 'geek-container-KHHBSNOGMhv0',
  '$type': 'geek-container',
  '$visible': true,
  '$body': [{
      '$id': 'geek-image-NfizHiiw9GR1',
      '$type': 'geek-image',
      '$visible': true,
      'url': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      '$classes': null,
      'width': '100px',
      'height': ''
    },
    {
      '$id': 'geek-image-yICDPwl11fyY',
      '$type': 'geek-image',
      '$visible': true,
      'url': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      '$classes': null,
      'width': '200px'
    }
  ],
  'grids': [],
  '$classes': null,
  'limit': 0,
  'gutter': 0
}
```
:::

## Props

<div class="props">

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| url | 图片地址 | string | - | - |
| width | 宽 | string | - | - |
| height | 高 | string | - | - |
| display | 显示方式 | string | inline-block/block | - |

</div>