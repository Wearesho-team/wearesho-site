/**
 * Author: Alexander <Horat1us> Letnikow
 * Support: reclamme@gmail.com
 *
 * This file is Dark and full of Terrors
 */
// tslint:disable
const
    path = require('path'),
    fs = require('fs'),
    webpack = require('webpack');

// npm dependencies
const
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    TerserPlugin = require("terser-webpack-plugin");

const meta = require("./meta.json");

const debug = process.env.NODE_ENV !== 'production';
const env = debug ? 'local' : 'production';

const config = {
    entry: "./src/index.tsx",
    devServer: {
        publicPath: "/",
        contentBase: './web',
        noInfo: false,
        hot: true,
        inline: true,
        open: false,
        historyApiFallback: true,
        port: 8089,
        host: "0.0.0.0",
    },

    output: {
        filename: '[name].[hash:6].js',
        chunkFilename: '[name].[chunkHash:8].js',
        path: path.resolve('./web'),
        publicPath: "./",
        assetModuleFilename: '[name].[hash:6][ext]',
    },

    devtool: debug ? "source-map" : false,

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".css",],
        modules: [
            path.resolve('node_modules'),
            path.resolve('src'),
        ],
        alias: {
            normalize: path.join(__dirname, '/node_modules/normalize.css'),
        },
        fallback: {
            util: require.resolve("util/"),
        }
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "/",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: debug,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "autoprefixer",
                                    "cssnano",
                                ],
                            },
                            sourceMap: debug,
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: [
                                    path.resolve("./node_modules/compass-mixins/lib"),
                                    path.resolve(__dirname + './styles'),
                                ],
                            },
                            sourceMap: debug,
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|webp)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
            {
                test: /\.tsx?$/,
                use: [
                    { loader: "babel-loader" },
                    { loader: "awesome-typescript-loader", }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [
                    { loader: "babel-loader", }
                ]
            }
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].v${meta.version}.css`,
            chunkFilename: `[name].[hash].css`,
        }),
        new CleanWebpackPlugin(),
        new webpack.IgnorePlugin(/caniuse-lite\/data\/regions/),
        new HtmlWebpackPlugin({
            title: "SHO | Bobra",
            template: path.resolve('./templates/index.ejs'),
            inline: fs.readFileSync("./templates/scripts.js", "utf8"),
            minify: {
                minifyCSS: !debug,
                minifyJS: !debug,
                removeComments: !debug,
                trimCustomFragments: !debug,
                collapseWhitespace: !debug,
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env),
            },
            BUILD_TIME: JSON.stringify(new Date().toISOString()),
            BUILD_VERSION: JSON.stringify(meta.version),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve("./templates/static/"),
                    to: path.resolve("./web/static/"),
                },
                {
                    from: path.resolve("./meta.json"),
                    to: path.resolve("./web/meta.json"),
                },
                {
                    from: path.resolve("./templates/CNAME"),
                    to: path.resolve("./web/"),
                },
            ]
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: true,
                terserOptions: {
                    warnings: false,
                    module: false,
                    ie8: false,
                    keep_classnames: true,
                    keep_fnames: true,
                    safari10: true,
                },
            }),
        ],
        minimize: !debug,
        splitChunks: {
            chunks: "async",
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: "all",
                    test: new RegExp("[\\/]node_modules[\\/](" + [
                        "@babel/runtime",
                        "core-js",
                        "react",
                        "react-dom",
                        "react-helmet",
                        "react-router",
                        "react-router-dom",
                        "scheduler",
                        "react-img-webp",
                        "axios"
                    ].join("|") + ")[\\/]"),
                },
            },
        },
    },
    stats: debug || 'errors-only',
};

if (debug) {
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

if (process.env.ANALYZE) {
    console.log(`Analyzing bundle size`);
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            defaultSizes: 'gzip',
            openAnalyzer: true,
        }),
    );
}

module.exports = config;
