import { Palette } from "../../Theme/Theme";
export interface TopbarStyledComponentProps {
    variant?: Palette;
    fixed?: boolean;
}
export interface TopbarComponentProps extends TopbarStyledComponentProps {
    brand: string;
}
