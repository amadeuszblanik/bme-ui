export interface SelectOption {
    value: string;
    content: string;
}
export interface SelectComponentProps {
    options: SelectOption[];
    name: string;
    label?: string;
    value?: string;
    helperText?: string;
    errorText?: string;
    valid?: boolean;
    onChange: (value: string) => void;
    required?: boolean;
}
