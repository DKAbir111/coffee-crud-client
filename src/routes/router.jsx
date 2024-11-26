import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../components/Error";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <HomeLayout />

            }
        ]
    },
]);
export default router;