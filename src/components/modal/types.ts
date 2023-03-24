import React from "react";

export interface ModalProps {
  title?: string;
  position?: "absolute" | "fixed";
  onClose?: () => void;
  children: React.ReactNode;
}

export interface StyledModalWrapperProps {
  position: "absolute" | "fixed";
}
