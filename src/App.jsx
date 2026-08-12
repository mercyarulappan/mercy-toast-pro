import React from "react";
import { ToastProvider, toast } from "./index.js";

function Demo() {
  return (
    <div>
      <button
        onClick={() =>
          toast.success("Saved successfully!", {
            variant: "minimal",
            position: "bottom-right",
            title: "Successsss",
          })
        }
      >
        Success
      </button>

      <button
        onClick={() =>
          toast.error("Something went wrong!", {
            variant: "gradient",
            title: "Successsss",
          })
        }
      >
        Error
      </button>

      <button
        onClick={() =>
          toast.warning("Be careful!", {
            variant: "neon",
            title: "Successsss",
          })
        }
      >
        Warning
      </button>

      <button
        onClick={() =>
          toast.info("New information!", {
            variant: "glass",
            title: "Successsss",
          })
        }
      >
        Info
      </button>
    </div>
  );
}

function App() {
  return (
    <ToastProvider position="top-right">
      <Demo />
    </ToastProvider>
  );
}

export default App;
