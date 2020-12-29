import { Palette } from '../../Theme/Theme';

export interface SwitchComponentProps {
    checked?: boolean;
    variant?: Palette;
    onClick?: (value: boolean) => void;
}
