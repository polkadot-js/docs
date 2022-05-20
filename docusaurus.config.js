const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/docs/';

module.exports = {
  title: 'polkadot{.js}',
  tagline: 'Polkadot does JavaScript',
  url: 'https://polkadot.js.org',
  baseUrl: BASE_URL,
  favicon: 'img/favicon.ico',
  organizationName: 'polkadot-js',
  onBrokenLinks: 'warn',
  projectName: 'docs',
  stylesheets: [],
  themeConfig: {
    navbar: {
      title: 'polkadot{.js}',
      logo: {
        alt: 'polkadot{.js}',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://polkadot.js.org/apps/',
          label: 'Apps UI (Wallet)',
          position: 'right',
        },
        {
          href: 'https://github.com/polkadot-js/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {},
    algolia: {
      // The application ID provided by Algolia
      appId: 'EG36R1VJVD',

      // Public API key: it is safe to commit it
      apiKey: '1a00419786d0da322d4273c13d5373b9',

      indexName: 'polkadot-js',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
    },
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/polkadot-js/docs/edit/master/',
        routeBasePath: '/'
      },
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/polkadot-js/docs/edit/master/',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      }
    }]
  ]
};
