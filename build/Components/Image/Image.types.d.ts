export declare type TextSizes = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs";
export declare type TextFontFamilies = "sansSerif" | "serif" | "mono";
export declare type TextFontWeights = "bold" | "regular" | "light";
export declare type TextAligns = "left" | "center" | "right";
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
