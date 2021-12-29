---
title: 入口组件
---

# 入口组件

入口组件即 Leivii 提供的全局组件，分为运行时和编辑器两种，可以根据不同场景使用。

## 运行时

运行时的全局组件使用：

```vue
<leivii :data="pageConfig" />
```

> 运行时组件，可以渲染一个页面，也可以当作普通UI组件使用。

## 编辑器

编辑器的全局组件使用：

```vue
<leivii-editor v-model="pageConfig" @change="handleSave">
  <div slot="title" class="fs-xl">
    <geek-icon icon-class="logo" />eivii Editor
  </div>
  <template slot="operations">
    <div class="operation" @click="handleCreate">
      <geek-icon icon-class="create" class="icon" />
    </div>
  </template>
</leivii-editor>
```
