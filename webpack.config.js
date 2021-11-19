const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

require("dotenv").config();

const BASE_JS = "/src/client/js/";

module.exports = {
    entry: {
        main: BASE_JS + "main.js",
        home: BASE_JS + "home.js",
        join: BASE_JS + "join.js",
        login: BASE_JS + "login.js",
        views: BASE_JS + "views.js",
        comment: BASE_JS + "comment.js",
        gameDetail: BASE_JS + "gameDetail.js",
        wsServer: BASE_JS + "wsServer.js",
    },

    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "js/[name].js",
        clean: true,
    },

    plugins: [
        new webpack.DefinePlugin({
            API_KEY: JSON.stringify(process.env.API_KEY),
        }),
        new MiniCssExtractPlugin({
            filename: "css/styles.css",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
};
