import { css } from "styled-components";

const PADDING_SAME_LENGTH = 1;
const PADDING_X_Y_LENGTH = 2;
const PADDING_TOP_RIGHT_BOTTOM_LENGTH = 3;
const PADDING_TOP_RIGHT_BOTTOM_LEFT_LENGTH = 4;

const ALLOWED_VALUES = ["auto", "no", "xs3", "xs2", "xs", "sm", "md", "lg", "xl", "xxl"];

interface PaddingSizes {
  // eslint-disable-next-line prettier/prettier
  mobile: Record<typeof ALLOWED_VALUES[number], string>;
  // eslint-disable-next-line prettier/prettier
  desktop: Record<typeof ALLOWED_VALUES[number], string>;
}

const DEFAULT_SIZES: PaddingSizes = {
  mobile: {
    auto: "auto",
    no: "0",
    xs3: "2px",
    xs2: "4px",
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px",
  },
  desktop: {
    auto: "auto",
    no: "0",
    xs3: "2px",
    xs2: "4px",
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px",
  },
};

const mixin = (value: string | null | undefined, sizes: PaddingSizes = DEFAULT_SIZES) => {
  if (!value) {
    return "";
  }

  const values = value.split("|");

  const isEveryValueAllowed = values.every((paddingValue) => ALLOWED_VALUES.includes(paddingValue));

  if (!isEveryValueAllowed) {
    throw new TypeError(`Invalid padding value. Every value should be one of following: ${ALLOWED_VALUES.join(", ")}`);
  }

  const targetValues = values.map((paddingValue) => ({
    mobile: sizes.mobile[paddingValue],
    desktop: sizes.desktop[paddingValue],
  }));

  if (values.length < PADDING_SAME_LENGTH) {
    return css``;
  }

  if (values.length === PADDING_SAME_LENGTH) {
    const [padding] = targetValues;

    return css`
      padding: ${padding.mobile};

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        padding: ${padding.desktop};
      }
    `;
  }

  if (values.length === PADDING_X_Y_LENGTH) {
    const [paddingX, paddingY] = targetValues;

    return css`
      padding: ${paddingX.mobile} ${paddingY.mobile};

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        padding: ${paddingX.desktop} ${paddingY.desktop};
      }
    `;
  }

  if (values.length === PADDING_TOP_RIGHT_BOTTOM_LENGTH) {
    const [paddingTop, paddingX, paddingBottom] = targetValues;

    return css`
      padding: ${paddingTop.mobile} ${paddingX.mobile} ${paddingBottom.mobile};

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        padding: ${paddingTop.desktop} ${paddingX.desktop} ${paddingBottom.desktop};
      }
    `;
  }

  if (values.length === PADDING_TOP_RIGHT_BOTTOM_LEFT_LENGTH) {
    const [paddingTop, paddingRight, paddingBottom, paddingLeft] = targetValues;

    return css`
      padding: ${paddingTop.mobile} ${paddingRight.mobile} ${paddingBottom.mobile} ${paddingLeft.mobile};

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        padding: ${paddingTop.desktop} ${paddingRight.desktop} ${paddingBottom.desktop} ${paddingLeft.desktop};
      }
    `;
  }

  if (values.length > PADDING_TOP_RIGHT_BOTTOM_LEFT_LENGTH) {
    throw new Error("Too many values for padding");
  }

  throw new Error("Unexpected error");
};

export default mixin;
