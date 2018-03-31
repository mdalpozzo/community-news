const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: [
    `${SRC_DIR}/App.jsx`,
  ],
  output: {
    path: DIST_DIR,
    // publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
