module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.tsx$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    config.resolve.extensions.push('.tsx');

    return config;
  },
};
