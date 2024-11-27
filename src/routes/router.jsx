import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../components/Error";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffee from "../components/AddCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <HomeLayout />,
                loader: async () => await fetch('http://localhost:5001/coffees'),
            },
            {
                path: '/addcoffee',
                element: <AddCoffee />
            }
        ]
    },
]);
export default router;