import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/toast.css";
import "./styles/default.css";
import "./styles/glass.css";
import "./styles/neon.css";
import "./styles/card.css";
import App from './App.jsx'
import "./styles/minimal.css";
import "./styles/gradient.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
