const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

module.exports = {
 entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },{
            loader: 'css-loader'
          },{
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 13000,
            name: 'img/[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  // 主要是帮你解决一些路径问题
  resolve: {
    // 想要在编写编写程序时省略什么后缀名
    extensions: ['.js','.css','.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('The right of final interpretation belongs to GCS'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyJsPlugin()
  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }
}