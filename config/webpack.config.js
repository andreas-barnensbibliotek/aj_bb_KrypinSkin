var webpack = require("webpack");
module.exports = {
    entry: "./_dev/devjs/app.js",
    output: {
        path: __dirname,
        filename: "../_dev/jsbundle/bb_aj_js/aj_bb_KrypinbundleWebpack.1.0.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: "lodash"
        })

    ]
};
