import { createContext, useContext, useEffect, useState } from "react";

import ToastContainer from "../components/ToastContainer";

import { subscribe } from "../toast";

const ToastContext = createContext();

export function ToastProvider({ children, position = "top-right", maxToasts = 5 }) {
  const [toasts, setToasts] = useState([]);

  function removeToast(id) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  useEffect(() => {
    const unsubscribe = subscribe((toast) => {
      const id = crypto.randomUUID();

      setToasts((prev) => {
        const newToast = {
          ...toast,
          id,
        };

        return [...prev, newToast].slice(-maxToasts);
      });
    });

    return unsubscribe;
  }, [maxToasts]);

  return (
    // <ToastContext.Provider value={{}}>
    //   {children}

    //   <ToastContainer toasts={toasts} />
    // </ToastContext.Provider>

    <>
      {children}

      <ToastContainer
        toasts={toasts}
        removeToast={removeToast}
        position={position}
      />
    </>
  );
}

export function useToast() {
  return useContext(ToastContext);
}