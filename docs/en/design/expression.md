---
title: 表达式
---

# 表达式

表达式为低代码提供更强的交互功能。

## 简介

Leivii 编辑器中可以使用表达式实现特定的业务逻辑，在表达式中可以访问组件、上下文数据和特定方法。表达式被广泛使用在属性值配置、用户数据采集组件（ParamPicker）及处理器中。

在 Leivii 中通过 PropAPI 配置属性表达式开头。

```js {5}
{
  $visible: {
    type: Boolean,
    label: 'lang.prop.$visible',
    isExpression: true
  }
}
```

表达式中支持 `js语句` 和 `js函数`，使用函数的写法为：

```js
(e) => {
  // code...
}
```

> 表达式可用属性和方法请移步[API](../api)。

## 属性配置

通过表达式控制组件的显示隐藏，如有根据 [单选框组件](../components/form/radio) 值控制 [输入框](../components/form/input) 显隐的需求，首先选择输入框，在右侧属性面板的 **是否可见** 栏点击编辑表达式按钮 `{/}`，填入表达式：`this.dataSource.form.data.radio == 1`。

::: img 操作指引
../../assets/img/expression-1.png
:::

::: leivii
```js {40}
{
  "$id": "geek-form-NVyYzoKh0Ilv",
  "$type": "geek-form",
  "$visible": true,
  "$body": [
    {
      "$id": "geek-radio-gJIv0xb2nKHB",
      "$type": "geek-radio",
      "$visible": true,
      "$dataSource": [
        {
          "type": "custom",
          "subtype": "dict",
          "autoProcess": true,
          "scoped": true,
          "cache": false,
          "root": "data",
          "dictValue": [
            {
              "label": "Show",
              "value": "1"
            },
            {
              "label": "Hide",
              "value": "0"
            }
          ],
          "key": "toggle"
        }
      ],
      "$prop": "toggle",
      "prop": "radio",
      "$classes": null,
      "disabled": null,
      "value": "1"
    },
    {
      "$id": "geek-input-xieik2i5EziC",
      "$type": "geek-input",
      "$visible": "{{this.dataSource.form.data.radio == 1}}",
      "$classes": null,
      "maxlength": 0,
      "disabled": null,
      "prop": "input"
    }
  ],
  "gutter": 30,
  "cols": 2
}
```
:::

## 处理器配置

在处理器中使用表达式，实现[单选框组件](../components/form/radio) 和 [输入框](../components/form/input) 的值联动：

::: leivii
```js
{
  "$id": "geek-form-NVyYzoKh0Ilv",
  "$type": "geek-form",
  "$visible": true,
  "$body": [
    {
      "$id": "geek-radio-gJIv0xb2nKHB",
      "$type": "geek-radio",
      "$visible": true,
      "$dataSource": [
        {
          "type": "custom",
          "subtype": "dict",
          "autoProcess": true,
          "scoped": true,
          "cache": false,
          "root": "data",
          "dictValue": [
            {
              "label": "{{'Male'}}",
              "value": "1"
            },
            {
              "label": "{{'Female'}}",
              "value": "0"
            }
          ],
          "key": "toggle"
        }
      ],
      "$prop": "toggle",
      "prop": "radio",
      "$classes": null,
      "disabled": null,
      "value": "",
      "$handlers": [
        {
          "type": "expression",
          "name": "change",
          "action": "this.$('geek-input-xieik2i5EziC').setValue(this.dataSource.form.data.radio)"
        }
      ]
    },
    {
      "$id": "geek-input-xieik2i5EziC",
      "$type": "geek-input",
      "$visible": true,
      "$classes": null,
      "maxlength": 0,
      "disabled": null,
      "prop": "input"
    }
  ],
  "gutter": 30,
  "cols": 2,
  "grids": []
}
```
:::

在上面处理器的例子中，使用组件处理器是更推荐的方式：

::: img 组件处理器
../../assets/img/expression-2.png
:::
