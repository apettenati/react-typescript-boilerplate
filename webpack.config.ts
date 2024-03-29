import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration, WebpackOptionsNormalized } from 'webpack'

/* *
 * WebpackOptionsNormalized included to extend config type to include devServer
 * SEE: https://github.com/webpack/webpack/issues/13621
 * */
const configuration: Configuration | WebpackOptionsNormalized = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: 'public',
    hot: true,
    open: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      clean: true,
    }),
  ],
}

export default configuration
