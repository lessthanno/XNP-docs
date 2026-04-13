import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'XNP',
  description: 'X-Agent Network Protocol — The identity, trust, and settlement layer for the Agent Economy.',
  lang: 'en-US',
  base: '/XNP-docs/',

  head: [
    ['meta', { name: 'theme-color', content: '#0a0a0a' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'XNP — X-Agent Network Protocol' }],
    ['meta', { property: 'og:description', content: 'The identity, trust, and settlement layer for the Agent Economy.' }],
    ['link', { rel: 'icon', href: '/XNP-docs/favicon.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'XNP',

    nav: [
      { text: 'Product', link: '/product/overview' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Protocol', link: '/protocol/architecture' },
      { text: 'Reference', link: '/reference/cli' },
      {
        text: 'v1.0',
        items: [
          { text: 'Changelog', link: '/product/changelog' },
          { text: 'Roadmap', link: '/product/roadmap' },
        ],
      },
    ],

    sidebar: {
      '/product/': [
        {
          text: 'Product',
          items: [
            { text: 'Overview', link: '/product/overview' },
            { text: 'Dashboard', link: '/product/dashboard' },
            { text: 'User Tutorial', link: '/product/tutorial' },
            { text: 'Roadmap', link: '/product/roadmap' },
            { text: 'Changelog', link: '/product/changelog' },
          ],
        },
      ],
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Quick Start', link: '/guide/quickstart' },
            { text: 'Installation', link: '/guide/installation' },
          ],
        },
        {
          text: 'Guides',
          items: [
            { text: 'Create Your First Agent', link: '/guide/first-agent' },
            { text: 'ZKLM Commitments', link: '/guide/zklm' },
            { text: 'Payments & Escrow', link: '/guide/payments' },
            { text: 'Delegating Tasks', link: '/guide/delegation' },
          ],
        },
      ],
      '/protocol/': [
        {
          text: 'Protocol',
          items: [
            { text: 'Architecture', link: '/protocol/architecture' },
            { text: 'L1: Agent Identity', link: '/protocol/identity' },
            { text: 'L2: Permission Fabric', link: '/protocol/permission' },
            { text: 'L3: ZKLM Verification', link: '/protocol/zklm' },
            { text: 'L4: Payment Router', link: '/protocol/payment' },
            { text: 'L5: Intent Network', link: '/protocol/intent' },
            { text: 'L6: Agent Economy', link: '/protocol/economy' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'CLI', link: '/reference/cli' },
            { text: 'TypeScript SDK', link: '/reference/sdk' },
            { text: 'MCP Server', link: '/reference/mcp' },
            { text: 'REST API', link: '/reference/api' },
            { text: 'Smart Contracts', link: '/reference/contracts' },
            { text: '$XAGT Token', link: '/reference/token' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xnp-protocol/xnp' },
      { icon: 'twitter', link: 'https://twitter.com/xnp_protocol' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 XNP Protocol',
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/xnp-protocol/xnp-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
