const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  assets: 'assets/',
};

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: './main.js',
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      actions: path.resolve(__dirname, 'src/actions/'),
      selectors: path.resolve(__dirname, 'src/selectors/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      img: path.resolve(__dirname, 'src/assets/images'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/,
        loader: 'file-loader',
        options: {
          limit: 10240,
          name: '[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: `${PATHS.src}/styles/fonts`,
        to: `${PATHS.assets}/fonts`,
      }],
    }),
  ],
};
