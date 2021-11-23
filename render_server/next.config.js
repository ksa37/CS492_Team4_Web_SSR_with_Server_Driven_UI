// module.exports = {
//   reactStrictMode: true,
//   test: /\.svg$/,
//   use: ['@svgr/webpack'],
// }

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};