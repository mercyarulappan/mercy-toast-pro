import ToastIcon from "../ToastIcon";

function GradientToast({ message, title, type, handleClose }) {
  return (
    <div className={`toast gradient ${type}`}>
      <ToastIcon type={type} />

      <div className="toast-content">
        {title && <strong className="toast-title">{title}</strong>}

        <span className="toast-message">{message}</span>
      </div>

      <button onClick={handleClose}>×</button>
    </div>
  );
}

export default GradientToast;
