export interface TextFieldComponentProps {
    name: string;
    label?: string;
    value?: string;
    onChange: (value: string) => void;
    required?: boolean;
}
