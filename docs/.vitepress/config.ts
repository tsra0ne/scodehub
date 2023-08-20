import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: 'SwiftCodeHub',
  description: 'Learn SwiftUI and UIKit',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,

  themeConfig: {
    logo: './schlogo.png',
    nav: [
      { text: 'Swift', link: '/example' },
      { text: 'UIKit', link: '/example'},
      { text: 'SwiftUI', link: '/example'},
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/tsra0ne/scodehub/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023 <a href="https://github.com/tsra0ne/scodehub">Swift Code Hub</a>'
    },
  },
});
