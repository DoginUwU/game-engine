const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false
              }
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          url: false
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    fallback: {
      zlib: false,
      path: false,
      stream: false
    }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    clean: false
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async'
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/',
      watch: true
    },
    liveReload: true,
    compress: true
  }
};