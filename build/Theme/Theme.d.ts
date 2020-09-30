import { TextFontFamilies } from "../Components/Text/Text.types";
export declare type Palette = "primary" | "secondary" | "tertiary" | "dark" | "light";
export declare type Sizes = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs";
interface Thm {
    bme: {
        palette: {
            [key in Palette]: string;
        };
        fonts: {
            [key in TextFontFamilies]: string;
        };
    };
}
declare const Thm: Thm;
export default Thm;
