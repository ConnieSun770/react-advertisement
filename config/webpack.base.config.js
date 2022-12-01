const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const webpackBaseConfig = {
  entry: path.join(__dirname, '../src/index.jsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhash:4].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx'],
    alias: {
      pages: path.join(__dirname, '../src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js[x]/,
        use: 'babel-loader',
      },
      {
        test: /\.ts[x]/,
        use: 'ts-loader',
      },
      {
        test: /\.(css|scss)/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = webpackBaseConfig;
