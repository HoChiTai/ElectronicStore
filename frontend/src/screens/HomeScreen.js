import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { CarouselStyle } from '../components/CarouselStyle';
import Featured from '../components/Featured';
import { FeaturedStyle } from '../components/FeaturedStyle';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ProductCard from '../components/ProductCard';
import SingleProduct from '../components/SingleProduct';
import data from '../data';
import { getError } from '../utils';

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_REQUEST':
			return { ...state, loading: true };
		case 'FETCH_SUCCESS':
			return { ...state, loading: false, products: action.payload };
		case 'FETCH_FAIL':
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

const HomeScreen = () => {
	//const { products } = data;
	const [{ loading, error, products }, dispatch] = useReducer(reducer, {
		loading: true,
		products: [],
		error: '',
	});

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'FETCH_REQUEST' });
			try {
				const { data } = await axios.get('api/products/');
				dispatch({ type: 'FETCH_SUCCESS', payload: data.products });
			} catch (error) {
				dispatch({ type: 'FETCH_FAIL', payload: getError(error) });
			}
			//setProducts(result.data);
		};
		fetchData();
	}, []);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		dispatch({ type: 'FETCH_REQUEST' });
	// 		try {
	// 			const { data } = await axios.get('/api/products/');
	// 			dispatch({ type: 'FETCH_SUCCESS', payload: data.products });
	// 		} catch (error) {
	// 			dispatch({ type: 'FETCH_FAIL', payload: getError(error) });
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : products.length === 0 ? (
				<MessageBox variant="danger">No Product Found</MessageBox>
			) : (
				<div>
					<CarouselStyle>
						<Carousel />
					</CarouselStyle>
					<div style={{ marginTop: 40 }}>
						<Row>
							<Col xs={9}>
								<div
									className="hot-deal"
									style={{ backgroundImage: `url("./images/carousel/c1.jpg")` }}
								>
									<div className="content">
										<h2>HOT DEAL</h2>
										<h1>Kemioo DX24 Headphone</h1>
										<p>
											Contrary to popular belief, Lorem Ipsum is not simply
											random text. It has roots in a piece of classical Latin
											literature
										</p>
										<button>GET COUPON</button>
									</div>
									<img src="./images/homepage/h1.png" alt="" />
								</div>
							</Col>
							<Col xs={3}>
								<ProductCard product={products[0]} />
							</Col>
						</Row>

						<Row>
							<Col xs={12}>
								<div className="featured-product">
									<ul className="featured-product-btn">
										<li className="active">On Sale</li>
										<li>New Product</li>
										<li>Best Deal</li>
									</ul>
								</div>
								<FeaturedStyle>
									<Featured products={products} />
								</FeaturedStyle>
							</Col>
						</Row>

						<Row>
							<Col xs={6}>
								<Link to="/cate" className="product-ads">
									<img src="./images/homepage/h2.jpg" alt="" />
								</Link>
							</Col>
							<Col xs={6}>
								<Link to="/cate" className="product-ads">
									<img src="./images/homepage/h3.jpg" alt="" />
								</Link>
							</Col>
						</Row>

						<Row>
							<Col xs={12}>
								<div className="menu-product">
									<h2>Laptops & Computers</h2>
									<ul>
										<li>Computer</li>
										<li>Laptop</li>
										<li>Camera</li>
										<li>Speaker</li>
										<li>Others</li>
									</ul>
								</div>
							</Col>
						</Row>

						<Row>
							{products.map((product) => (
								<Col xs={4} key={product.id}>
									<SingleProduct product={product} />
								</Col>
							))}
						</Row>

						<Row>
							<Col xs={12}>
								<div className="banner">
									<img src="./images/homepage/h4.jpg" alt="" />
								</div>
							</Col>
						</Row>
					</div>
				</div>
			)}
		</>
	);
};

export default HomeScreen;
