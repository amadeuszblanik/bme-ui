import React from 'react';
import { Palette } from '../../Theme/Theme';

export interface TopbarStyledComponentProps {
    variant?: Palette;
    fixed?: boolean;
}

export interface TopSubcomponents {
    Brand: React.FunctionComponent;
    Content: React.FunctionComponent;
}
