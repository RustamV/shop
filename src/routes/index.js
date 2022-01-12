import { Routes, Route } from "react-router-dom";
import { Cart, Shop } from "../components";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Shop />} />
        </Routes>
    );
};

export default AppRoutes;
