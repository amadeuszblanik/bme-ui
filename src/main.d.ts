import 'styled-components';
import { TextFontFamilies } from './Components/Text/Text.types';
import { Palette } from './Theme/Theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        bme: {
            palette: { [key in Palette]: string };
            fonts: { [key in TextFontFamilies]: string };
            grid: {
                sizes: {
                    mobile: number;
                    tablet: number;
                    desktop: number;
                };
                gap: {
                    mobile: number;
                    tablet: number;
                };
            };
        };
        breakpoints: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    }
}

declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';
declare module '*.eot';
