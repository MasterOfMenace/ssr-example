import {Configuration} from 'webpack';
import {Configuration as WDSConfig} from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

// type ModeType

const isDev = process.env.NODE_ENV === 'development';

const config: Configuration & {
  devServer?: WDSConfig;
} = {
  name: 'client',
  mode: (process.env.NODE_ENV as Configuration['mode']) || 'development',
  entry: path.resolve(__dirname, './src/client.tsx'),
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})],
  },
  devServer: {
    port: 3000,
    open: false,
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    devMiddleware: {
      publicPath: '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
      hash: false,
      filename: 'index.html',
      path: path.resolve(__dirname, 'build'),
    }),
  ],
  devtool: isDev ? 'source-map' : false,

  optimization: {
    minimize: !isDev,
  },
};

export default config;
