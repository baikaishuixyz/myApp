/*eslint-env node*/
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.vue$/,
      use: ['vue-loader']
    }]
  },
  resolve: {
    alias: {
      'vue$': path.resolve(__dirname, 'node_modules/vue/dist/vue.js')
    }
  }
};
