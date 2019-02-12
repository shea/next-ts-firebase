const withPlugins = require('next-compose-plugins')
const less = require('@zeit/next-less')
const typescript = require('@zeit/next-typescript')
const theme = require('./antdTheme')

// next.js configuration
const nextConfig = {}

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withPlugins(
  [
    [
      less,
      {
        lessLoaderOptions: {
          import: true,
          javascriptEnabled: true,
          modifyVars: theme,
        },
      },
    ],

    [
      typescript,
      {
        distDir: '../../dist/functions/next',
      },
    ],
  ],
  nextConfig
)
