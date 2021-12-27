const path = require('path')
// Vue Loader v15版本以上，需要引入并配置这个插件！
/*
这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
*/
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //拆分css
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'); //压缩css
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //打包前删除上一次的dist目录
const isDev = process.env.NODE_ENV === 'development'
console.log(process.env.NNNN_ENV)
const config = {
  mode: "development",
  entry: './src/main.js',  //入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),//绝对路径   __dirname:当前项目的目录/d/jian/webpack-start  path.resolve:自动拼接路径
    publicPath: '/',
    filename: 'js/[chunkhash].js',             //filename 指列在 entry 中，打包后输出的文件的名称。 chunkhash用来清缓存
    chunkFilename: `js/chunk.[name].js`,  //chunkFilename 指未列在 entry 中，却又需要被打包出来的文件的名称。
  },
  devServer: {
		static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000
	},
  resolve: {
    // 配置文件引入(import)路径别名
    alias:{
      '@': path.join(__dirname,'./src'),
      '@image': path.join(__dirname,'./src/assets')
    },
    // 引入时省略拓展名
    extensions: ['.js', '.vue']
  },
  module:{ 
    rules:[   //模块的打包规则
      {   
        // 新版本必须使用vueloaderplugin插件
        test: /\.vue$/,             //test:指定匹配规则，use：指定使用的loader名称 
        loader: 'vue-loader',
        // 配置分离css文件
        options: {
            extractCSS: true,
        }
      },
      // { test: /\.s[ca]ss$/, use: [ 'style-loader', 'css-loader', 'sass-loader']}, //从右往左执行
      {
        // css文件编译压缩
        test: /\.css$/,
        use: [{loader: MiniCssExtractPlugin.loader, options: { esModule: true }}, 'css-loader']
      },
      {
          test: /\.less$/,
          use: [ {loader: MiniCssExtractPlugin.loader, options: { esModule: true }}, 'css-loader','less-loader']
      },
      {
          test: /\.scss$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
      },
      { test:/\.m?js$/, 
        use: {
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // {test: /\.(png|jpe?g|gif|svg|webp)$/, use: { loader: 'file-loader', options: { esModule: false } } },
      { test:/\.(png|jpe?g|gif|svg|webp)$/, 
        type: 'asset/resource',
        generator: {    //打包图片并放到指定文件夹下
           filename: 'imgs/[hash][ext][query]'
        }
      },
    ],
  },
  optimization: {
      // css压缩
      minimize: true,
      minimizer: [
        new CssMinimizerWebpackPlugin(),
      ],
      // 拆分库文件  
      splitChunks: {
        cacheGroups: {
            lib: {
                name: 'lib',
                chunks: 'initial',
                test: /node_modules/,
            }
        }
      }
  },  
  plugins: [
    new HTMLPlugin({
      template: './public/index.html',
      hash: true, //添加指纹的另一种方式，以query形式添加  
      inject: true //是否注入静态资源，默认注入，可不设置
    }),
    new VueLoaderPlugin(),
    // 拆分css文件插件
    new MiniCssExtractPlugin({ 
      // 定义拆分css文件的位置
      filename: `css/[chunkhash].css`,
    }),
    // new CleanWebpackPlugin(),
  ],
}
// if(isDev){
//   console.log('aaa');
//   config.devServer = {
//     port:9000,
//     host:'0.0.0.0',
//     overlay:{
//       errors: true
//     }
//   }
// }
module.exports = config