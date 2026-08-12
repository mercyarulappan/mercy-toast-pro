import React from "react";
import ToastIcon from "../ToastIcon";

function DefaultToast({ message, type, handleClose,title }) {

  return (
    <div className={`toast default ${type}`}>
      <ToastIcon type={type} />
      <div className="toast-content">
        {title && <strong className="toast-title">{title}</strong>}
        <span className="toast-message">{message}</span>
      </div>

      <button onClick={handleClose}>×</button>
    </div>
  );
}

export default DefaultToast;