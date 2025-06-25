const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/bootstrap.tsx',
  mode: 'development',
  output: {
    publicPath: 'auto',
    filename: 'remoteEntry.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'HelloWorld',
      filename: 'remoteEntry.js',
      exposes: {
        './Plugin': './src/index',
      },
    }),
  ],
};