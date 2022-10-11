import React, { useContext } from 'react';
import {
	Button,
	Card,
	Col,
	FloatingLabel,
	Form,
	ListGroup,
	ListGroupItem,
	Row,
} from 'react-bootstrap';
import MessageBox from '../components/MessageBox';
import data from '../data.js';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
const CartScreen = () => {
	const { state, dispatch: ctxDispatch } = useContext(Store);
	const {
		cart: { cartItems },
	} = state;

	const navigate = useNavigate();

	const updateCartHandler = async (item, quantity) => {
		ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
	};

	const removeItemHandler = async (item) => {
		ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
	};

	const clearCartHandler = () => {
		ctxDispatch({ type: 'CART_CLEAR' });
	};

	return (
		<div className="cart_screen">
			<div>
				<div className="top_title">Your Shopping Cart</div>
			</div>

			<Row>
				<Col md={9}>
					{cartItems.length === 0 ? (
						<div className="mt-3">
							<MessageBox>
								Cart is empty. <Link to="/">Go Shopping</Link>
							</MessageBox>
						</div>
					) : (
						<div>
							<div className="cart_table">
								<div className="cart_table_head">
									<span>Item</span>

									<span>Item Quantity</span>

									<span>Total</span>

									<span>Action</span>
								</div>

								<ListGroup className="cart_table_body">
									{cartItems.map((item) => (
										<ListGroup.Item key={item._id}>
											<div className="cart_table_box_img">
												<img
													src={item.image}
													alt={item.name}
													className="img-fluid img-thumbnail rounded"
												></img>
											</div>
											<div class="cart_table_box_name">
												<Link to="/">{item.name}</Link>
											</div>
											<div class="cart_table_box_qty">
												<Button
													className="cart_qty"
													onClick={() =>
														updateCartHandler(item, item.quantity - 1)
													}
													disabled={item.quantity === 1}
												>
													<i className="fas fa-minus-circle"></i>
												</Button>{' '}
												<span>{item.quantity}</span>{' '}
												<Button
													className="cart_qty"
													onClick={() =>
														updateCartHandler(item, item.quantity + 1)
													}
													disabled={item.quantity === item.countInStock}
												>
													<i className="fas fa-plus-circle"></i>
												</Button>
											</div>
											<div className="cart_table_box_price">${item.price}</div>
											<div class="cart_table_box_trash">
												<Button
													variant="light"
													className="cart_trash"
													onClick={() => removeItemHandler(item)}
												>
													<i className="fas fa-trash"></i>
												</Button>
											</div>
										</ListGroup.Item>
									))}
								</ListGroup>
							</div>
							<div className="box_bottom">
								<div className="float_select">
									<FloatingLabel
										controlId="floatingSelect"
										label="Discount Coupon You Have"
									>
										<Form.Select
											value={''}
											onChange={(e) => {}}
											aria-label="floadingSelect"
										>
											<option value="newest">Newest Arrivals</option>
											<option value="lowest">Price: Low to High</option>
											<option value="highest">Price: High to low</option>
											<option value="toprated">Customer Reviews</option>
										</Form.Select>
									</FloatingLabel>
								</div>
								<div className="btn_group_cart">
									<div>
										<Button
											className="btn_continue"
											onClick={() => navigate('/')}
										>
											Continue To Shopping
										</Button>
									</div>
									<div>
										<Button
											className="btn_del_cart"
											onClick={() => clearCartHandler()}
										>
											Clear All Cart
										</Button>
									</div>
								</div>
							</div>
						</div>
					)}
				</Col>

				<Col md={3}>
					<div className="checkout_box">
						<Card>
							<Card.Header>SUMMARY</Card.Header>
							<Card.Body variant="flush">
								<ListGroup>
									<ListGroup.Item>
										<span>
											<h5>Quantity</h5>
										</span>

										<span>
											{cartItems.reduce((a, c) => a + c.quantity, 0)} items
										</span>
									</ListGroup.Item>
									<ListGroup.Item>
										<span>
											<h5>Total Price</h5>
										</span>
										<span>
											{' '}
											${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
										</span>
									</ListGroup.Item>
									<ListGroup.Item>
										<div className="box_btn_checkout">
											<Button
												variant="primary"
												className="btn_checkout"
												onClick={() => navigate('/shipping')}
												disabled={cartItems.length === 0}
											>
												Proceed To Checkout
											</Button>
										</div>
									</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Card>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default CartScreen;
