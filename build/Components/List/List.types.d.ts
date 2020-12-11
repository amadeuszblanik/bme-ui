import React from 'react';
import { Palette } from '../../Theme/Theme';
export interface ListStyledComponentProps {
    borderColour: Palette;
}
export interface ListStyledSubComponentProps {
    borderColour?: Palette;
}
export interface ListComponentProps {
    background?: Palette;
    borderColour?: Palette;
}
export interface ListSubcomponents {
    Item: React.FunctionComponent<ListStyledSubComponentProps>;
}
