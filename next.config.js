const withCSS = require('@zeit/next-css')
const path = require('path')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(
  withCSS({
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        loader: '@svgr/webpack',
      })
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        assets: path.resolve('./assets'),
        components: path.resolve('./components'),
        styles: path.resolve('./styles'),
        pages: path.resolve('./pages'),
        store: path.resolve('./store'),
      })
      return config
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[hash:base64:4]',
    },
  })
)
