import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import CateScreen from './screens/CateScreen';
import HomeScreen from './screens/HomeScreen';
import shopData from './components/cate/shopData';
import { useState } from 'react';
import Footer from './components/footer/Footer';
import CartScreen from './screens/CartScreen';
import { Container } from 'react-bootstrap';

function App() {
	const { shopItems } = shopData;

	return (
		<BrowserRouter>
			<Header />
			<main>
				<Container>
					<Routes>
						<Route path="/" element={<HomeScreen />}></Route>
						<Route
							path="/cate"
							element={<CateScreen shopItems={shopItems} />}
						></Route>
						<Route path="/cart" element={<CartScreen />}></Route>
					</Routes>
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
