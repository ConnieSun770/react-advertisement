const path = require('path');

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
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = webpackBaseConfig;
