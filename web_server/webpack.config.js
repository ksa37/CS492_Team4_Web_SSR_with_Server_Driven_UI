const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../render_server/src/pages/index.js'),
    mode: process.env.NODE_ENV || 'development',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader:'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
};