export interface SelectOption {
    value: string;
    content: string;
}

export interface SelectComponentProps {
    options: SelectOption[];
    name: string;
    label?: string;
    value?: string;
    onChange: (value: string) => void;
    required?: boolean;
}
