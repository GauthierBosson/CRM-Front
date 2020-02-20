const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});

module.exports = {
  env: {
    API_URL: process.env.API_URL
  }
};
