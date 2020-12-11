import React from 'react';
import { FormSubcomponents } from './Form.types';
import TextField from './TextField/TextField';
import Select from './Select/Select';

const Form: React.FunctionComponent & FormSubcomponents = ({ children }) => <>{children}</>;

Form.TextField = TextField;
Form.Select = Select;

export default Form;
