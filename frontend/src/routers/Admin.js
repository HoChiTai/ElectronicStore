import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import DashBoard from '../screens/DashBoard';
import AdminHome from '../components/AdminHome';
import AdminOrder from '../components/AdminOrders';
import AdminProducts from '../components/AdminProducts';
import AdminProductForm from '../components/AdminProductForm';
import AdminReceive from '../components/AdminReceive';
import AdminReceiveForm from '../components/AdminReceiveForm';
import AdminAccount from '../components/AdminAccount';

function Admin() {
	return (
		<BrowserRouter>
			<DashBoard>
				<Routes>
					<Route path="/" element={<AdminHome />}></Route>
					<Route path="/home" element={<AdminHome />}></Route>
					<Route path="/orders" element={<AdminOrder />}></Route>
					<Route path="/products" element={<AdminProducts />}></Route>
					<Route path="/products/create" element={<AdminProductForm />}></Route>
					<Route path="/products/update/:id" element="abc"></Route>
					<Route path="/account" element={<AdminAccount />}></Route>
					<Route path="/receive" element={<AdminReceive />}></Route>
					<Route path="/receive/create" element={<AdminReceiveForm />}></Route>
				</Routes>
			</DashBoard>
		</BrowserRouter>
	);
}

export default Admin;
