import { forwardRef } from "react";
import { InputDateProps } from "./types";
import { VALUES, VARIANT } from "./settings";
import { StyledInput } from "./styled";

const Input = forwardRef<HTMLInputElement, InputDateProps>(
  ({ name, type, size, variant, width, minWidth, maxWidth, disabled, ...props }, ref) => {
    size = size ?? "medium";

    const inputType = type || "date";
    variant = variant || VARIANT;

    const paddingX = {
      mobile: VALUES.mobile[size].paddingX,
      desktop: VALUES.desktop[size].paddingX,
    };
    const paddingY = {
      mobile: VALUES.mobile[size].paddingY,
      desktop: VALUES.desktop[size].paddingY,
    };
    const fontSize = {
      mobile: VALUES.mobile[size].fontSize,
      desktop: VALUES.desktop[size].fontSize,
    };

    return (
      <StyledInput
        ref={ref}
        {...props}
        id={name}
        name={name}
        variant={variant}
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        disabled={disabled}
        type={inputType}
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
      />
    );
  },
);

Input.displayName = "BmeInputDate";

Input.defaultProps = {
  size: "medium",
};

export default Input;
