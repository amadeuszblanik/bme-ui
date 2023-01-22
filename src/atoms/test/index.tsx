import React from "react";
import styled from "styled-components";
import { StyledTestProps, TestProps } from "./types";

const StyledTest = styled.div<StyledTestProps>`
  background: ${({ theme, variant }) => theme?.colors[variant] || "red"};
`;

const Test: React.FC<TestProps> = ({ variant }) => {
  return (
    <StyledTest variant={variant}>
      Test
    </StyledTest>
  );
};

export default Test;
