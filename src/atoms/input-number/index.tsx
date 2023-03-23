import { ChangeEvent, forwardRef } from "react";
import { InputDateProps } from "./types";
import { VALUES, VARIANT } from "./settings";
import { StyledInput } from "./styled";

const Input = forwardRef<HTMLInputElement, InputDateProps>(
  (
    { name, value, size, inputMode, pattern, onChange, variant, width, minWidth, maxWidth, disabled, ...props },
    ref,
  ) => {
    size = size ?? "medium";
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

    const handleChange = ({ target: { valueAsNumber } }: ChangeEvent<HTMLInputElement>) => {
      onChange?.(valueAsNumber);
    };

    return (
      <StyledInput
        ref={ref}
        {...props}
        value={value}
        inputMode={inputMode}
        pattern={pattern}
        onChange={handleChange}
        id={name}
        name={name}
        variant={variant}
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        disabled={disabled}
        type="number"
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
  inputMode: "numeric",
};

export default Input;
