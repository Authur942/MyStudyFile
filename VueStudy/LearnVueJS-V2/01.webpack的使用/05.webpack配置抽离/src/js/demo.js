// // 引入node中path模块包
// const path = require('path')

// module.exports = {
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname,'dist'),
//     filename: 'bundle.js',
//     publicPath: 'dist/'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         // style-loader 将模块的导出作为样式添加到 DOM 中
//         // 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
//         // webpack读取loader时的加载顺序为从右往左
//         // 先是将css-loader加载并解析然后通过style-loader将模块导出作为样式添加到DOM中
//         use: ['style-loader','css-loader']
//       },
//       {
//         test: /\.less$/,
//         use: [
//           {
//             loader: "style-loader" //从JS字符串创建样式节点
//           }, {
//             loader: "css-loader" // 将CSS转换为CommonJS
//           }, {
//             loader: "less-loader" //编译为CSS
//           }
//         ]
//       },
//       {
//         test: /\.(jpg|jpeg|png|gif)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             // 当加载图片时，limit小于13000字节的时候，会将图片编译成base64字符串的形式
//             // 当加载图片时，limit大于13000字节的时候，需要使用file-loader模块进行加载
//             limit: 13000,
//             name: 'img/[name].[hash:8].[ext]'
//           }
//         }
//       },
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['es2015']
//           }
//         }
//       }
//     ]
//   }
// }