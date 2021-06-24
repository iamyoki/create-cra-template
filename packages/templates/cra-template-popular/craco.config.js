const CracoAlias = require('craco-alias')

module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
      },
    },
  ],
}
