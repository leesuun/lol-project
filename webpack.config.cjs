const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "/src/client/js/main.js",
        join: "/src/client/js/join.js",
        login: "/src/client/js/login.js",
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
