import { Palette } from '../../Theme/Theme';

export type TextSizes = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
export type TextFontFamilies = 'sansSerif' | 'serif' | 'mono';
export type TextFontWeights = 'bold' | 'regular' | 'light';
export type TextAligns = 'left' | 'center' | 'right';

export interface TextComponentProps {
    variant?: Palette;
    size?: TextSizes;
    fontFamily?: TextFontFamilies;
    weight?: TextFontWeights;
    align?: TextAligns;
    italic?: boolean;
}
