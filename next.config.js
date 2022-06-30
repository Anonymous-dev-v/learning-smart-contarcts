
require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'raw.githubusercontent.com',
      'assets.coingecko.com',
      'solarbeam.io',
      'eu.ui-avatars.com',
      'github.com',
      'tokens.pancakeswap.finance',
      'i.postimg.cc',
      'ironfi.s3.amazonaws.com',
      'storage.googleapis.com',
      'i.imgur.com',
      'etherscan.io',
      'adamant.finance',
      'aria.fyi',
      's2.coinmarketcap.com',
      'www.opucoin.io',
      'dark-build.app',
      'darkmatter.finance',
      'pbs.twimg.com',
      'etherlegends.com',
      'avatars.githubusercontent.com',
      'cryptologos.cc',
      'gains.farm',
      'aavegotchi.com',
      's2.gifyu.com',
      'rebalancetoken.io',
      'rampdefi.com',
      'cdn-images-1.medium.com',
      'polydoge.com',
      'hex.com',
      'cdn.rupeeto.com',
      'media.discordapp.net',
      'oceanprotocol.com',
      's3-us-west-2.amazonaws.com',
      'app.stellaswap.com',
      'assets.spookyswap.finance',
      'jpyc.jp',
      'ethereum-optimism.github.io',
    ],
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
}
