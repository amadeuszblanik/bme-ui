import React from 'react';
import { Palette } from '../../Theme/Theme';

export interface AccordionTitleStyledProps {
    variant: Palette;
    onClick?: () => void;
}

export interface AccordionStyledSubComponentProps {
    title: string;
    variant?: Palette;
    onClick?: () => void;
    open?: boolean;
}

export interface AccordionComponentProps {
    variant?: Palette;
    variantActive?: Palette;
}

export interface AccordionSubcomponents {
    Item: React.FunctionComponent<AccordionStyledSubComponentProps>;
}
