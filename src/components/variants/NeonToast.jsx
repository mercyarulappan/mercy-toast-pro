import React from "react";
import ToastIcon from "../ToastIcon";
function NeonToast({ message, type, handleClose,title }) {
  return (
    <div className={`toast neon ${type}`}>
      <ToastIcon type={type} />
      <div className="toast-content">
        {title && <strong className="toast-title">{title}</strong>}

        <span className="toast-message">{message}</span>
      </div>

      <button onClick={handleClose}>×</button>
    </div>
  );
}

export default NeonToast;