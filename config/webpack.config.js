var webpack = require("webpack");
module.exports = {
    entry: "./_dev/devjs/app.js",
    output: {
        path: __dirname,
        filename: "./js/aj_bb_Krypinbundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: "lodash"
        })

    ]
};
