# Mercy Toast Pro

A modern React toast notification library with beautiful UI variants, multiple positions, titles, configurable durations, and automatic CSS injection.

> Lightweight • Customizable • Zero CSS setup • React 19+ compatible

---

## Features

* 🎨 **6 Beautiful UI Variants**

  * Default
  * Glass
  * Card
  * Gradient
  * Minimal
  * Neon
* 📍 **6 Toast Positions**
* 📝 Optional toast titles
* ⏱️ Custom duration
* 📚 Automatic toast stacking
* 🎯 Simple API
* ⚡ CSS included automatically
* 🪶 Lightweight & reusable

---

# Installation

```bash
npm install mercy-toast-pro
```

No CSS import required.

---

# Quick Start

Wrap your application with `ToastProvider`.

```jsx
import { ToastProvider, toast } from "mercy-toast-pro";

function App() {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
}
```

Show a toast anywhere:

```jsx
import { toast } from "mercy-toast-pro";

toast.success("Profile updated successfully!");
```

---

# Basic Examples

## Success Toast

```jsx
toast.success("Saved successfully!");
```

## Error Toast

```jsx
toast.error("Something went wrong!");
```

## Warning Toast

```jsx
toast.warning("Please check your input!");
```

## Info Toast

```jsx
toast.info("New update available!");
```

---

# Available Variants

Choose a visual style using the `variant` option.

| Variant    | Style                      |
| ---------- | -------------------------- |
| `default`  | Clean colored notification |
| `glass`    | Frosted glass effect       |
| `card`     | Elevated card with shadow  |
| `gradient` | Modern colorful gradient   |
| `minimal`  | Minimal flat design        |
| `neon`     | Glowing cyberpunk style    |

## Default

```jsx
toast.success("Payment successful!", {
  variant: "default",
});
```

## Glass

```jsx
toast.info("Welcome back!", {
  variant: "glass",
});
```

## Card

```jsx
toast.error("Server unavailable", {
  variant: "card",
});
```

## Gradient

```jsx
toast.success("Profile updated!", {
  variant: "gradient",
});
```

## Minimal

```jsx
toast.info("Draft saved", {
  variant: "minimal",
});
```

## Neon

```jsx
toast.warning("Low battery", {
  variant: "neon",
});
```

---

# Toast Types

Toast type controls the color and meaning of the notification.

| Type      | Color  |
| --------- | ------ |
| `success` | Green  |
| `error`   | Red    |
| `warning` | Orange |
| `info`    | Blue   |

Example:

```jsx
toast.success("Order placed!");
toast.error("Payment failed!");
toast.warning("Storage almost full!");
toast.info("Version 2.0 released!");
```

---

# Positions

Display notifications anywhere on the screen.

| Position        | Description                  |
| --------------- | ---------------------------- |
| `top-right`     | Top right corner *(default)* |
| `top-left`      | Top left corner              |
| `top-center`    | Top center                   |
| `bottom-right`  | Bottom right corner          |
| `bottom-left`   | Bottom left corner           |
| `bottom-center` | Bottom center                |

Example:

```jsx
toast.success("Downloaded!", {
  position: "bottom-left",
});
```

---

# Toast Options

Customize every toast.

```jsx
toast.success("Profile updated!", {
  title: "Success",
  variant: "glass",
  position: "bottom-right",
  duration: 5000,
});
```

| Option     | Type     | Default     | Description          |
| ---------- | -------- | ----------- | -------------------- |
| `title`    | `string` | `undefined` | Optional heading     |
| `variant`  | `string` | `default`   | UI design            |
| `position` | `string` | `top-right` | Screen location      |
| `duration` | `number` | `3000`      | Auto close time (ms) |

---

# Provider

Wrap your app once.

```jsx
import { ToastProvider } from "mercy-toast-pro";

function App() {
  return (
    <ToastProvider position="top-right">
      <MainApp />
    </ToastProvider>
  );
}
```

### Provider Props

| Prop       | Default     | Description                     |
| ---------- | ----------- | ------------------------------- |
| `position` | `top-right` | Default position for all toasts |

Individual toasts can override the provider position.

```jsx
toast.success("Custom position!", {
  position: "bottom-center",
});
```

---

# Complete Example

```jsx
import { ToastProvider, toast } from "mercy-toast-pro";

function Dashboard() {
  return (
    <>
      <button
        onClick={() =>
          toast.success("Profile saved!", {
            title: "Success",
            variant: "glass",
          })
        }
      >
        Save
      </button>

      <button
        onClick={() =>
          toast.error("Network error", {
            title: "Error",
            variant: "card",
          })
        }
      >
        Error
      </button>

      <button
        onClick={() =>
          toast.warning("Low storage", {
            variant: "neon",
          })
        }
      >
        Warning
      </button>

      <button
        onClick={() =>
          toast.info("Update available", {
            variant: "gradient",
            position: "bottom-left",
          })
        }
      >
        Info
      </button>
    </>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <Dashboard />
    </ToastProvider>
  );
}
```

---

# API Reference

## `toast.success(message, options)`

Displays a success notification.

```jsx
toast.success("Saved!");
```

---

## `toast.error(message, options)`

Displays an error notification.

```jsx
toast.error("Failed!");
```

---

## `toast.warning(message, options)`

Displays a warning notification.

```jsx
toast.warning("Be careful!");
```

---

## `toast.info(message, options)`

Displays an information notification.

```jsx
toast.info("Welcome!");
```

---

# Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# License

MIT © Mercy Arulappan
