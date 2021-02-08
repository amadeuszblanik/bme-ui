import React from 'react';
import { Palette } from '../../Theme/Theme';

export interface ListStyledComponentProps {
    borderColour?: Palette;
    lastChild?: boolean;
}

export interface ListStyledSubComponentProps {
    borderColour?: Palette;
    lastChild?: boolean;
    onClick?: () => void;
}

export interface ListComponentProps {
    background?: Palette;
    borderColour?: Palette;
}

export interface ListSubcomponents {
    Item: React.FunctionComponent<ListStyledSubComponentProps>;
}
