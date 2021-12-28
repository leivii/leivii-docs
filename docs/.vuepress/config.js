module.exports = {
  title: 'Leivii Docs',
  description: 'Geek+ low code docs of Leivii Editor',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Leivii Editor',
      description: '中文文档'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Leivii Editor',
      description: 'English Documents'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: 'API', link: '/api' }
        ],
        sidebarDepth: 0,
        sidebar: [
          '/',
          '/install',
          {
            title: '组件',
            // path: '/components/',
            collapsable: true,
            children: [
              '/components/leivii',
              {
                title: '基础',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/basic/button',
              '/components/basic/link',
              '/components/basic/icon',
              '/components/basic/text',
              '/components/basic/img',
              '/components/basic/placeholder',
              '/components/basic/upload',
              '/components/basic/download',
              // '/components/basic/alert',
              {
                title: '表单',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/form/input',
              '/components/form/input-number',
              '/components/form/select',
              '/components/form/radio',
              '/components/form/checkbox',
              '/components/form/switch',
              '/components/form/date-picker',
              '/components/form/time-picker',
              '/components/form/transfer',
              '/components/form/transfer-table',
              '/components/form/text',
              '/components/form/hidden',
              '/components/form/form',
              {
                title: '容器',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/container/page',
              '/components/container/container',
              '/components/container/flex-container',
              '/components/container/dialog',
              '/components/container/drawer',
              '/components/container/panel',
              '/components/container/search-bar',
              '/components/container/tab',
              // '/components/container/collapse',
              '/components/container/list',
              {
                title: '数据',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/data/table',
              '/components/data/tree',
              {
                title: '其他',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/others/webview'
            ]
          },
          {
            title: '概念',
            // path: '/design/',
            collapsable: true,
            children: [
              '/design/dsl',
              '/design/datasource',
              '/design/handler',
              '/design/scf',
              '/design/expression',
              '/design/editor'
            ]
          },
          {
            title: '高级',
            // path: '/advanced/',
            collapsable: true,
            children: [
              '/advanced/component',
              '/advanced/doc',
              '/advanced/prop',
              '/advanced/validator',
              '/advanced/props',
              '/advanced/auth',
              '/advanced/plugin'
            ]
          },
        ],
        repoLabel: '贡献文档',
        editLinkText: '发现错误？编辑此页',
        lastUpdated: '上次更新'
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'API', link: '/en/api' }
        ],
        sidebarDepth: 0,
        sidebar: [
          '/en/',
          '/en/install',
          {
            title: 'Components',
            // path: '/components/',
            collapsable: true,
            children: [
              '/components/leivii',
              {
                title: '基础',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/basic/button',
              '/components/basic/link',
              '/components/basic/icon',
              '/components/basic/text',
              '/components/basic/img',
              '/components/basic/placeholder',
              '/components/basic/upload',
              '/components/basic/download',
              // '/components/basic/alert',
              {
                title: '表单',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/form/input',
              '/components/form/input-number',
              '/components/form/select',
              '/components/form/radio',
              '/components/form/checkbox',
              '/components/form/switch',
              '/components/form/date-picker',
              '/components/form/time-picker',
              '/components/form/transfer',
              '/components/form/transfer-table',
              '/components/form/text',
              '/components/form/hidden',
              '/components/form/form',
              {
                title: '容器',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/container/page',
              '/components/container/container',
              '/components/container/flex-container',
              '/components/container/dialog',
              '/components/container/drawer',
              '/components/container/panel',
              '/components/container/search-bar',
              '/components/container/tab',
              // '/components/container/collapse',
              '/components/container/list',
              {
                title: '数据',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/data/table',
              '/components/data/tree',
              {
                title: '其他',
                collapsable: false,
                sidebarDepth: 0
              },
              '/components/others/webview'
            ]
          },
          {
            title: 'Design',
            // path: '/design/',
            collapsable: true,
            children: [
              '/design/dsl',
              '/design/datasource',
              '/design/handler',
              '/design/scf',
              '/design/expression',
              '/design/editor'
            ]
          },
          {
            title: 'Advanced',
            // path: '/advanced/',
            collapsable: true,
            children: [
              '/advanced/component',
              '/advanced/doc',
              '/advanced/prop',
              '/advanced/validator',
              '/advanced/props',
              '/advanced/auth',
              '/advanced/plugin'
            ]
          },
        ],
        repoLabel: 'Contribution document',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Modified'
      }
    },
    smoothScroll: true,
    displayAllHeaders: true,
    // repo: 'http://gitlab.geekplus.cc/fe/leivii-docs',
    repo: 'https://github.com/leivii/leivii-docs',
    docsRepo: 'leivii/leivii-docs',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true
  },
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    toc: { includeLevel: [2, 3, 4] },
    extractHeaders: ['h2', 'h3', 'h4'],
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  },
  chainWebpack (config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
    config.resolve.alias.set('xlsx', 'core-js/features');
    config.resolve.alias.set('@assets', './assets');
  },
  plugins: [
    ['./docs/.vuepress/plugins/leivii/index.js']
  ]
}