import { css } from "styled-components";

const MARGIN_SAME_LENGTH = 1;
const MARGIN_X_Y_LENGTH = 2;
const MARGIN_TOP_RIGHT_BOTTOM_LENGTH = 3;
const MARGIN_TOP_RIGHT_BOTTOM_LEFT_LENGTH = 4;

const ALLOWED_VALUES = ["auto", "no", "xs", "sm", "md", "lg", "xl", "xxl"];

interface MarginSizes {
  // eslint-disable-next-line prettier/prettier
  mobile: Record<typeof ALLOWED_VALUES[number], string>;
  // eslint-disable-next-line prettier/prettier
  desktop: Record<typeof ALLOWED_VALUES[number], string>;
}

const DEFAULT_SIZES: MarginSizes = {
  mobile: {
    auto: "auto",
    no: "0",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
  },
  desktop: {
    auto: "auto",
    no: "0",
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px",
  },
};

const mixin = (value: string | null | undefined, sizes: MarginSizes = DEFAULT_SIZES) => {
  if (!value) {
    return "";
  }

  const values = value.split("|");

  const isEveryValueAllowed = values.every((marginValue) => ALLOWED_VALUES.includes(marginValue));

  if (!isEveryValueAllowed) {
    throw new TypeError(`Invalid margin value. Every value should be one of following: ${ALLOWED_VALUES.join(", ")}`);
  }

  const targetValues = values.map((marginValue) => ({
    mobile: sizes.mobile[marginValue],
    desktop: sizes.desktop[marginValue],
  }));

  if (values.length < MARGIN_SAME_LENGTH) {
    return css``;
  }

  if (values.length === MARGIN_SAME_LENGTH) {
    const [margin] = targetValues;

    return css`
      margin: ${margin.mobile};

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        margin: ${margin.desktop};
      }
    `;
  }

  if (values.length === MARGIN_X_Y_LENGTH) {
    const [marginX, marginY] = targetValues;

    return css`
      margin: ${marginX.mobile} ${marginY.mobile};

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        margin: ${marginX.desktop} ${marginY.desktop};
      }
    `;
  }

  if (values.length === MARGIN_TOP_RIGHT_BOTTOM_LENGTH) {
    const [marginTop, marginX, marginBottom] = targetValues;

    return css`
      margin: ${marginTop.mobile} ${marginX.mobile} ${marginBottom.mobile};

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        margin: ${marginTop.desktop} ${marginX.desktop} ${marginBottom.desktop};
      }
    `;
  }

  if (values.length === MARGIN_TOP_RIGHT_BOTTOM_LEFT_LENGTH) {
    const [marginTop, marginRight, marginBottom, marginLeft] = targetValues;

    return css`
      margin: ${marginTop.mobile} ${marginRight.mobile} ${marginBottom.mobile} ${marginLeft.mobile};

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        margin: ${marginTop.desktop} ${marginRight.desktop} ${marginBottom.desktop} ${marginLeft.desktop};
      }
    `;
  }

  if (values.length > MARGIN_TOP_RIGHT_BOTTOM_LEFT_LENGTH) {
    throw new Error("Too many values for margin");
  }

  throw new Error("Unexpected error");
};

export default mixin;
