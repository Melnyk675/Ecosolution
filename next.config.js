const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
      });
      return config;
    },
    webpack: (config, { isServer }) => {
      
        if (!isServer) {
          config.resolve.alias['@'] = path.resolve(__dirname);
        }
        return config;
      },
  };
  
  module.exports = nextConfig;