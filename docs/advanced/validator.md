---
title: 注册表单验证
---

# 注册表单验证

Leivii 内置的基础的表单验证，满足不了多样的业务需求，所以我们支持开发者自行添加表单验证规则。

::: tip 注册表单验证的方法
```ts
Leivii.API.registValidator(name: string, validateFn: function, i18nName: string)
```
:::

## 维护验证规则文件

开发者可以维护基于项目要求的验证规则 `validator.js` 文件，并在入口文件 `import` 进来。

<<< @/docs/advanced/sample/validator.js

## 页面私有的验证规则

在 Leivii编辑器 里我们可以添加页面级的验证规则。选中需要添加验证的表单项，在右侧属性面板的 **规则** 栏，点击 **自定义** 按钮。

::: img 自定义验证规则
../assets/img/validator-1.png
:::

表单验证示例，操作人为必填项，编辑时间少于15天：

::: leivii
```js
{
  "$id": "geek-form-Fd0SGN5FdQ6c",
  "$type": "geek-form",
  "$visible": true,
  "$body": [
    {
      "$id": "geek-input-OOsoaEnRIowF",
      "$type": "geek-input",
      "$visible": true,
      "rules": [
        "required"
      ],
      "$classes": null,
      "rows": 0,
      "maxlength": 0,
      "disabled": null,
      "label": "lang.wms.fed.operatorPerson",
      "prop": "modifier"
    },
    {
      "$id": "geek-date-picker-o6GPkeO4Goy9",
      "$type": "geek-date-picker",
      "$visible": true,
      "rules": [
        "dayLimit15"
      ],
      "$classes": null,
      "disabled": null,
      "label": "lang.wms.fed.editingTime",
      "type": "datetimerange",
      "prop": "modifyTime"
    }
  ],
  "grids": [],
  "$classes": null,
  "gutter": 30,
  "cols": 2,
  "hideFooter": false
}
```
:::