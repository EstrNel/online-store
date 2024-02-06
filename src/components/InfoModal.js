// Modal screen to show shipping info
import React from "react";

import Button from "react-bootstrap/Button";

const MODAL_STYLES = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "700px",
  height: "200px",
  padding: "20px",
  border: "1px",
  zIndex: "1000",
  transform: "translate(-50%, -50%)",
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <div style={MODAL_STYLES}>
      {children}
      <br />
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}
