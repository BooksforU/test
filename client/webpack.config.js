module.exports = {
    entry: {
        helloWorld: [
           './js/main'
        ]
    },
    output: {
        filename: 'public/[name].js'
    },
    module: {
      loaders: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          loader: "babel",
          query:
            {
              presets:['react', 'es2015']
            }
        },
        { test: /\.css$/, loader: "style!css" },
        { test: /\.(eot|woff|woff2|ttf|svg)$/, loader: 'url?limit=100000' }
    ]
    }
};
