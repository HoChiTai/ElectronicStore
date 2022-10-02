import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import CateScreen from './screens/CateScreen';
import HomeScreen from './screens/HomeScreen';
import shopData from './components/cate/shopData';
import { useState } from 'react';
import Footer from './components/footer/Footer';

function App() {
	const { shopItems } = shopData;

	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomeScreen />}></Route>
					<Route
						path="/cate"
						element={<CateScreen shopItems={shopItems} />}
					></Route>
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
