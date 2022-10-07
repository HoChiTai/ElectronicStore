import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import data from '../data';
const CateScreen = () => {
	const { products } = data;
	return (
		<div className="mt-5">
			<Row>
				{products.map((product) => (
					<Col sm={6} lg={4} key={product._id} className="mb-3">
						<ProductCard product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default CateScreen;
