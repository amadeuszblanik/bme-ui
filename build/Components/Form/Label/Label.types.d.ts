export interface LabelCharacterLimitComponentProps {
    characters?: number;
    maxLimit?: number;
}
export interface LabelComponentProps extends LabelCharacterLimitComponentProps {
    helperText?: string;
    errorText?: string;
    valid?: boolean;
}
