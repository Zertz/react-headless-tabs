module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.tsx');

    return config;
  },
};
