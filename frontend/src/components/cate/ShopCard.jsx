import React, { useState } from 'react';

const ShopCard = ({ shopItems }) => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};

	return (
		<>
			{shopItems.map((productItem) => (
				<div className="box">
					<div className="product mtop">
						<div className="img">
							<span className="discount">{productItem.discount}% Off</span>
							<img src={productItem.cover} alt=""></img>
							<div className="product-like">
								<label>{count}</label>
								<br />

								<i class="fa fa-heart" onClick={increment}></i>
							</div>
							<div className="product-details">
								<h3>{productItem.name}</h3>
								<div className="rate">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<div className="price">
									<h4>{productItem.price}.00</h4>
									<button>
										<i className="fa fa-plus"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default ShopCard;
