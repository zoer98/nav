export default {
  title: 'Nav',
  base: '/nav/',
  description: 'Just playing around.',
  themeConfig: {
    siteTitle: '首页',
    repo: 'wushijiang13/vue3-vite-cli',
    editLinks: true,
    editLinkText: '欢迎帮助我们改善页面!',
    lastUpdated: '最近更新时间',
    nav: [
      { text: '文档', link: '/item/index.md' },
      { text: '博客', link: 'https://blog.zburu.com' },
      { text: 'Github', link: 'https://github.com/zburu' },
      // {
      //   text: 'Site',
      //   items: [
      //     { text: '博客', link: 'https://blog.zburu.com' },
      //     { text: 'Github', link: 'https://github.com/zburu' },
      //   ]
      // }
    ],
    sidebar: [
      {
        items: [
          { text: '社区论坛', link: '/item/bbs.md' },
          { text: '开发工具', link: '/item/dev.md' },
          { text: '图标组件', link: '/item/icon-ui.md' },
          { text: '周刊阅读', link: '/item/weekly.md' },
          { text: '网站程序', link: '/item/site.md' }
        ]
      }
    ]
  },

}
