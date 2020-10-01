export type TextSizes = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs";
export type TextFontFamilies = "sansSerif" | "serif" | "mono";
export type TextFontWeights = "bold" | "regular" | "light";
export type TextAligns = "left" | "center" | "right";

export interface ImageComponentStyledFigureProps {
  lazy?: boolean;
  width?: number;
  loaded: boolean;
}

export interface ImageComponentStyledImageProps {
  loaded: boolean;
}

export interface ImageComponentProps extends ImageComponentStyledFigureProps{
  source: string;
  alt?: string;
}
