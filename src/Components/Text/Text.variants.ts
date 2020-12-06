import { TextFontWeights, TextSizes } from './Text.types';

const TextFontSize: { [key in TextSizes]: number } = {
    xxl: 42,
    xl: 32,
    l: 24,
    m: 18,
    s: 16,
    xs: 14,
    xxs: 12,
};

const TextFontWeight: { [key in TextFontWeights]: number } = {
    bold: 500,
    regular: 400,
    light: 300,
};

export { TextFontSize, TextFontWeight };
