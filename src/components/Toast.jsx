import { useEffect, useState } from "react";
import ToastRenderer from "./ToastRenderer";

function Toast({
  id,
  message,
  type,
  title,
  duration,
  variant = "default",
  removeToast,
}) {
  const [closing, setClosing] = useState(false);
  const [progress, setProgress] = useState(100);

  function handleClose() {
    setClosing(true);

    setTimeout(() => {
      removeToast(id);
    }, 300);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    // <div className={`toast ${type} ${closing ? "closing" : ""}`}>
    //   <div className="content">
    //     <span>{message}</span>

    //     <button onClick={handleClose}>×</button>
    //   </div>

    //   <div
    //     className="progress"
    //     style={{
    //       animationDuration: `${duration}ms`,
    //     }}
    //   />
    // </div>
    <div className="toast-wrapper">
      <ToastRenderer
        message={message}
        title={title}
        type={type}
        variant={variant}
        handleClose={handleClose}
      />
    </div>
  );


    
  
}

export default Toast;
