module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-styled-component-theme/dist/preset",
    "storybook-addon-pseudo-states"
  ],
  "framework": "@storybook/react"
}
