import React from "react";
import styled from "styled-components";
import {BMEBox, BMEText} from "../../index";
import {NavComponentProps, NavItemComponentProps, NavSubcomponents} from "./Nav.types";
import {spacing, transition} from "../../Mixins";

const StyledNavWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 80vw;
  overflow-x: scroll;
`;

const StyledNav = styled(BMEBox)`
  min-width: max-content;
  white-space: nowrap;
`

const StyledText = styled(BMEText)<NavItemComponentProps>`
  cursor: pointer;
  opacity: ${({ active }) => active ? '1' : '.66'};
  ${transition(["opacity"], 350)}
  
  &:active, &:hover {
    opacity: 1;
  }
`

const StyledAccent = styled.span<NavItemComponentProps>`
  ${spacing('margin', { x: { right: "xxs" } })}
  background: ${({ active, theme }) => active ? `linear-gradient(45deg, ${theme.bme.palette.primary}, ${theme.bme.palette.secondary}, ${theme.bme.palette.tertiary})` : 'var(--bme-colour-texts)'};
  ${({ active }) => active ? '-webkit-background-clip: text;' : ''}
  ${({ active }) => active ? '-webkit-text-fill-color: transparent;' : ''}
  opacity: ${({ active }) => !active ? '0.82' : '1'};
  ${transition(["opacity"], 350)}
  font-style: italic;
`;

const NavItem: React.FunctionComponent<NavItemComponentProps> = ({ children, active }) => (
  <BMEBox padding={{ x: "s" }}>
    <StyledText fontFamily="mono" italic active={active}>
      <StyledAccent active={active}>#</StyledAccent>{children}
    </StyledText>
  </BMEBox>
)

const Nav: React.FunctionComponent<NavComponentProps> & NavSubcomponents = ({ children, alignX }) => (
  <StyledNavWrapper>
    <StyledNav width="full" alignX={alignX} margin={{ y: "m" }}>
      {children}
    </StyledNav>
  </StyledNavWrapper>
);

Nav.defaultProps = {
  alignX: "justify",
}

Nav.Item = NavItem;

export default Nav;
