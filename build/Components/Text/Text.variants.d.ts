import { TextFontWeights, TextSizes } from "./Text.types";
declare const TextFontSize: {
    [key in TextSizes]: number;
};
declare const TextFontWeight: {
    [key in TextFontWeights]: number;
};
export { TextFontSize, TextFontWeight };
