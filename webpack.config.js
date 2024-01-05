const path = require('path');

module.exports = {
  entry: './src/index.js', // or your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Replaces contentBase
    compress: true,
    port: 9000,
    open: true,
  },
};
