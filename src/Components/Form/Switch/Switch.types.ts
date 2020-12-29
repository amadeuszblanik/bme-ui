import { Palette } from '../../../Theme/Theme';

export interface SwitchComponentProps {
    name: string;
    label: string;
    value?: boolean;
    onChange: (value: boolean) => void;
    required?: boolean;
    variant?: Palette;
}
