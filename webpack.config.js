const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './client/src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  plugins:[
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
],
  mode: 'development'
};