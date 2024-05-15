// next.config.js
const nextConfig = {
  webpack(config, { dev, isServer }) {
    // Loop over all rules
    config.module.rules.forEach(rule => {
      if (rule.oneOf) {
        rule.oneOf.forEach(oneOf => {
          // Target only CSS Modules
          if (oneOf.sideEffects === false && /\.module\.css$/.test(oneOf.test)) {
            oneOf.use.forEach(use => {
              if (use.loader.includes('css-loader') && use.options.modules) {
                use.options.modules = {
                  ...use.options.modules,
                  localIdentName: '[hash:base64:8]',
                };
              }
            });
          }
        });
      }
    });
    return config;
  },
  distDir: 'build',
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
