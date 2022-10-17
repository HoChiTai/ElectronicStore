import { BrowserRouter, Route, Routes } from "react-router-dom";

import CateScreen from "./screens/CateScreen";
import HomeScreen from "./screens/HomeScreen";

import { useState } from "react";

import CartScreen from "./screens/CartScreen";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetailScreen from "./screens/ProductDetailScreen";

import LoginScreen from "./screens/LoginScreen";

import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserSettingsScreen from "./screens/UserSettingsScreen";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Container fluid>
                    <Routes>
                        <Route path="/" element={<HomeScreen />}></Route>
                        <Route path="/cate" element={<CateScreen />}></Route>
                        <Route path="/cart" element={<CartScreen />}></Route>
                        <Route
                            path="/product/:id"
                            element={<ProductDetailScreen />}></Route>
                        <Route
                            path="/shipping"
                            element={<ShippingAddressScreen />}></Route>
                        <Route
                            path="/payment"
                            element={<PaymentMethodScreen />}></Route>
                        <Route
                            path="/placeorder"
                            element={<PlaceOrderScreen />}></Route>
                        {/* <Route path="/order" element={<OrderScreen />}></Route> */}
                        <Route path="/login" element={<LoginScreen />}></Route>
                        <Route
                            path="/user"
                            element={<UserSettingsScreen />}></Route>
                    </Routes>
                </Container>
            </main>
            <Footer />
            {/* <Routes>
                <Route path="/login" element={<LoginScreen />}></Route>
            </Routes> */}
        </BrowserRouter>
    );
}

export default App;
