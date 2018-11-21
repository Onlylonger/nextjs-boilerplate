const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(
  withCSS({
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        loader: '@svgr/webpack',
      })
      return config
    },
    cssModules: true,
  })
)
