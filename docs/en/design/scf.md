---
title: 云函数
---

# 云函数

云函数即在云端（服务器端）运行的函数。

## 简介

在 Leivii 中云函数即脚本，支持 `groovy` 和 `SQL` 两种方式。云函数的独特优势在于与所在系统的无缝整合。由于 `groovy` 可以运行在 `jvm` 中，开发者可以直接使用业务系统已有的服务，无需鉴权。

## 配置

在使用云函数时需要配置指定的数据结构，并实现云函数的相应方法，具体配置如下：

```js
Vue.use(LeiviiEditor, {
  scf: {
    root: 'data',
    listRoot: 'data.recordList',
    code: 'code', // 主键
    name: 'name', // 云函数名称
    dataType: 'dataType', // 脚本类型
    defaultDataType: 'groovy', // 支持 groovy/SQL
    dataForm: 'dataForm', // 数据类型
    defaultDataForm: 'PAGING_LIST', // 默认数据类型：List/PAGING_LIST/SINGLE
    dataExpression: 'dataExpression', // 脚本
    dataDescription: 'dataDescription', // 脚本描述字符串
    getList(queries) {}, // 获取云函数列表
    get(code) {}, // 获取云函数详情
    create(data) {}, // 创建云函数
    update(data) {}, // 更新云函数
    getData(code, params) {}, // 获取云函数执行结果
    exec(data) {} // 调试云函数（参数为脚本及其配置）
  }
})
```

## 数据模型

用云函数创建页面的数据模型，并生成基础页面，如报表。

创建云函数步骤：

1、创建云函数

::: img 创建云函数
../../assets/img/datasource-21.png
:::

2、调试云函数代码

::: img 调试云函数代码
../../assets/img/datasource-22.png
:::

3、配置字段

::: img 配置字段
../../assets/img/datasource-23.png
:::

4、页面配置

::: img 页面配置
../../assets/img/datasource-24.png
:::

5、生成页面

::: img 生成页面
../../assets/img/datasource-25.png
:::


## 数据源

云函数作为数据源，为组件提供数据。

::: img 云函数数据源
../../assets/img/scf-1.png
:::

## 处理器

云函数作为业务请求，为组件提供交互处理器。

::: img 云函数处理器
../../assets/img/scf-2.png
:::

