import React from "react";
import { Palette } from "../../Theme/Theme";
export interface CardStyledComponentProps {
    borderColour: Palette;
}
export interface CardStyledSubComponentProps {
    borderColour?: Palette;
}
export interface CardComponentProps {
    background?: Palette;
    borderColour?: Palette;
}
export interface CardThumbnailComponentProps extends CardStyledSubComponentProps {
    source: string;
    alt?: string;
}
export interface CardSubcomponents {
    Header: React.FunctionComponent<CardStyledSubComponentProps>;
    Thumbnail: React.FunctionComponent<CardThumbnailComponentProps>;
    Body: React.FunctionComponent<CardStyledSubComponentProps>;
    Footer: React.FunctionComponent;
}
