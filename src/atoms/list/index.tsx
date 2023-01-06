import React, { useContext } from "react";
import styled from "styled-components";
import { isEmpty } from "bme-utils";
import Item from "./item";
import { ListType } from "./types";
import Text from "../text";
import Box from "../box";
import { paddings } from "../../mixins";
import { StyledComponent } from "../../types/styled-component";
import ThemeProviderContext from "../../components/theme-provider/context";

const StyledListWrapper = styled.div`
  width: 100%;
`;

const StyledUl = styled.ul<StyledComponent>`
  width: 100%;
  ${({ bmeTheme }) => paddings("xs|xs", bmeTheme)};
  background: ${({ bmeTheme }) => bmeTheme.colors.gray6};
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
`;

// @TODO: Too tired to thing about that right now
// eslint-disable-next-line react/prop-types
const Component: ListType = ({ label, children, emptyMessage }) => {
  const { theme } = useContext(ThemeProviderContext);

  const isEmptyList =
    isEmpty(React.Children.count(children)) ||
    // eslint-disable-next-line react/prop-types
    (Array.isArray(children) && children.every((child) => isEmpty(child) || child === false));

  return (
    <StyledListWrapper>
      {label && (
        <Box padding="no|md">
          <Text variant="Caption1" color="gray">
            {label}
          </Text>
        </Box>
      )}
      <StyledUl bmeTheme={theme}>
        {!isEmptyList ? (
          children
        ) : (
          <Box alignX="center" width="100%" padding="md|no">
            <Text align="center">{emptyMessage}</Text>
          </Box>
        )}
      </StyledUl>
    </StyledListWrapper>
  );
};

Component.Item = Item;

export default Component;
