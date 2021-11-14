const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const getPublicPath = configType => (configType === 'PRODUCTION' ? '/storybook/' : '/')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: (config, { configType }) => {
    const defaultRule = config.module.rules.find(rule => rule.test?.test('.svg'))

    defaultRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.resolve.plugins = [...config.resolve.plugins, new TsconfigPathsPlugin()]

    config.output.publicPath = getPublicPath(configType)

    return config
  },
  managerWebpack: (config, { configType }) => {
    config.output.publicPath = getPublicPath(configType)

    return config
  },
}
