const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/docs/';

module.exports = {
  title: 'polkadot{.js}',
  tagline: 'Polkadot does JavaScript',
  url: 'https://polkadot.js.org',
  baseUrl: BASE_URL,
  onBrokenLinks: 'throw',
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
      },
    }],
  ],
};
