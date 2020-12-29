import React from 'react';
import { FormSubcomponents } from './Form.types';
import TextField from './TextField/TextField';
import Select from './Select/Select';
import Switch from './Switch/Switch';

const Form: React.FunctionComponent & FormSubcomponents = ({ children }) => <>{children}</>;

Form.TextField = TextField;
Form.Select = Select;
Form.Switch = Switch;

export default Form;
