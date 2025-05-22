const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
 
module.exports = { 
  entry: './index.js', 
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
    publicPath: '/', 
  }, 
  mode: 'development', 
  devServer: { 
    static: './dist', 
    port: 3000, 
    historyApiFallback: true, 
  }, 
  module: { 
    rules: [ 
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ['babel-loader'], 
      }, 
      { 
        test: /\.css$/i, 
        use: ['style-loader', 'css-loader'], 
      } 
    ], 
  }, 
  plugins: [ 
    new HtmlWebpackPlugin({ 
      template: './index.html', 
    }), 
  ], 
  resolve: { 
    extensions: ['.js', '.jsx'], 
  }, 
}; 
