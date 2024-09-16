import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SearchProvider } from "./context/context"; // Adjust the path if necessary

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SearchProvider>
    <App />
  </SearchProvider>
);
