import React from "react";
import {FormSubcomponents} from "./Form.types";
import TextField from "./TextField/TextField";

const Form: React.FunctionComponent & FormSubcomponents = ({ children }) => <>{children}</>;

Form.TextField = TextField;

export default Form;
