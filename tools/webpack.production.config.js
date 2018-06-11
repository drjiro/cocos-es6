let path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'stage-0'
            ],
            plugins: [
              'transform-runtime'
            ]
          }
        }
      }
    ]
  }
};
