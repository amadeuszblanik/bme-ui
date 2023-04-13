import { ChangeEvent, forwardRef, useEffect, useState } from "react";
import { InputNumberProps } from "./types";
import { VALUES, VARIANT } from "./settings";
import { StyledInput } from "./styled";

const Input = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    { name, value, size, inputMode, pattern, onChange, variant, width, minWidth, maxWidth, disabled, ...props },
    ref,
  ) => {
    const [shadowValue, setShadowValue] = useState(String(value || ""));

    useEffect(() => {
      setShadowValue(String(value || ""));
    }, [value]);

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

    const stringToNumber = (valueAsString: string) => Number(valueAsString.replace(/,/g, "."));

    const handleChange = ({ target: { value: inputValue } }: ChangeEvent<HTMLInputElement>) => {
      if (pattern) {
        if (!new RegExp(pattern).test(inputValue)) {
          onChange?.(stringToNumber(shadowValue));

          return;
        }
      }

      setShadowValue(inputValue);
      onChange?.(stringToNumber(inputValue));
    };

    return (
      <StyledInput
        ref={ref}
        {...props}
        value={shadowValue}
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
        type="text"
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        formNoValidate
      />
    );
  },
);

Input.displayName = "BmeInputDate";

Input.defaultProps = {
  size: "medium",
  inputMode: "numeric",
  pattern: "^-?\\d+([.,]\\d*)?$",
};

export default Input;
