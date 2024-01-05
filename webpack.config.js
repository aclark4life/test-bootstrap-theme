const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',   // Inject styles into DOM
          'css-loader',     // Interpret CSS
          'sass-loader',    // Process Sass/SCSS
        ],
      },
    ],
  },
};

