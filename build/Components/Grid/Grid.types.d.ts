import React from 'react';
import { AlignXValues, AlignYValues } from '../../Mixins/makeFlex';
export interface GridComponentProps {
    width?: 'full' | 'half';
}
export interface GridColComponentProps {
    mobile: 1 | 2 | 3 | 4;
    tablet: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    desktop: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    alignX?: AlignXValues;
    alignY?: AlignYValues;
}
export interface GridSubcomponents {
    Col: React.FunctionComponent<GridColComponentProps>;
    Container: React.FunctionComponent;
}
