import { forwardRef } from "react";
import styled from "styled-components";
import { SelectComponent, SelectProps, StyledSelectProps } from "./types";
import Option from "./option";
import Group from "./group";
import { VALUES } from "./settings";

export const StyledSelect = styled.select<StyledSelectProps>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: ${({ width }) => width || "100%"};
  min-width: ${({ minWidth }) => minWidth || "240px"};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ paddingX, paddingY }) => `${paddingY.mobile}px ${paddingX.mobile}px`};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.radius}px;
  appearance: none;

  &:disabled {
    background: ${({ theme }) => theme.colors.gray5};
    border-color: ${({ theme }) => theme.colors.gray5};
    cursor: not-allowed;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ paddingX, paddingY }) => `${paddingY.desktop}px ${paddingX.desktop}px`};
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Select: SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  ({ size, variant, children, ...props }, ref) => {
    size = size ?? "medium";
    variant = variant ?? "blue";

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
      <StyledSelect ref={ref} paddingX={paddingX} paddingY={paddingY} fontSize={fontSize} variant={variant} {...props}>
        {children}
      </StyledSelect>
    );
  },
);

Select.displayName = "BmeSelect";
Select.Group = Group;
Select.Option = Option;

export default Select;
