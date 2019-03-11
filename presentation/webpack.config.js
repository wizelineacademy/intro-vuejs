const hash = require("string-hash");
const { relative, resolve } = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ({ resource }) => [
          {
            loader: "babel-loader?cacheDirectory"
          },
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  {
                    cleanupIDs: {
                      prefix: `svg${hash(relative(__dirname, resource))}`
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src/")
    }
  }
};
