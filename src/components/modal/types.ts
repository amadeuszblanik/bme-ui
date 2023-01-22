import React from "react";

export interface ModalProps {
  children: React.ReactNode;
  position?: "absolute" | "fixed";
  onClose?: () => void;
}

export interface StyledModalWrapperProps {
  position: "absolute" | "fixed";
}
