const withImages = require('next-images');
const withPWA = require('next-pwa')

module.exports = withImages({
  esModule: true,
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});

module.exports = {
  future: {
    webpack5: true,
  },
}

module.exports = withPWA({
  pwa: {
      dest: 'public'
  }
})