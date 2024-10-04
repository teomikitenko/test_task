import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { store } from "./app/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <StrictMode> */}
      <App />
   {/*  </StrictMode> */}
  </Provider>
);
