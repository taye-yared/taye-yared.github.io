var config = {
   entry: './src/main.tsx',
	
   output: {
      path: __dirname + "/dist",
      filename: 'index.js',
   },

   devtool: "source-map",
	
   devServer: {
      inline: true,
      port: 8080
   },

   resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
	
   module: {
      loaders: [
         // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]},
            { test: /\.css$/, loader: "style-loader!css-loader" }
      ],
      preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
   }
}

module.exports = config;