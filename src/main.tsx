import React from "react";
import ReactDOM from "react-dom/client";

import GlobalContextProvider from "./contexts/global-context.tsx";
import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
);
