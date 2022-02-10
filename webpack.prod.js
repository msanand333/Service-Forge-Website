const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    devtool: 'source-map',
    mode: "production",

    output: {
        filename: "js/[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "build")
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contentHash].css",
        })
    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader


                    }, //4.Extract css into files

                    "css-loader", //3.Turns css into commonjs
                    
                    //2.CSS Vendor prefixers are added
                    {
                        loader: "postcss-loader",
                        options: {
                          ident: 'postcss',
                          plugins: [
                            require('autoprefixer')({
                              'browsers': ['> 0.5%', 'last 10 versions']
                            }),
                          ]
                        }
                      },
                    "sass-loader" //1.Turns scss to css
                ]
            }


        ]
    }
});