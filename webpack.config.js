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

const autoPrefixer = require("autoprefixer");
const cssNano = require("cssnano");

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
        },

        output: {
            filename: '[name].[hash:6].js',
            chunkFilename: '[name].[chunkHash:8].js',
            path: path.resolve('./web'),
            publicPath: "/",
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
                                hmr: debug,
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
                                plugins: [autoPrefixer(), cssNano()],
                                sourceMap: debug,
                            },
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
                    test: /\.(gif|png|jpe?g|svg|woff2?|ttf|eot|otf|webp)$/i,
                    loaders: [
                        {
                            loader: 'file-loader',
                            query: {
                                name: '[name].[hash:6].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /\.tsx?$/,
                    loaders: [
                        "babel-loader",
                        "awesome-typescript-loader",
                    ],
                },
                {
                    test: /\.jsx?$/,
                    exclude: [/node_modules/],
                    loader: "babel-loader",
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
            new webpack.NodeEnvironmentPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(env),
                },
                BUILD_TIME: JSON.stringify(new Date().toISOString()),
                BUILD_VERSION: JSON.stringify(meta.version),
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve("./templates/static/"),
                    to: path.resolve("./web/static/"),
                },
                {
                    from: path.resolve("./meta.json"),
                    to: path.resolve("./web/meta.json"),
                },
            ]),
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
    }
;

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
