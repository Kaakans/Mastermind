const path = require('path');

const babelOptions = {
    presets: [
        "@babel/preset-env"
    ],
    plugins: [
        ['@babel/plugin-transform-react-jsx-source', { pragma: 'h' }]
    ]
};

module.exports = {
    mode: "development",
    // entry file - starting point for the app
    entry: './src/index.tsx',

    // where to dump the output of a production build
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            fallback: 'file-loader'
                        }
                    }
                ]
            },
            {
                test: /\.js(x?)$/,
                loader: 'babel-loader',
                options: babelOptions
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    // enable Source Maps
    devtool: 'inline-source-map',

    devServer: {
        // serve up any static files from src/
        contentBase: __dirname,

        // enable gzip compression:
        compress: true,

        // enable pushState() routing, as used by preact-router et al:
        historyApiFallback: true
    }
};