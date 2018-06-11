const path = require('path');
const source = path.resolve(__dirname, '../src');

module.exports = {
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      './src/index.js'
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: source,
        options: {
          configFile: path.resolve('./.eslintrc')
        },
        loader: 'eslint-loader'
      },
      // the 'transform-runtime' plugin tells babel to require the runtime
      // instead of inlining it.
      {
        test: /\.js$/,
        include: source,
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
  },
  devServer: {
    historyApiFallback: false
  },
  devtool: 'source-map'
};
