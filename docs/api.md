---
title: API
layout: APILayout
heroImage: https://vuepress.vuejs.org/hero.png
heroText: test
tagline: 
actionText: Quick Start →
actionLink: /guide/
features:
- title: Feature 1 Title
  details: Feature 1 Description
- title: Feature 2 Title
  details: Feature 2 Description
- title: Feature 3 Title
  details: Feature 3 Description
footer: Made by  with ❤️
---

# API

<!-- [[toc]] -->

## 全局API

#### LeiviiEditor.i18n(fn)

* 参数：

  * `{Function} fn`

* 用法：

  `fn` 为外部提供的国际化方法，如 `vue-i18n`：

  ```js {17}
  import Vue from 'vue'
  import VueI18n from 'vue-i18n'
  import LeiviiEditor from 'leivii-editor'

  Vue.use(VueI18n)

  const messages = {
    en: { },
    zh: { }
  }
  // Create VueI18n instance with options
  const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
  })

  LeiviiEditor.i18n((key, value) => i18n.t(key, value))
  ```

#### LeiviiEditor.locale(code, [lang])

* 参数：

  * `{String} code`
  * `{Object} [lang]`

* 用法：

  切换当前语言，其中 `lang` 为可选项，为当前语言提供更多国际化值。

  ```js
  import LeiviiEditor from 'leivii-editor'
  import cnLocale from './i18n/lang/cn'

  LeiviiEditor.locale('cn', cnLocale)
  ```

## 实例 Props

#### vm.$id

* 类型: `String`

* 只读

* 详细：

  组件唯一ID，可通过 `this.$($id)` 方式获取组件实例。

#### vm.$type

* 类型: `String`

* 只读

* 详细：

  组件名称，`Leivii` 在渲染时根据此属性渲染对应的组件。

#### vm.$visible

* 类型: `Boolean`

* 详细：

  当前组件是否显示，支持 [表达式](./design/expression)。

#### vm.$prop

* 类型: `String`

* 详细：

  组件数据源字段，`Leivii` 运行时从上下文获取对应值，可通过 `vm.getDataSource()` 获取。

* 参考：[数据源](./design/datasource)

#### vm.$classes

* 类型: `String`

* 详细：

  组件主题类，提供了基于 **UI规范** 的常用样式类。

#### vm.$body

* 类型: `Array`

* 详细：

  子组件列表。

#### vm.$scopeData

* 类型: `Array`

* 详细：

  组件的作用域数据，如在列表类组件中，每一行的数据。

* 参考：[表格](./components/data/table)

#### vm.$dataSource

* 类型: `Array`

* 详细：

  组件的数据源配置。

* 参考：[数据源](./design/datasource)

#### vm.$handlers

* 类型: `Array`

* 详细：

  组件的处理器配置。

* 参考：[处理器](./design/handler)

#### vm.dataSource

* 类型: `Array`

* 详细：

  提供给 [表达式](./design/expression) 使用的数据源上下文。

* 参考：[处理器](./design/handler)

## 实例方法

实例方法均可用在 [处理器](./design/handler) 和 [表达式](./design/expression) 中。

#### vm.getDataSource()

* 用法：

  获取当前组件 `$prop` 字段对应的上下文数据。

#### vm.getDataSources()

* 用法：

  获取当前组件的所有上下文数据。

#### vm.updateDataSource()

* 用法：

  执行组件的数据源配置。

#### vm.setDataSource(key, value)

* 参数：

  `{String} key`

  `{String | Number | Boolean | Object | Array} value`

* 用法：

  设置组件的数据源。

#### vm.setRootDataSource(key, value)

* 参数：

  `{String} key`

  `{String | Number | Boolean | Object | Array} value`

* 用法：

  设置根组件的数据源。

#### vm.$axios(options)

* 参数：

  `{Object} options`

* 用法：

  `axios` 配置参数。

#### vm.$alert(content, title, options)

* 参数：

  `{String} content`

  `{String} title`

  `{Object} options`

* 用法：

  `ElementUI $alert` 配置参数。

#### vm.$confirm(content, title, options)

* 参数：

  `{String} content`

  `{String} title`

  `{Object} options`

* 用法：

  `ElementUI $confirm` 配置参数。

#### vm.$prompt(content, title, options)

* 参数：

  `{String} content`

  `{String} title`

  `{Object} options`

* 用法：

  `ElementUI $prompt` 配置参数。

#### vm.$message(options)

* 参数：

  `{Object} options`

* 用法：

  `ElementUI $message` 配置参数。
