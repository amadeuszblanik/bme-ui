import React from "react";
import { StyledComponent } from "../../types/styled-component";

export interface ModalProps {
  children: React.ReactNode;
  position?: "absolute" | "fixed";
  onClose?: () => void;
}

export interface StyledModalWrapperProps extends StyledComponent {
  position: "absolute" | "fixed";
}
