const { postcss } = require("autoprefixer");
const postCSSPlugins =[
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('autoprefixer')]
const path =require("path");
module.exports ={

    entry: "./app/assets/scripts/app.js",
    output: {
        filename:"Bundle.js",
        path: path.resolve(__dirname,"app"),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'app'), // specify the directory to serve static files from
        },
        hot: true,
        port: 3000, 
        host: '0.0.0.0',
        watchFiles: {
            paths: ['./app/**/*.html'] 
          }
      },
    mode : "development",
    module:{
        rules:[
        {
         test:/\.css$/i,
         use : ['style-loader','css-loader',{loader: 'postcss-loader',options:{postcssOptions:{ plugins: postCSSPlugins}}}],
        }
        ]
    }
}