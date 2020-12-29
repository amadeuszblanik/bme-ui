const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      }
    },
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};
