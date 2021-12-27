const path = require('path')
const VueLoaderPlugin  = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'none', // 因为默认是production 默认会进行压缩
    entry: './src/npmTest/index.js',
    output: {
        path: path.resolve(__dirname, 'dist2'),
        publicPath: '/dist/',
        filename: "[name].js",
        library: "filedSet",
        libraryExport: "filedSet", // 不添加的话引用的时候需要 tools.default
        libraryTarget: "umd", // var this window ...
        umdNamedDefine: true
    },
    module: {
        rules:[
            {   
                test: /\.vue$/,             //test:指定匹配规则，use：指定使用的loader名称 
                loader: 'vue-loader',
                // 配置分离css文件
                options: {
                    extractCSS: true,
                }
              },
              {
                // css文件编译压缩
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },
            ]
    },
    plugins: [
        new VueLoaderPlugin(),
      ],
}