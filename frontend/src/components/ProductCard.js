import React from 'react';

const ProductCard = (props) => {
	const { product } = props;
	return (
		<div>
			<div class="product">
				<div class="image">
					<div className="box">
						<img src={product.image} alt={product.name} class="main-img " />
						<img src="./images/p5.jpg" alt={product.name} class="sub-img" />
					</div>

					<div class="product-tag">
						<div class="like">
							<i class="fa-light fa-heart"></i>
						</div>
						<h5>New</h5>
					</div>
					<div class="product-action">
						<div class="compare">
							<i class="fa-thin fa-sliders-up"></i>
							<div class="p-tooltip">Compare</div>
						</div>
						<div class="quickview">
							<i class="fa-light fa-eye"></i>
							<div class="p-tooltip">Quick View</div>
						</div>
					</div>
				</div>
				<div class="content">
					<h4>{product.name}</h4>
					<h5>$ {product.price}</h5>
					<div class="review-star">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-light fa-star"></i>
						<i class="fa-light fa-star"></i>
						<div class="count">({product.numReviews}&#43;)</div>
					</div>
					<div class="btn-add-product">ADD TO CART</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
