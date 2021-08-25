
//Ojo. Cambiar para
const path = require('path');
const { cache } = require('webpack');
const DIST_DIR = path.resolve(__dirname, 'src/public');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR + '/js',
    filename: 'bundle.js'
  },
  cache: false,
  module: {
    rules: [
      {
        use:  'babel-loader',
        test: /\.(js|jsx|png|jpg|)$/,
        exclude: /node_modules/,
        //loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        }],
      },
      
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};