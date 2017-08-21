var HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports={
	entry:  __dirname + "/app/main.js",//唯一入口文件
  	output: {
    	path: __dirname + "/build",
        filename: "bundle.js"
  	},
  	devServer: {
	    contentBase: "./build",//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    inline: false//实时刷新
	},
	plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"//导入html模板
        })
    ]
}
