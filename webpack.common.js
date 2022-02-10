const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: "./src/js/index.js",
      


    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'hvac.html',
            template: 'src/pages/hvac.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'home-services.html',
            template: 'src/pages/home-services.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'plumbing.html',
            template: 'src/pages/plumbing.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'electrical.html',
            template: 'src/pages/electrical.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'construction.html',
            template: 'src/pages/construction.html',
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