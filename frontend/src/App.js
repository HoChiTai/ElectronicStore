import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CateScreen from './screens/CateScreen';
import HomeScreen from './screens/HomeScreen';

import { useState } from 'react';

import CartScreen from './screens/CartScreen';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomeScreen />}></Route>
					<Route path="/cate" element={<CateScreen />}></Route>
					<Route path="/cart" element={<CartScreen />}></Route>
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
