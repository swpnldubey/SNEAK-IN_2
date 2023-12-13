const path = require('path');

module.exports = {
    // ...
    resolve: {
      fallback: {
        // "path": require.resolve("path-browserify"),
        "querystring": require.resolve("querystring-es3"),
        // "os": require.resolve("os-browserify/browser"),
        // "crypto": require.resolve("crypto-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "stream": require.resolve("stream-browserify"),
        "fs": false,
      }
    }
    // ...
  };
