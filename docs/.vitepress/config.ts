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
      { text: 'Swift', link: '/' },
      { 
        text: 'UIKit', 
        items: [
          { text: 'Integrating SwiftUI into UIKit', link: '/uikit/integrating-swiftui-into-uikit' },
        ]
      },
      { 
        text: 'SwiftUI', 
        link: '/'
      },
    ],

    // Sidebar
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/uikit/': [
        {
          text: 'UIKit',
          items: [
            { text: 'Integrating SwiftUI into UIKit', link: '/uikit/integrating-swiftui-into-uikit' },
            { text: 'Developers', link: '/developers' }
          ]
        }
      ],

      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

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
