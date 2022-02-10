const path = require("path");
const common=require("./webpack.common");
const merge=require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports =merge(common,{
    mode: "development",

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
 
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    
                    }, //3.Extract css into files
                    "css-loader", //2.Turns css into commonjs
                    "sass-loader" //1.Turns scss to css
                ]
            }
          
        ]
    }
});