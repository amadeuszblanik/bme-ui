export type TextSizes = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
export type TextFontFamilies = 'sansSerif' | 'serif' | 'mono';
export type TextFontWeights = 'bold' | 'regular' | 'light';
export type TextAligns = 'left' | 'center' | 'right';

export interface ImageComponentStyledFigureProps {
    lazy?: boolean;
    width?: string;
    height?: string;
    loaded?: boolean;
}

export interface ImageComponentStyledImageProps {
    loaded?: boolean;
    fixedSize?: boolean;
}

export interface ImageComponentProps {
    source: string;
    alt?: string;
    width?: string;
    height?: string;
    lazy?: boolean;
}
