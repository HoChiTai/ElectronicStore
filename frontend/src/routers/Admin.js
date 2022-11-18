import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DashBoard from "../screens/DashBoard";
import AdminHome from "../components/AdminHome";
import AdminOrder from "../components/AdminOrders";
import AdminProducts from "../components/AdminProducts";
import AdminProductForm from "../components/AdminProductForm";

function Admin() {
    return (
        <BrowserRouter>
            <DashBoard>
                <Routes>
                    <Route path="/admin/" element={<AdminHome />}></Route>
                    <Route path="/admin/home" element={<AdminHome />}></Route>
                    <Route
                        path="/admin/orders"
                        element={<AdminOrder />}></Route>
                    <Route
                        path="/admin/products"
                        element={<AdminProducts />}></Route>
                    <Route
                        path="/admin/products/create"
                        element={<AdminProductForm />}></Route>
                    <Route
                        path="/admin/products/update/:id"
                        element="abc"></Route>
                </Routes>
            </DashBoard>
        </BrowserRouter>
    );
}

export default Admin;
