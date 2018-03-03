const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


let plugins = [];

plugins.push(
  new ExtractTextPlugin('style.css'),
  new UglifyJsPlugin()
);

  module.exports = {
    entry: './dev/js/main.js',
    output: {
      filename: 'resume.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  //root: '../img',
                  // If you are having trouble with urls not resolving add this setting.
                  // See https://github.com/webpack-contrib/css-loader#url
                  //url: false,
                  minimize: true,
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader'
              },
              {
                loader: 'resolve-url-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", 'resolve-url-loader', 'postcss-loader']
          })
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                mozjpeg: {
                  progressive: true,
                  quality: 75
                  }
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    devServer: {
      port: 3500,
      contentBase: path.join(__dirname, "dist"),
      inline: true
    },
    plugins: plugins,
    resolve: {
      extensions: ['.js', '.scss', '.css']
    }
  };