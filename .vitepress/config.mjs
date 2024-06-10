import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "头发不要落光",
  description: "个人学习文档 | 个人作品集",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '个人作品集', link: '/works' },
      { text: '学习文档', link: '/' },
      
    ],

    sidebar: [
      {
        text: '我的作品',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ikun-Lg' }
    ]
  }
})
