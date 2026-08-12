let listeners = [];

export function subscribe(listener) {
  listeners.push(listener);

  return () => {
    listeners = listeners.filter((item) => item !== listener);
  };
}

export function emit(toast) {
  listeners.forEach((listener) => {
    listener(toast);
  });
}

export const toast = {
  success(message, options = {}) {
    emit({
      title: options.title,
      type: "success",
      message,
      duration: options.duration || 3000,
      variant: options.variant || "default",
      position: options.position,
    });
  },

  error(message, options = {}) {
    emit({
      title: options.title,
      type: "error",
      message,
      duration: options.duration || 3000,
      variant: options.variant || "default",
      position: options.position,
    });
  },

  warning(message, options = {}) {
    emit({
      title: options.title,
      type: "warning",
      message,
      duration: options.duration || 3000,
      variant: options.variant || "default",
      position: options.position,
    });
  },

  info(message, options = {}) {
    emit({
      title: options.title,
      type: "info",
      message,
      duration: options.duration || 3000,
      variant: options.variant || "default",
      position: options.position ,
    });
  },
};
