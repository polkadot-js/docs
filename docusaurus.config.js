const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/docs/';

module.exports = {
  title: 'polkadot{.js}',
  tagline: 'Polkadot does JavaScript',
  url: 'https://polkadot.js.org',
  baseUrl: BASE_URL,
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'polkadot-js', // Usually your GitHub org/user name.
  onBrokenLinks: 'warn',
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'polkadot{.js}',
      logo: {
        alt: 'polkadot{.js}',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: '/',
        //   activeBasePath: '/',
        //   label: 'Reference',
        //   position: 'left',
        // },
        // {
        //   to: 'b/',
        //   label: 'Blog',
        //   position: 'left'
        // },
        {
          href: 'https://github.com/polkadot-js/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Style Guide',
    //           to: 'docs/',
    //         },
    //         {
    //           label: 'Second Doc',
    //           to: 'docs/doc2/',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: 'blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/polkadot-js/docs',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} polkadot{.js}. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
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
      },
    ],
  ],
};
