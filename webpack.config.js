const path = require("path");
const isMinPack = process.env.NODE_ENV.includes("min");
const libraryTarget = "umd";
const config = {
  target: "web", //支持web，node，async-node...
  mode: isMinPack ? "production" : "development",
  entry: path.resolve("./lib/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `index.umd${isMinPack ? ".min" : ""}.js`,
    library: "extend-promise", //打包导出的变量名称
    globalObject: "this", // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    libraryTarget, // 定义打包方式Universal Module Definition,根据环境判断打包方式同时支持在CommonJS、AMD，Script和全局变量使用
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ], //es6转es5
  },
  plugins: [],
};

module.exports = config;
