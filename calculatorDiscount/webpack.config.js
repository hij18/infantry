const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { main: path.resolve(__dirname, 'src', 'index.jsx') },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    }
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'style.css' }),
        new HtmlWebPlugin ({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        })
    ]
};