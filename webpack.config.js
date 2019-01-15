const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 8080,
    open: true,
    proxy: {
      "/api": "http://localhost:8081"
    }
  },
  entry: [
    path.resolve(__dirname, './src/index.js')
  ],
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader', options: { name: '[hash].[ext]' } },
      { test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap'] }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};