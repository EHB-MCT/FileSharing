"use strict";
const path = require('path');

module.exports = {
    entry: './script.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs/js')
    },
    mode: 'development',
    watch: true
}