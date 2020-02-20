const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});
