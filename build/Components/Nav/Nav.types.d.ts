import React from "react";
import { AlignXValues } from "../../Mixins/makeFlex";
export interface NavItemComponentProps {
    active?: boolean;
}
export interface NavComponentProps {
    active?: boolean;
    alignX?: AlignXValues;
}
export interface NavSubcomponents {
    Item: React.FunctionComponent<NavItemComponentProps>;
}
