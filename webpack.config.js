"use strict";
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const dist = path.resolve(__dirname, "dist");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/app.tsx"
    },
    output: {
        path: dist,
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    devServer: {
        contentBase: dist,
    },
    plugins: [
        new CopyPlugin([
            path.resolve(__dirname, "static")
        ])
    ]
};
