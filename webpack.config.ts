import * as path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'

const configuration: Configuration = {
  entry: {
    bundle: path.join(path.resolve(), 'src', 'index.tsx')
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: ['ts-loader', 'source-map-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.resolve(), './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(), './public', 'index.html')
    })
  ]
}

export default configuration
