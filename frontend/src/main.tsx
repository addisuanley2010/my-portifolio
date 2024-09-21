import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { store } from "./store.ts";
import AppRoute from "./routes/AppRoute.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </Provider>
);
