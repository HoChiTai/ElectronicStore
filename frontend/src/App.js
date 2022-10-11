import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CateScreen from './screens/CateScreen';
import HomeScreen from './screens/HomeScreen';

import { useState } from 'react';

import CartScreen from './screens/CartScreen';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetailScreen from './screens/ProductDetailScreen';
<<<<<<< HEAD
import LoginScreen from './screens/LoginScreen';
=======
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
>>>>>>> 6de1ba4be392d5cdccc9a154cccfa9f61fef4d3f

function App() {
	return (
		<BrowserRouter>
			{/* <Header /> */}
			<main>
<<<<<<< HEAD

				<Routes>
					<Route path="/" element={<HomeScreen />}></Route>
					<Route path="/cate" element={<CateScreen />}></Route>
					<Route path="/cart" element={<CartScreen />}></Route>
					<Route path="/detail" element={<ProductDetailScreen />}></Route>
					<Route path="/login" element={<LoginScreen />}></Route>
				</Routes>

=======
				<Container fluid>
					<Routes>
						<Route path="/" element={<HomeScreen />}></Route>
						<Route path="/cate" element={<CateScreen />}></Route>
						<Route path="/cart" element={<CartScreen />}></Route>
						<Route
							path="/product/:id"
							element={<ProductDetailScreen />}
						></Route>
						<Route path="/shipping" element={<ShippingAddressScreen />}></Route>
						<Route path="/payment" element={<PaymentMethodScreen />}></Route>
						<Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
						<Route path="/order" element={<OrderScreen />}></Route>
					</Routes>
				</Container>
>>>>>>> 6de1ba4be392d5cdccc9a154cccfa9f61fef4d3f
			</main>
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
