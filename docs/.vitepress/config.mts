import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DM's Blog",
  description: "A VitePress site to record myself",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '工程', link: '/project/nuxt-start' },
      // { text: 'JavaScript', link: '/'},
      // { text: '杂谈', link: '/'}
      // { text: '全栈', link: '/'},
    ],

    sidebar: [
      {
        text: '工程',
        items: [
          { text: 'Nuxt快速上手', link: '/project/nuxt-start' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DM1-1' },
    ],

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    }
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  lastUpdated: true,
})
