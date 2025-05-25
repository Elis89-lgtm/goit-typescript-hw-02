import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

{
  /* <ReactDOM className="createRoot"></ReactDOM>(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
}
