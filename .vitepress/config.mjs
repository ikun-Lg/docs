import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: 'https://cn.vitejs.dev/logo.svg' }]],
  title: "头发不要落光",
  description: "个人学习文档 | 个人作品集",
  base: "/docs/",
  
  themeConfig: {
    logo: '/icons/logo.svg',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '个人作品集', link: '/docs/works' },
      { text: '学习文档', link: '/docs/notes' },
      
    ],

    // sidebar: [
    //   {
    //     text: '我的作品',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ikun-Lg' }
    ],

    footer: {
      copyright: 'Copyright © 2024-present LG'
    }
  },

  
})


