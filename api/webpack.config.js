const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
        type: 'module'
    },
    chunkFormat: 'module'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['babel-plugin-transform-import-meta']
            }
          },
           'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
    resolve: {
        extensions: ['.tsx', '.ts' ,'.js']
},
    externals: [nodeExternals()],
    experiments: {
        outputModule: true
    }    
};