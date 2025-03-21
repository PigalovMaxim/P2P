import { createBrowserRouter,  } from "react-router-dom";
import Auth from "@pages/auth";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth />
    }
]);

export {
    router
}