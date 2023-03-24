import React from "react";
import styled from "styled-components";
import { isEmpty } from "bme-utils";
import Item from "./item";
import { ListType } from "./types";
import Text from "../text";
import Box from "../box";
import { margins } from "../../mixins";

const StyledListWrapper = styled.div`
  width: 100%;
`;

const StyledUl = styled.ul`
  width: 100%;
  ${margins("xs|no")};
  padding: 0;
  background: ${({ theme }) => theme.colors.gray6};
  border-radius: ${({ theme }) => theme.radius}px;
`;

// @TODO: Too tired to thing about that right now
// eslint-disable-next-line react/prop-types
const Component: ListType = ({ label, children, emptyMessage }) => {
  const isEmptyList =
    isEmpty(React.Children.count(children)) ||
    // eslint-disable-next-line react/prop-types
    (Array.isArray(children) && children.every((child) => isEmpty(child) || child === false));

  return (
    <StyledListWrapper>
      {label && (
        <Box padding="no|sm">
          <Text variant="Caption1" color="gray" noBottomMargin>
            {label}
          </Text>
        </Box>
      )}
      <StyledUl>
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
