import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Google Analytics page tracking for React routes
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', 'G-RSMM1JVGWS', {
      page_path: location.pathname + location.hash,
    });
  }, [location]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnalyticsTracker />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);