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
    library: "myPromise", 
    globalObject: "this", 
    libraryTarget, 
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
