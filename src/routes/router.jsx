import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../components/Error";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetsils";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <HomeLayout />,
                loader: async () => await fetch('https://crud-coffee-server.onrender.com/coffees'),
            },
            {
                path: '/addcoffee',
                element: <AddCoffee />
            },
            {
                path: '/updatecoffee/:id',
                element: <UpdateCoffee />,
                loader: async ({ params }) => await fetch(`https://crud-coffee-server.onrender.com/coffee/${params.id}`)
            },
            {
                path: '/coffeedetails/:id',
                element: <CoffeeDetails />,
                loader: async ({ params }) => await fetch(`https://crud-coffee-server.onrender.com/coffee/${params.id}`)
            }
        ]
    },
]);
export default router;