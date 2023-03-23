import { ChangeEvent, forwardRef } from "react";
import { firstElement } from "bme-utils";
import { InputDateProps } from "./types";
import { VALUES, VARIANT } from "./settings";
import { StyledInput } from "./styled";

const TIME_POSITION = 1;

const Input = forwardRef<HTMLInputElement, InputDateProps>(
  ({ name, value, type, size, onChange, variant, width, minWidth, maxWidth, disabled, ...props }, ref) => {
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

    const dateToString = (date: Date | string): string | undefined => {
      const dateObject = new Date(date);

      if (isNaN(dateObject.getTime())) {
        return date.toString();
      }

      switch (type) {
        case "datetime-local":
          return firstElement(dateObject.toISOString().split(".")) || undefined;

        case "time":
          return firstElement(dateObject.toISOString().split("T")[TIME_POSITION].split(".")) || undefined;

        default:
          return firstElement(dateObject.toISOString().split("T")) || undefined;
      }
    };

    const inputValue = (): string | undefined => {
      if (!value) {
        return undefined;
      }

      return dateToString(value);
    };

    const handleChange = ({ target: { value: eventValue } }: ChangeEvent<HTMLInputElement>) => {
      onChange?.(eventValue);
    };

    return (
      <StyledInput
        ref={ref}
        {...props}
        value={inputValue()}
        onChange={handleChange}
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
