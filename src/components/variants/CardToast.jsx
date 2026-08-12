import ToastIcon from "../ToastIcon";

function CardToast({ message,title, type, handleClose }) {

  return (
    <div className={`toast card ${type}`}>
      <div className="card-header">
        <div className="card-title-wrapper">
          <ToastIcon type={type} /> 
          <span className="card-title">{title || type}</span>
        </div>

        <button className="card-close" onClick={handleClose}>
          ×
        </button>
      </div>

      <div className="card-message">{message}</div>
    </div>
  );
}

export default CardToast;
