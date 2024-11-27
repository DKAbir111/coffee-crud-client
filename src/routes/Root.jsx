import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


export default function Root() {
    return (
        <div>
            <Header />
            <ToastContainer />
            <Outlet />
            <Footer />
        </div>
    )
}
