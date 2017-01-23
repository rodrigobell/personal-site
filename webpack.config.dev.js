import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/app')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.html$/, exclude: /node_modules/, loaders: ['html']},
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, exclude: /node_modules/, loaders: ['style', 'css', 'autoprefixer']},
            {test: /\.(png|jpg|jpeg|svg|ttf|eot)$/, exclude: /node_modules/, loaders: ['url?limit=10000']}
        ]
    }
}