// next.config.js
const nextConfig = {
    webpack: (config, { isServer }) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
      return config;
    },
  };
  
  module.exports = nextConfig;
  