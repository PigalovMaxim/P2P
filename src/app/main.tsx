import { createRoot } from "react-dom/client";
import { router } from './routes';
import { Provider } from "react-redux";
import { store } from "@store/store.ts";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
);
