const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./public/index.html",
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{ test: /\.(js)$/, exclude: /(node_modules)/, use: "babel-loader" },
			{
				test: /\.(css)$/,
				exclude: /(node_modules)/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ["file-loader"],
			},
		],
	},
};
