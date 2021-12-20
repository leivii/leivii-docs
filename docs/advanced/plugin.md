---
title: 插件机制
---

# 插件机制

插件机制为开发者提供了注入业务功能的方式。

::: tip 注册插件的方法
```ts
Leivii.API.registPlugin(name: string, plugin: object, i18nName: string)
```
:::

插件有两个作用：

1、为组件提供数据源

2、扩展处理器

我们通过一个 `Hello World` 插件来学习下插件的注册流程。

## Hello World

开发 `Hello World` 插件，包含数据源和处理器两个方法：

<<< @/docs/advanced/sample/DemoPlugin.js

在 Leivii编辑器中拖入 [文本](../components/basic/text) 和 [按钮](../components/basic/button) 组件，分别为文本组件配置数据源、按钮组件配置处理器，示例如下：

::: leivii
```js
[
  {
    "$id": "geek-text-d4dDb3UzqqY6",
    "$type": "geek-text",
    "$visible": true,
    "$dataSource": [
      {
        "type": "plugin",
        "subtype": "SINGLE",
        "autoProcess": true,
        "scoped": true,
        "cache": false,
        "root": "",
        "plugin": "demo",
        "func": "getData",
        "key": "demo"
      }
    ],
    "$prop": "",
    "fontSize": "28px",
    "text": "{{this.dataSource.demo?.text}}"
  },
  {
    "$id": "geek-button-W4Hzp5TuHbkV",
    "$type": "geek-button",
    "$visible": true,
    "$classes": "mt",
    "text": "点击调用组件方法",
    "disabled": null,
    "type": "primary",
    "$handlers": [
      {
        "type": "plugin",
        "name": "click",
        "action": {
          "plugin": "demo",
          "func": "doThing"
        },
        "params": []
      }
    ]
  }
]
```
:::

## 打印插件

打印是 `WMS`、`OA` 等系统中常见的需求，我们使用基于 [LODOP](http://www.lodop.net/) 的打印组件 [geek-print-config](https://www.npmjs.com/package/geek-print-config) 来开发此插件。

确保本地已安装 [LODOP](http://www.lodop.net/)，接下来我们来安装 `geek-print-config`：

```bash
$ npm i geek-print-config -S
```

插件代码如下，包含了打印机列表、和打印操作：

<<< @/docs/advanced/sample/PrintPlugin.js

接下来我们就可以在 Leivii编辑器 中使用打印功能了。更多细节请移步 [EOS](http://gitlab.geekplus.cc/fe/eos) 。

> 文档中未集成打印插件，如遇到问题请 [联系我](mailto:keke.qiu@geekplus.com)。
