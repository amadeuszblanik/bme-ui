import { Sizes } from '../Theme/Theme';

const SIZES_IN_PX: { [key in Sizes]: number } = {
    xxl: 42,
    xl: 32,
    l: 24,
    m: 16,
    s: 8,
    xs: 4,
    xxs: 2,
    none: 0,
};

const sizeToPx = (size: Sizes): number => SIZES_IN_PX[size];

export default sizeToPx;
