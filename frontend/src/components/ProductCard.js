import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import Rating from './Rating';

const ProductCard = (props) => {
	const { product } = props;
	const { state, dispatch: ctxDispatch } = useContext(Store);
	const {
		cart: { cartItems },
	} = state;

	const addToCartHandler = async (item) => {
		const existItem = cartItems.find((x) => x._id === product._id);
		const quantity = existItem ? existItem.quantity + 1 : 1;
		ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
	};

	return (
		<div>
			<div class="product">
				<div class="image">
					<div className="box">
						<Link to={`/product/${product._id}`}>
							<img src={product.image} alt={product.name} class="main-img " />
							<img src="./images/p5.jpg" alt={product.name} class="sub-img" />
						</Link>
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
					<Link to={`/product/${product._id}`}>
						<h4>{product.name}</h4>
					</Link>
					<h5>$ {product.price}</h5>
					<div class="review-star">
						<Rating
							rating={product.rating}
							numReviews={product.numReviews}
						></Rating>
					</div>
					{product.countInStock === 0 ? (
						<Button className="btn-add-product" disabled>
							OUT OF STOCK
						</Button>
					) : (
						<Button
							className="btn-add-product"
							onClick={() => addToCartHandler(product)}
						>
							ADD TO CART
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
