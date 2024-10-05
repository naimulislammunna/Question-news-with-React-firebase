import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navber from "../Components/Navber/Navber";

const Root = () => {
    return (
        <>
            <Header />
            <Navber />
            <Outlet />
        </>
    );
};

export default Root;