import React, { Children, useContext } from "react";
import styled from "styled-components";
import { ListItemProps, StyledListItemActionsProps, StyledListItemProps } from "./types";
import Icon from "../icon";
import { paddings } from "../../mixins";
import { StyledComponent } from "../../types/styled-component";
import ThemeProviderContext from "../../components/theme-provider/context";
import Button from "../button";

const TOUCH_STARTING_VALUE = 0;
const TOUCH_INDEX = 0;
const DRAG_REQUIRED = -10;
const INDEX_CORRECTION = 1;
const INDEX_FIRST_ELEMENT = 0;

const StyledLi = styled.li<StyledComponent>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  ${({ bmeTheme }) => paddings("xs|sm", bmeTheme)}
  overflow-x: hidden;
  border-bottom: 1px solid ${({ bmeTheme }) => bmeTheme.colors.gray5};

  &:last-child {
    border-bottom: none;
  }
`;

const StyledListItem = styled.div<StyledListItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  opacity: ${({ actionsVisible }) => (actionsVisible ? "0.66" : "1")};
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;

  *:nth-child(n + 2) {
    --color-text: ${({ bmeTheme }) => bmeTheme.colors.gray2};
  }

  :first-child {
    text-align: left;
  }

  :last-child {
    text-align: right;
  }
`;

const StyledItemIcon = styled.div<StyledComponent>`
  display: flex;
  ${({ bmeTheme }) => paddings("no|xs", bmeTheme)}
  transform: translateY(-1px);
`;

const StyledListItemActions = styled.div<StyledListItemActionsProps>`
  position: absolute;
  top: 0;
  left: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  background: ${({ bmeTheme }) => bmeTheme.colors.red};
  transform: ${({ visible }) => (visible ? "translateX(-100%)" : "translateX(0)")};
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  --bme-button-radius: 0;

  * {
    white-space: nowrap;
  }
`;

const Item: React.FC<ListItemProps> = ({ children, actions, onClick }) => {
  const { theme } = useContext(ThemeProviderContext);

  const [mousePositionY, setMousePositionY] = React.useState(TOUCH_STARTING_VALUE);
  const [actionVisible, setActionVisible] = React.useState(false);

  const handleTouchStart = (event: React.TouchEvent<HTMLLIElement>) => {
    setMousePositionY(event.touches[TOUCH_INDEX].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLLIElement>) => {
    const diff = mousePositionY - event.changedTouches[TOUCH_INDEX].clientX;

    if (diff > Math.abs(DRAG_REQUIRED)) {
      setActionVisible(true);
    }

    if (diff < DRAG_REQUIRED) {
      setActionVisible(false);
    }
  };

  const clonedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const isFirst = index === INDEX_FIRST_ELEMENT;
      const isLast = index === Children.count(children) - INDEX_CORRECTION;

      return React.cloneElement(child, {
        ...child.props,
        style: {
          ...child.props.style,
          marginLeft: isFirst ? "0" : "2px",
          marginRight: isLast ? "0" : "2px",
          textAlign: isFirst ? "left" : isLast ? "right" : "center",
        },
      });
    }

    return child;
  });

  return (
    <StyledLi
      onMouseEnter={() => setActionVisible(true)}
      onMouseLeave={() => setActionVisible(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      bmeTheme={theme}
    >
      <StyledListItem
        onClick={onClick}
        clickable={!!onClick}
        actionsVisible={!!actions && actionVisible}
        bmeTheme={theme}
      >
        {clonedChildren}
      </StyledListItem>
      {onClick && (
        <StyledItemIcon bmeTheme={theme}>
          <Icon name="chevron-forward" color="gray2" />
        </StyledItemIcon>
      )}
      {actions && (
        <StyledListItemActions visible={actionVisible} bmeTheme={theme}>
          {actions.map(({ children: actionChildren, ...actionProps }, index) => (
            <Button key={index} {...actionProps} size="small">
              {actionChildren}
            </Button>
          ))}
        </StyledListItemActions>
      )}
    </StyledLi>
  );
};

export default Item;
