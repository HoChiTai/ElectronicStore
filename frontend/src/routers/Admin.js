import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DashBoard from "../screens/DashBoard";

function Admin() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<DashBoard />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Admin;
