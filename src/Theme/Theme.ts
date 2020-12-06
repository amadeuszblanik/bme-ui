import { DefaultTheme } from 'styled-components';

export type Palette = 'primary' | 'secondary' | 'tertiary' | 'dark' | 'light' | 'focus' | 'required';
export type Sizes = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';

const Thm: DefaultTheme = {
    bme: {
        palette: {
            primary: '#300032',
            secondary: '#c43235',
            tertiary: '#0066FF',
            dark: '#000000',
            light: '#ffffff',
            focus: '#f9c642',
            required: '#cd2026',
        },
        fonts: {
            sansSerif:
                '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            serif: '"IBM Plex Serif", "Palatino Linotype", "Book Antiqua", Palatino, serif',
            mono: '"IBM Plex Mono", "Lucida Console", Monaco, monospace',
        },
        grid: {
            sizes: {
                mobile: 4,
                tablet: 8,
                desktop: 12,
            },
            gap: {
                mobile: 16,
                tablet: 24,
            },
        },
    },
    breakpoints: {
        xs: 0,
        sm: 520,
        md: 720,
        lg: 840,
        xl: 1280,
    },
};

export default Thm;
