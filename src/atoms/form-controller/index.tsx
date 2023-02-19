import React from "react";
import styled from "styled-components";
import { FormControllerChildren, FormControllerProps, StyledLabelProps } from "./types";
import Box from "../box";
import Text from "../text";
import { ThemeColours } from "../../types";

const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
  font-size: 18px;
`;

const Component: React.FC<FormControllerProps> = ({
  name,
  label,
  hint,
  error,
  width,
  minWidth,
  maxWidth,
  disabled,
  variant,
  children,
  labelPosition,
}) => {
  variant = error ? "red" : disabled ? "gray" : variant;
  const hintVariant: ThemeColours = error ? "red" : "gray";
  const errorVariant: ThemeColours = error ? "red" : "gray";

  const cloneChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as FormControllerChildren, { id: name, name, variant, disabled });
    }

    return child;
  });

  const Label = (
    <StyledLabel htmlFor={name} variant={variant || "text"}>
      {label}
    </StyledLabel>
  );

  return (
    <Box direction="column" width={width} minWidth={minWidth} maxWidth={maxWidth} margin="no|no|md">
      {label && labelPosition === "top" && <Box margin="no|no|xs">{Label}</Box>}
      <Box alignY="center" alignX="space-between" width="100%">
        {label && labelPosition === "left" && Label} {cloneChildren} {label && labelPosition === "right" && Label}
      </Box>
      <Box alignX="space-between" width="100%" overflow="hidden">
        {error && (
          <Box margin={hint && "no|xs|no|no"}>
            <Text color={hintVariant}>{error}</Text>
          </Box>
        )}
        {hint && (
          <Box alignX="right" width={!error ? "100%" : undefined} margin={error && "no|no|no|xs"}>
            <Text color={errorVariant}>{hint}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

Component.displayName = "BmeFormController";

Component.defaultProps = {
  labelPosition: "top",
};

export default Component;
