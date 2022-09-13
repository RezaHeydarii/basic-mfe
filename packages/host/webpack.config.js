const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const pkg = require("./package.json");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    hot: true,
    open: true,
    port: 3001,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Host",
      remotes: {
        Remote: "MyRemote@http://localhost:3000/remoteEntry.js",
      },
      shared: [
        { packageName: "react", requiredVersion: pkg.dependencies["react"] },
        {
          packageName: "react-dom",
          requiredVersion: pkg.dependencies["react-dom"],
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
