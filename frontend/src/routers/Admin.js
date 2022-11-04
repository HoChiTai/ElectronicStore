import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DashBoard from "../screens/DashBoard";
import AdminHome from "../components/AdminHome";

function Admin() {
    return (
        <BrowserRouter>
            <DashBoard>
                <Routes>
                    <Route path="/admin/" element={<AdminHome />}></Route>
                    <Route path="/admin/Home" element={<AdminHome />}></Route>
                </Routes>
            </DashBoard>
        </BrowserRouter>
    );
}

export default Admin;
