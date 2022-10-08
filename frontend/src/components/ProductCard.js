import React from 'react';

const ProductCard = (props) => {
	const { product } = props;
	return (
		<div>
			<div className="product">
				<div className="image">
					<div className="box">
						<img src={product.image} alt={product.name} className="main-img " />
						<img src="./images/p5.jpg" alt={product.name} className="sub-img" />
					</div>

					<div className="product-tag">
						<div className="like">
							<i className="fa-light fa-heart"></i>
						</div>
						<h5>New</h5>
					</div>
					<div className="product-action">
						<div className="compare">
							<i className="fa-thin fa-sliders-up"></i>
							<div className="p-tooltip">Compare</div>
						</div>
						<div className="quickview">
							<i className="fa-light fa-eye"></i>
							<div className="p-tooltip">Quick View</div>
						</div>
					</div>
				</div>
				<div className="content">
					<h4>{product.name}</h4>
					<h5>$ {product.price}</h5>
					<div className="review-star">
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-light fa-star"></i>
						<i className="fa-light fa-star"></i>
						<div className="count">({product.numReviews}&#43;)</div>
					</div>
					<div className="btn-add-product">ADD TO CART</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
