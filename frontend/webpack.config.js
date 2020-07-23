const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require('glob')
const path = require('path')

const PATHS = {
    src: path.join(__dirname, 'static/frontend')
}

module.exports = {
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: "[id].css",
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, {nodir: true}),
        }),
    ]

};
