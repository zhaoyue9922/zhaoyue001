const path = require('path');
const glob = require('glob');
const htmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require("./src/entry_webpack.js");
var CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode:"development",
        entry: {
            "index1":'./src/index1.js',
            "index2":'./src/index2.js'
        },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8080/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:'css-loader',
                        options:{importLoaders:1}
                    },'postcss-loader']
                })
            },{
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:'5000',
                            outputPath:'image/'
                        }
                    }
                ]
            },
            {
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    use:["css-loader","sass-loader"],
                    fallback:"style-loader",
                })
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "env","react"
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]  
    },
    plugins:[
        new htmlPlugin({
            template:'./src/index1.html',
            minify:{
                    removeAttributeQuotes:true
            },
            hash:true,
            filename:'index1.html',
          /*   title:'title1', */
            chunks:['index1']
        }),
        new htmlPlugin({
            template:'./src/index2.html',
            minify:{
                    removeAttributeQuotes:true
            },
            hash:true,
            filename:'index2.html',
          /*   title:'title1', */
            chunks:['index2']
        }),
        new ExtractTextPlugin("css/style.css"),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname,'src/*.html')),
        }),
        new webpack.BannerPlugin('成哥所有,翻版必究!'),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public'
        }])
    ],
devServer:{
    contentBase:'./dist',
    host:'localhost',
    port:'8080',
    //compress:true,
    open:true
},
watchOptions:{
    poll:1000,
    aggregateTimeout:500,
    ignored:/node_modules/
}
}