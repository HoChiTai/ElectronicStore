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
		const existItem = cartItems.find((x) => x.id === product.id);
		const quantity = existItem ? existItem.quantity + 1 : 1;
		ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
	};

	return (
		<div>
			<div className="product">
				<div className="image">
					<div className="box">
						<Link to={`/product/${product.id}`}>
							<img src={product.image} alt={product.name} class="main-img " />
							<img src="./images/p5.jpg" alt={product.name} class="sub-img" />
						</Link>
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

				<div class="content">
					<Link to={`/product/${product.id}`}>
						<h4>{product.name}</h4>
					</Link>
					<h5>$ {product.price}</h5>
					<div class="review-star">
						<Rating
							rating={product.rating}
							numReviews={product.numReviews}
						></Rating>
					</div>
					{product.stock === 0 ? (
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
