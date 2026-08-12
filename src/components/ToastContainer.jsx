import React from 'react'
import Toast from './Toast'


const positions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];
function ToastContainer({ toasts, removeToast, position = "top-right" }) {
  return (
    <>
      {positions.map((currentPosition) => {
        const positionToasts = toasts.filter(
          (toast) => (toast.position || position) === currentPosition,
        );

        if (positionToasts.length === 0) {
          return null;
        }

        return (
          <div
            key={currentPosition}
            className={`toast-container ${currentPosition}`}
          >
            {positionToasts.map((toast) => (
              <Toast key={toast.id} {...toast} removeToast={removeToast} />
            ))}
          </div>
        );
      })}
    </>
  );
}

export default ToastContainer