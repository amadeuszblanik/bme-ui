import { Palette } from '../../Theme/Theme';

export interface ButtonStyledComponentProps {
    variant?: Palette;
    outline?: boolean;
    rounded?: boolean;
}

export interface ButtonComponentProps extends ButtonStyledComponentProps {
    onClick?: () => void;
}
