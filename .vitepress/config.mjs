import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: 'https://cn.vitejs.dev/logo.svg' }]],
  title: "头发不要落光",
  description: "个人学习文档 | 个人作品集",
  base: "/docs/",
  
  themeConfig: {
    logo: '/static/icons/logo.svg',
    search: {
      provider: 'local'
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
    ]
  },

  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2024-present LG'
  }
})


