const { description } = require('../../package')

module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'UDACAPI Docs',
      description: description
    },
    '/tr/': {
      lang: 'tr',
      title: 'UDACAPI Dokümantasyon',
      description: description
    }
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    locales: {
      /* This is where you place your theme specific, localized data */
      '/': {
        // text for the language dropdown
        selectText: 'Language',
        // label for this locale in the language dropdown
        label: 'English',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'UDACAPI',
            link: 'https://udacapi.com'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                '01-registration',
                '02-initial-setup',
                '03-account-settings',
                '04-projects',
                '10-prepare-xlsform',
                '11-upload-xlsform',
                '15-odk-collect',
                '12-test-form',
                '20-data-collectors',
                '21-preferences',
                '30-dashboard',
                '40-data-monitoring',
                '45-mapboard',
                '50-data-analysis',
                '60-data-processing',
              ]
            }
          ],
        }
      },
      '/tr/': {
        // text for the language dropdown
        selectText: 'Dil',
        // label for this locale in the language dropdown
        label: 'Türkçe',
        nav: [
          {
            text: 'Kılavuz',
            link: '/guide/',
          },
          {
            text: 'UDACAPI',
            link: 'https://udacapi.com'
          }
        ],
        sidebar: {
          '/tr/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                '01-registration',
                '02-initial-setup',
                '03-account-settings',
                '04-projects',
                '10-prepare-xlsform',
                '11-upload-xlsform',
                '15-odk-collect',
                '12-test-form',
                '20-data-collectors',
                '21-preferences',
                '30-dashboard',
                '40-data-monitoring',
                '45-mapboard',
                '50-data-analysis',
                '60-data-processing',
              ]
            }
          ],
        }
      },
    },    
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
  ]
}
