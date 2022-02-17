const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: "./src/js/index.js",
      


    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'ductsinarow.html',
            template: 'src/pages/ductsinarow.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'helpinghand.html',
            template: 'src/pages/helpinghand.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'theflush.html',
            template: 'src/pages/theflush.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'nutsnvolts.html',
            template: 'src/pages/nutsnvolts.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'nailedit.html',
            template: 'src/pages/nailedit.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'serviceforge.html',
            template: 'src/pages/serviceforge.html',
            chunks: ['index']
        }),
  
    ],

    module: {
        rules: [

            {
                test: /\.html/,
                use: [{
                    loader: "html-loader",

                }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images",
                        esModule: false,
                    }
                }
            }
        ]
    }
}