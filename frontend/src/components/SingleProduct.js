import React from 'react';
import Rating from './Rating';

const SingleProduct = (props) => {
	const { product } = props;
	return (
		<div className="single-product">
			<div className="box_img">
				<img src={product.image} alt="" />
			</div>

			<div className="content">
				<h4>{product.name}</h4>
				<h5>$ {product.price}</h5>
				<div className="review-star">
					<Rating
						rating={product.rating}
						numReviews={product.numReviews}
					></Rating>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
