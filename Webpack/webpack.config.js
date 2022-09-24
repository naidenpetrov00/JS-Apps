const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
};