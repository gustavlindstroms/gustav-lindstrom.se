/* eslint-disable no-use-before-define */
const sveltePreprocess = require("svelte-preprocess");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  preprocess: sveltePreprocess(),
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};