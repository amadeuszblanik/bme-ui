import React from 'react';
import { FormSubcomponents } from './Form.types';
import TextField from './TextField/TextField';
import Select from './Select/Select';
import Switch from './Switch/Switch';
import Label from './Label/Label';

const Form: React.FunctionComponent & FormSubcomponents = ({ children }) => <>{children}</>;

Form.TextField = TextField;
Form.Select = Select;
Form.Switch = Switch;
Form.Label = Label;

export default Form;
