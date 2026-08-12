function ToastIcon({ type }) {
  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ⓘ",
  };

  return <span className={`toast-icon ${type}`}>{icons[type]}</span>;
}

export default ToastIcon;
