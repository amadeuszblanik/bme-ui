import styled from "styled-components";
import {
  StyledSelectDrawerOptionProps,
  StyledSelectDrawerProps,
  StyledSelectDrawerSearchProps,
  StyledSelectProps,
  StyledSelectWrapperProps,
} from "./types";
import { animations, boxShadow, isDark } from "../../mixins";

export const StyledSelect = styled.select<StyledSelectProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "100%"};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  padding: ${({ paddingX, paddingY }) =>
    `${paddingY.mobile}px ${paddingX.mobile}px ${paddingY.mobile}px ${paddingX.mobile}px`};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray5 : theme.colors.text)};
  font-size: ${({ fontSize }) => fontSize.mobile}px;
  background: ${({ theme }) => theme.colors.gray5};
  border: ${({ theme }) => theme.colors.gray5} solid 2px;
  border-radius: ${({ theme }) => theme.radius}px;
  cursor: text;
  appearance: none;
  ${animations(["width", "min-width", "max-width", "background-color", "color", "padding", "font-size"])};

  &:not([disabled]) {
    &:active,
    &:focus {
      background: transparent;
      border: ${({ theme, variant, disabled }) => (disabled ? theme.colors.gray : theme.colors[variant])} solid 2px;
      outline: none;
    }
  }

  &:disabled,
  &[disabled] {
    background: ${({ theme }) => theme.colors.gray3} !important;
    border: ${({ theme }) => theme.colors.gray3} solid 2px;
    cursor: not-allowed;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ paddingX, paddingY }) =>
      `${paddingY.desktop}px ${paddingX.desktop}px ${paddingY.desktop}px ${paddingX.desktop}px`};
    font-size: ${({ fontSize }) => fontSize.desktop}px;
  }
`;

export const StyledSelectWrapper = styled.div<StyledSelectWrapperProps>`
  position: relative;
  width: ${({ width }) => width || "100%"};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;

export const StyledSelectDrawer = styled.div<StyledSelectDrawerProps>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "100%"};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  overflow-y: scroll;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme, variant }) => theme.colors[variant]};
  border-radius: ${({ theme }) => theme.radius}px;
  ${({ variant }) => boxShadow(variant, "2")}
`;

export const StyledSelectDrawerGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.gray5};
  }
`;

export const StyledSelectDrawerGroupLabel = styled.label`
  width: 100%;
  padding: 8px 16px;
  font-weight: bold;
  font-style: italic;
  text-align: left;
  border-top: 1px solid ${({ theme }) => theme.colors.gray3};
`;

export const StyledSelectDrawerOption = styled.button<StyledSelectDrawerOptionProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: none;
  cursor: pointer;
  appearance: none;
  ${animations(["color", "background-color"], "350ms")};

  &:not([disabled]) {
    &:hover {
      color: ${({ theme }) => (isDark(theme.colors.gray3) ? theme.colors.light : theme.colors.dark)};
      background: ${({ theme }) => theme.colors.gray3};
    }

    &:focus {
      color: ${({ theme, variant }) => (isDark(theme.colors[variant]) ? theme.colors.light : theme.colors.dark)};
      background: ${({ theme, variant }) => theme.colors[variant]};
      outline: none;
    }
  }

  &:disabled {
    position: relative;
    color: ${({ theme }) => theme.colors.gray2};
    cursor: not-allowed;
  }
`;

export const StyledSelectDrawerSearch = styled.input<StyledSelectDrawerSearchProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
  cursor: text;
  appearance: none;

  &:focus {
    border-bottom-color: ${({ theme, variant }) => theme.colors[variant]};
    outline: none;
  }
`;
