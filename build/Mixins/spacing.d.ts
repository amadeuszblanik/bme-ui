import { Sizes } from "../Theme/Theme";
interface Sizing {
    x?: Sizes | {
        left?: Sizes;
        right?: Sizes;
    };
    y?: Sizes | {
        top?: Sizes;
        bottom?: Sizes;
    };
}
export declare type SpacingSize = Sizes | Sizing;
declare type Type = "padding" | "margin";
declare const spacing: (type: Type, size: SpacingSize) => string;
export default spacing;
