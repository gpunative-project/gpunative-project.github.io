import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "GPU Native",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'APIs', link: '/python-apis' }
    ],

    sidebar: [
      {
        text: 'APIs',
        items: [
          { text: 'Python APIs', link: '/python-apis' }
        ]
      }
    ],
  }
})
