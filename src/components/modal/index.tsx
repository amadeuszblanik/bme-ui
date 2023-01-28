import React from "react";
import styled from "styled-components";
import { ModalProps, StyledModalWrapperProps } from "./types";
import Box from "../../atoms/box";
import { toRgba } from "../../utils";
import { animations } from "../../mixins";
import Icon from "../../atoms/icon";
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
  background: ${({ theme }) => toRgba(theme.colors.backgroundSecondary, BACKGROUND_TRANSPARENCY)};
  backdrop-filter: blur(4px);
`;

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: none;
  border-radius: ${({ theme }) => theme.radius}px;
  outline: none;
  cursor: pointer;
  appearance: none;
  ${animations(["top", "border-left", "border-bottom", "color", "background"])};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.light};
    background: ${({ theme }) => theme.colors.blue};
  }
`;

const Modal: React.FC<ModalProps> = ({ children, position, onClose }) => {
  const ref = useClickOutside<HTMLDivElement>(() => {
    if (onClose) {
      onClose();
    }
  });

  return (
    <StyledModalWrapper position={position || "fixed"}>
      <Box margin="sm">
        <Box
          innerRef={ref}
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
            <StyledModalCloseButton onClick={onClose} type="button">
              <Icon name="close" />
            </StyledModalCloseButton>
          )}
          {children}
        </Box>
      </Box>
    </StyledModalWrapper>
  );
};

export default Modal;
