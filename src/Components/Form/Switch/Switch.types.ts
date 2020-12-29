import { Palette } from '../../../Theme/Theme';

export interface SwitchComponentProps {
    name: string;
    label: string;
    value?: boolean;
    helperText?: string;
    errorText?: string;
    valid?: boolean;
    onChange: (value: boolean) => void;
    required?: boolean;
    variant?: Palette;
}
