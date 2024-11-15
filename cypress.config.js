const { defineConfig } = require('cypress');
const webpackConfig = require('./webpack.config.js');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    supportFile: false  // Disabling support file for simplicity
  },
});
