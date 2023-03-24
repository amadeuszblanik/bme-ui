import React from "react";
import styled from "styled-components";
import { ModalProps, StyledModalWrapperProps } from "./types";
import Box from "../../atoms/box";
import { toRgba } from "../../utils";
import { animations } from "../../mixins";
import Icon from "../../atoms/icon";
import { useClickOutside } from "../../hooks";
import Text from "../../atoms/text";

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

const StyledModalTopbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
`;

const StyledModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 2px 2px 2px auto;
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

const Modal: React.FC<ModalProps> = ({ title, position, onClose, children }) => {
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
          maxWidth="800px"
          maxHeight="80vh"
          background="background"
          border="gray6"
          rounded
        >
          <StyledModalTopbar>
            {title && (
              <Box padding="xs|md">
                <Text variant="Headline" noBottomMargin>
                  {title}
                </Text>
              </Box>
            )}
            {onClose && (
              <StyledModalCloseButton onClick={onClose} type="button">
                <Icon name="close" />
              </StyledModalCloseButton>
            )}
          </StyledModalTopbar>
          <Box padding="sm|md">{children}</Box>
        </Box>
      </Box>
    </StyledModalWrapper>
  );
};

export default Modal;
