"use strict";

const merge = require('webpack-merge');

const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');

const common = {
    entry: {
        app: PATHS.src 
    },
    output: {
        path: PATHS.dist,
        filename: 'bundle.js'
    },
    module: { 
        rules: [
          loaders.babel,
          loaders.css, 
          loaders.font,
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = function(env) {
    if (env === 'production') {
        return merge(
            common,
            { devtool: 'source-map' }
         );
    }
    if (env == 'development') {
        return merge(
            common,
            { devtool: 'eval-source-map' },
            loaders.devServer({
                host: process.env.host,
                port: 3000
            })
        );
    }
};