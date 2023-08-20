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

    // Navbar
    nav: [
      { text: 'Swift', link: '/example' },
      { 
        text: 'UIKit', 
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      { 
        text: 'SwiftUI', 
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
    ],

    // Sidebar
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          { text: 'Developers', link: '/developers' }
        ],
      },
      {
        text: 'Section Title A',
        items: [
          { text: 'Item A', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
        ]
      }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/tsra0ne/scodehub/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023 <a href="https://github.com/tsra0ne/scodehub">Swift Code Hub</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsra0ne/scodehub' },
      { icon: 'twitter', link: 'https://twitter.com/scodehub404' },
    ],

    editLink: {
      pattern: 'https://github.com/tsra0ne/scodehub/blob/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },
  },
});
