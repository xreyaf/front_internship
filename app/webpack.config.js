const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /(node_modules)/, loader: 'ts-loader' },
      { test: /\.(js)$/, exclude: /(node_modules)/, use: 'babel-loader' },
      {
        test: /\.(scss|css)$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    hot: true,
    port: 3030
  }
};
