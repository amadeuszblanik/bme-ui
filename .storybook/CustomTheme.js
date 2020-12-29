import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  colorPrimary: '#c43235',
  colorSecondary: '#300032',

  // UI
  appBg: '#070614',
  appContentBg: '#020208',
  appBorderColor: '#e6e6e8',
  appBorderRadius: 1,

  // Typography
  fontBase: '"IBM Plex Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontCode: 'monospace',

  // Text colors
  textColor: '#e6e6e8',
  textInverseColor: '#040404',

  // Toolbar default and active colors
  barTextColor: '#e6e6e8a8',
  barSelectedColor: '#c43235',
  barBg: '#070614',

  // Form colors
  inputBg: '#020208',
  inputBorder: '#020208',
  inputTextColor: '#e6e6e8',
  inputBorderRadius: 1,

  brandTitle: 'Blanik.me',
  brandUrl: 'https://blanik.me',
  brandImage: 'https://blanik.me/assets/logo.svg',
});
