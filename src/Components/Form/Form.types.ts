import React from 'react';
import { TextFieldComponentProps } from './TextField/TextField.types';
import { SelectComponentProps } from './Select/Select.types';

export interface FormSubcomponents {
    TextField: React.FunctionComponent<TextFieldComponentProps>;
    Select: React.FunctionComponent<SelectComponentProps>;
}
