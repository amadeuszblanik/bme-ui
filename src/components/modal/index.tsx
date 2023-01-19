import React, { useContext } from "react";
import styled from "styled-components";
import { ModalProps, StyledModalWrapperProps } from "./types";
import ThemeProviderContext from "../theme-provider/context";
import Box from "../../atoms/box";
import { toRgba } from "../../utils";
import { animations } from "../../mixins";
import Icon from "../../atoms/icon";
import { StyledComponent } from "../../types/styled-component";
import { useClickOutside } from "../../hooks";

const BACKGROUND_TRANSPARENCY = 0.8;

const StyledModalWrapper = styled.div<StyledModalWrapperProps>`
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ bmeTheme }) => toRgba(bmeTheme.colors.backgroundSecondary, BACKGROUND_TRANSPARENCY)};
  backdrop-filter: blur(4px);
`;

const StyledModalCloseButton = styled.button<StyledComponent>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${({ bmeTheme }) => bmeTheme.colors.text};
  background: ${({ bmeTheme }) => bmeTheme.colors.backgroundSecondary};
  border: none;
  border-radius: ${({ bmeTheme }) => bmeTheme.radius}px;
  outline: none;
  cursor: pointer;
  appearance: none;
  ${animations(["top", "border-left", "border-bottom", "color", "background"])};

  &:hover,
  &:active {
    color: ${({ bmeTheme }) => bmeTheme.colors.light};
    background: ${({ bmeTheme }) => bmeTheme.colors.blue};
  }
`;

const Modal: React.FC<ModalProps> = ({ children, position, onClose }) => {
  const { theme } = useContext(ThemeProviderContext);

  const ref = useClickOutside<HTMLDivElement>(() => {
    if (onClose) {
      onClose();
    }
  });

  return (
    <StyledModalWrapper position={position || "fixed"} bmeTheme={theme}>
      <Box margin="sm">
        <div ref={ref}>
          <Box
            position="relative"
            direction="column"
            padding={onClose ? "md|md|sm" : "sm|md"}
            maxWidth="800px"
            maxHeight="80vh"
            background="background"
            border="gray6"
            rounded
          >
            {onClose && (
              <StyledModalCloseButton bmeTheme={theme} onClick={onClose}>
                <Icon name="close" />
              </StyledModalCloseButton>
            )}
            {children}
          </Box>
        </div>
      </Box>
    </StyledModalWrapper>
  );
};

export default Modal;
