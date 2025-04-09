import { createBrowserRouter,  } from "react-router-dom";
import Auth from "@pages/auth";
import Home from "@pages/home";
import routes from "@app/routes.json";

const router = createBrowserRouter([
    {
        path: routes.Index,
        element: <Home />
    },
    {
        path: routes.Home,
        element: <Home />
    }
]);

export {
    router
}