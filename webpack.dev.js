const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/greeter.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../../", "dist")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: ["./src"],
    port: 5000
  }
};
