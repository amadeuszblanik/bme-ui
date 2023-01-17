import React, { useContext, useState } from "react";
import { isEmpty } from "bme-utils";
import { SelectProps } from "./types";
import {
  StyledClear,
  StyledFormControl,
  StyledFormControlInput,
  StyledHint,
  StyledLabel,
  StyledSelect,
} from "./input/styled";
import { ICON_SIZE, SINGLE_VALUE_INDEX, VALUES, VARIANT } from "./settings";
import Drawer from "./drawer";
import { ThemeColours } from "../../settings/theme";
import { BmeIcon } from "../index";
import ThemeProviderContext from "../../components/theme-provider/context";
import { useClickOutside } from "../../hooks";

const Select: React.FC<SelectProps> = ({
  name,
  value,
  label,
  emptyLabel,
  onValue,
  list,
  hint,
  error,
  valid,
  size,
  width,
  minWidth,
  maxWidth,
  disabled,
  variant,
  multiple,
  native,
  ...props
}) => {
  size = size ?? "medium";

  const selectedValues = value ? (Array.isArray(value) ? value : [value]) : [];

  const { theme } = useContext(ThemeProviderContext);

  const variantDynamic = disabled ? "gray" : error ? "red" : valid ? "green" : variant ?? VARIANT;
  const hintVariant: ThemeColours = error ? "red" : valid ? "green" : "gray";
  const hintMessage = error || valid || hint;

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isSelected = !isEmpty(selectedValues);
  const isFilled = (isFocused || isSelected || !isEmpty(error) || !isEmpty(valid)) && !disabled;

  const ref = useClickOutside<HTMLDivElement>(() => setIsDrawerOpen(false));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (multiple) {
      const selectedOptions = Array.from(event.target.selectedOptions);
      const values = selectedOptions.map((option) => option.value);
      onValue(list.filter((item) => values.includes(item.key)));

      return;
    }

    // @TODO: Fix this
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onValue(list.find((item) => item.key === event.target.value) || null);
  };

  const handleDrawerClick = (key: string) => {
    if (multiple) {
      const itemToToggle = list.find((item) => item.key === key);

      if (!itemToToggle) {
        return;
      }

      const isItemSelected = selectedValues.map((selectedValue) => selectedValue.key).includes(itemToToggle.key);
      const newValues = isItemSelected
        ? selectedValues.filter((item) => item.key !== key)
        : [...selectedValues, itemToToggle];

      onValue(newValues);
    }
  };

  const handleClear = () => {
    if (multiple) {
      onValue([]);

      return;
    }

    // @TODO: Fix this
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onValue(null);
  };

  return (
    <div ref={ref}>
      <StyledFormControl width={width} minWidth={minWidth} maxWidth={maxWidth}>
        <StyledFormControlInput>
          <StyledLabel
            htmlFor={name}
            isFilled={isFilled}
            variant={variantDynamic}
            paddingX={paddingX}
            fontSize={fontSize}
            bmeTheme={theme}
          >
            {label}
          </StyledLabel>
          {native ? (
            <StyledSelect
              id={name}
              name={name}
              fontSize={fontSize}
              isFilled={isFilled}
              paddingX={paddingX}
              paddingY={paddingY}
              variant={variantDynamic}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={multiple ? selectedValues.map(({ key }) => key) : selectedValues[SINGLE_VALUE_INDEX]?.key}
              defaultValue=""
              disabled={disabled}
              multiple={multiple}
              bmeTheme={theme}
              {...props}
            >
              <option disabled>{emptyLabel || ""}</option>
              {list.map(({ key, label: itemLabel }) => (
                <option key={key} value={key}>
                  {itemLabel}
                </option>
              ))}
            </StyledSelect>
          ) : (
            <StyledSelect
              as="button"
              id={name}
              name={name}
              fontSize={fontSize}
              isFilled={isFilled}
              paddingX={paddingX}
              paddingY={paddingY}
              variant={variantDynamic}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={multiple ? selectedValues.map(({ key }) => key) : selectedValues[SINGLE_VALUE_INDEX]?.key}
              disabled={disabled}
              bmeTheme={theme}
              type="button"
            >
              {selectedValues.map((selectedValue) => selectedValue.label).join(", ")}
              {multiple && ` (${selectedValues.length})`}
            </StyledSelect>
          )}
          {!disabled && (
            <StyledClear isFilled={isSelected} paddingX={paddingX} onClick={handleClear} bmeTheme={theme} type="button">
              <BmeIcon name="close-circle" size={ICON_SIZE} color={variantDynamic} />
            </StyledClear>
          )}
        </StyledFormControlInput>
        {!disabled && (
          <StyledHint variant={hintVariant} paddingX={paddingX} fontSize={fontSize} bmeTheme={theme}>
            {hintMessage}
          </StyledHint>
        )}
        {isDrawerOpen && !native && (
          <Drawer
            list={list}
            selected={selectedValues.map(({ key }) => key)}
            multiple={multiple || false}
            onClick={handleDrawerClick}
          />
        )}
      </StyledFormControl>
    </div>
  );
};

Select.defaultProps = {
  size: "medium",
};

export default Select;
