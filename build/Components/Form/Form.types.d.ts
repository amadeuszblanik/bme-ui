import React from 'react';
import { TextFieldComponentProps } from './TextField/TextField.types';
import { SelectComponentProps } from './Select/Select.types';
import { SwitchComponentProps } from './Switch/Switch.types';
import { LabelComponentProps } from './Label/Label.types';
export interface FormSubcomponents {
    TextField: React.FunctionComponent<TextFieldComponentProps>;
    Select: React.FunctionComponent<SelectComponentProps>;
    Switch: React.FunctionComponent<SwitchComponentProps>;
    Label: React.FunctionComponent<LabelComponentProps>;
}
