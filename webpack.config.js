const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        use: [{ loader: 'babel-loader' }],
      },

      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    new CleanWebpackPlugin([
      'dist'
    ])
  ],

  devServer: {
    host: 'localhost',
    port: 4000,
    open: true,
  }
};
