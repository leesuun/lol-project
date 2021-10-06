const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BASE_JS = "/src/client/js/";

module.exports = {
    entry: {
        main: BASE_JS + "main.js",
        join: BASE_JS + "join.js",
        login: BASE_JS + "login.js",
        paging: BASE_JS + "paging.js",
    },

    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "js/[name].js",
        clean: true,
    },
    watch: true,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/styles.css",
        }),
    ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
};
