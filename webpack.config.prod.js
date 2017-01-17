import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname, 'src/app')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, exclude: /node_modules/, loaders: ['style', 'css', 'autoprefixer']},
            {test: /\.(png|jpg|jpeg|ttf|eot)$/, exclude: /node_modules/, loaders: ['url?limit=5000']}
        ]
    }
}