let webpack = require('webpack');
let path = require('path');

module.exports = {
	devtool:"inline-source-map",
	entry: __dirname+"/app",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js"
	},
	devServer:{
		inline:true,
		hot:true
	},
	 module: {
	  loaders: [
	   {
	    test: /\.js[x]?$/,
	    loaders: ["babel-loader?presets[]=react,presets[]=es2015"]
	   },
	   {
	    test: /\.css?$/,
	    loaders: ["style-loader", "css-loader"]
	   }
	  ]
	 },
	 plugins: [
	  new webpack.HotModuleReplacementPlugin(),
	  new webpack.NoEmitOnErrorsPlugin()
	 ]
};