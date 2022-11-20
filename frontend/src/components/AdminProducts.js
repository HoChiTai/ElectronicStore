import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table, Button } from 'react-bootstrap';
import AdminProductItem from './AdminProductItem';
import { Store } from '../Store';
import axios from 'axios';
import { getError } from '../utils';
import MessageBox from './MessageBox';
import LoadingBox from './LoadingBox';

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_REQUEST':
			return { ...state, loading: true, error: '' };
		case 'FETCH_SUCCESS':
			return { ...state, loading: false, products: action.payload, error: '' };
		case 'FETCH_FAIL':
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};

const AdminProducts = () => {
	const [search, setSearch] = useState('');

	const { state, dispatch: ctxDispatch } = useContext(Store);

	const { userInfo } = state;

	const [{ loading, products, error }, dispatch] = useReducer(reducer, {
		loading: true,
		products: [],
		error: '',
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				dispatch({ type: 'FETCH_REQUEST' });
				const { data } = await axios.get(`/api/products`);
				dispatch({ type: 'FETCH_SUCCESS', payload: data.products });
			} catch (error) {
				dispatch({ type: 'FETCH_FAIL', payload: getError(error) });
				alert(getError(error));
			}
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="mt-4 px-4">
			<div className="products-search mb-4">
				<div className="search-input py-2 px-4">
					<input type="text" placeholder="Search product..." />
					<div className="icon-search px-2">
						<i className="fa-light fa-magnifying-glass"></i>
					</div>
				</div>
				<Link to="/products/create">
					<Button variant="success">Create</Button>
				</Link>
			</div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th style={{ width: '5%' }}>#</th>
							<th style={{ width: '15%' }}>Image</th>
							<th style={{ width: '20%' }}>Name</th>
							<th style={{ width: '10%' }}>Stock</th>
							<th style={{ width: '10%' }}>Price</th>
							<th style={{ width: '15%' }}>Brand</th>
							<th style={{ width: '15%' }}>Cate</th>
							<th style={{ width: '15%' }}>Action</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<AdminProductItem product={product} />
						))}
					</tbody>
				</Table>
			)}
		</div>
	);
};

export default AdminProducts;
