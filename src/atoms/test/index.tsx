import React, { useContext } from "react";
import styled from "styled-components";
import { StyledTestProps, TestProps } from "./types";
import { BmeThemeProviderContextType } from "../../components/theme-provider/types";
import ThemeProviderContext from "../../components/theme-provider/context";

const StyledTest = styled.div<StyledTestProps>`
  background: ${({ bmeTheme, variant }) => bmeTheme.colors[variant]};
`;

const Test: React.FC<TestProps> = ({ variant }) => {
  const { theme } = useContext<BmeThemeProviderContextType>(ThemeProviderContext);

  return (
    <StyledTest bmeTheme={theme} variant={variant}>
      Test
    </StyledTest>
  );
};

export default Test;
