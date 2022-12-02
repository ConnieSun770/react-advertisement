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
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      pages: path.join(__dirname, '../src/pages/'),
      common: path.join(__dirname, '../src/common/'),
      '@utils': path.join(__dirname, '../src/utils/'),
      '@components': path.join(__dirname, '../src/components/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
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
