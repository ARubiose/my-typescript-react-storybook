module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  // "staticDirs": ['../assets'],
  framework: "@storybook/react",
  core: {
    builder: 'webpack5',
  },
  // staticDirs: ['../assets'],   Not working - 99% building...
}