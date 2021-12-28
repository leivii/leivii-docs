<template>
  <div class="theme-container api-layout">
    <Navbar />
    <aside class="sidebar">
      <ul class="sidebar-links">
        <li v-for="(item, i) in sidebars" :key="i">
          <router-link class="sidebar-link" active-class="active" :class="{active: item.children.some(c => '#' + c.slug == $route.hash)}" :to="'#' + item.slug">{{ item.title }}</router-link>
          <ul class="sidebar-sub-headers" :key="'sub' + i">
            <li v-for="(sub, j) in item.children" :key="i + ',' + j" class="sidebar-sub-header">
              <router-link class="sidebar-link" active-class="active" :to="'#' + sub.slug">{{ sub.title }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <main class="page">
      <Content class="theme-default-content" />
      <PageEdit />
    </main>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import PageEdit from '@theme/components/PageEdit.vue'

export default {
  components: { Navbar, PageEdit },
  data() {
    return {
      sidebars: []
    }
  },
  created() {
    let sidebarItem = {}
    this.$page.headers.forEach(item => {
      if (item.level === 2) {
        sidebarItem = {
          ...item,
          children: []
        }
        this.sidebars.push(sidebarItem)
      } else if (item.level > 2 && sidebarItem.children) {
        sidebarItem.children.push(item)
      }
    })
  }
}
</script>

<style lang="stylus">
.api-layout {
  .sidebar > .sidebar-links {
    padding: 1.5rem 0;
  }
  .sidebar ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  .sidebar > .sidebar-links > li > a.sidebar-link {
    font-size: 1.1em;
    line-height: 1.7;
    font-weight: bold;
  }
  .sidebar a {
    display: inline-block;
  }
  a.sidebar-link.active {
    font-weight: 600;
    color: #3eaf7c;
    border-left-color: #3eaf7c;
  }
  .sidebar .sidebar-link:not(.active) + .sidebar-sub-headers {
    display: block;
  }
  .sidebar .sidebar-sub-headers {
    padding-left: 1rem;
    font-size: 0.95em;
  }
  .sidebar-sub-headers a.sidebar-link {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-left: none;
  }
  a.sidebar-link {
    font-size: 1em;
    font-weight: 400;
    display: inline-block;
    color: #2c3e50;
    border-left: 0.25rem solid transparent;
    padding: 0.35rem 1rem 0.35rem 1.25rem;
    line-height: 1.4;
    width: 100%;
    box-sizing: border-box;
  }
  a.sidebar-link:hover {
    color: #3eaf7c;
  }
  .page {
    padding-bottom: 2rem;
    display: block;
  }
}
</style>