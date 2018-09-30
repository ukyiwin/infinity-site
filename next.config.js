// Packages
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const withOffline = require('next-offline')

module.exports = withOffline({
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        navigateFallback: '/index',
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  }
})
