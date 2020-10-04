export interface TextFieldComponentProps {
  name: string;
  label?: string;
  value?: string;
  characterLimit?: number;
  helperText?: string;
  errorText?: string;
  valid?: boolean;
  onChange: (value: string) => void;
  required?: boolean;
}
