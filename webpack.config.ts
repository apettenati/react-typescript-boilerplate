import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, WebpackOptionsNormalized } from "webpack";

/**
 * WebpackOptionsNormalized included to extend config type to include devServer
 * SEE: https://github.com/webpack/webpack/issues/13621
 * */
const configuration: Configuration | WebpackOptionsNormalized = {
  entry: { bundle: path.join(path.resolve(), "src", "index.tsx") },
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: "/./dist",
    hot: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(path.resolve(), "./dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(), "./public", "index.html"),
    }),
  ],
};

export default configuration;
