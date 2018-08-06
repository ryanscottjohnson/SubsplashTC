const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m',
  },
};

module.exports = function() {

  const isProd = process.env && process.env.NODE_ENV === 'production';
  const nodeEnv = isProd ? 'production' : 'development';

  const plugins = [
    // new webpack.optimize.CommonsChunkPlugin({
    //   async: true,
    //   children: true,
    //   minChunks: 2,
    // }),
    new webpack.LoaderOptionsPlugin({ options: {} }),
    // setting production environment will strip out
    // some of the development code from the app
    // and libraries
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),

    // create index.html
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      production: isProd,
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ];

  if(isProd) {
    plugins.push(
      // minify remove some of the dead code
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    );
  }

  return {
    mode: 'development',
    
    entry: [
      './src/index.js'
    ],
    devtool: '#source-map',
    // devServer: {
    //   host: "rcds.worldvision.org",
    //   port: 8080,
    //   https: false
    // },
    output: {
      filename: '[name].bundle.min.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        // {
        //   enforce: "pre",
        //   test: /\.(js|jsx)$/,
        //   include: [path.resolve(__dirname, "src")],
        //   exclude: /node_modules/,
        //   loader: [ "eslint-loader" ]
        // },
        {
          test: /\.(js|jsx)$/,
          include: [path.resolve(__dirname, "src")],
          exclude: /node_modules/,
          loader: [ "babel-loader" ]
        },
        
      ]
    },
    plugins: plugins,
    stats: stats,
  };
};