import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { CarouselStyle } from '../components/CarouselStyle';
import Featured from '../components/Featured';
import { FeaturedStyle } from '../components/FeaturedStyle';
import ProductCard from '../components/ProductCard';
import SingleProduct from '../components/SingleProduct';
import data from '../data';

const HomeScreen = () => {
	const { products } = data;
	return (
		<>
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
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
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
							<Featured />
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
						<Col xs={4} key={product.name}>
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
		</>
	);
};

export default HomeScreen;
