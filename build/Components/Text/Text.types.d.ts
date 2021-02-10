import { Palette } from '../../Theme/Theme';
export declare type TextSizes = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
export declare type TextFontFamilies = 'sansSerif' | 'serif' | 'mono';
export declare type TextFontWeights = 'bold' | 'regular' | 'light';
export declare type TextAligns = 'left' | 'center' | 'right';
export interface TextComponentProps {
    variant?: Palette;
    size?: TextSizes;
    fontFamily?: TextFontFamilies;
    weight?: TextFontWeights;
    align?: TextAligns;
    italic?: boolean;
    noWrap?: boolean;
}
