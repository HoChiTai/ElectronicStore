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
import { Link } from 'react-router-dom';
import { Store } from '../Store';
const CartScreen = () => {
	//const cartItems = data.products;
	const { state, dispatch: ctxDispatch } = useContext(Store);
	const {
		cart: { cartItems },
	} = state;

	const updateCartHandler = async (item, quantity) => {
		ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
	};

	const removeItemHandler = async (item) => {
		ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
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
									<Row>
										<Col md={6}>
											<span>Item</span>
										</Col>
										<Col md={3}>
											<span>Quantity Item</span>
										</Col>

										<Col md={2}>
											<span>Total</span>
										</Col>
										<Col md={1}>
											<span>Action</span>
										</Col>
									</Row>
								</div>

								<ListGroup className="cart_table_body">
									{cartItems.map((item) => (
										<ListGroup.Item key={item._id}>
											<Row className="align-items-center">
												<Col md={2}>
													<img
														src={item.image}
														alt={item.name}
														className="img-fluid rounded img-thumbnail"
													></img>
												</Col>
												<Col md={4}>
													<Link to="/">{item.name}</Link>
												</Col>
												<Col md={3}>
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
												</Col>
												<Col md={2}>${item.price}</Col>
												<Col md={1}>
													<Button
														variant="light"
														className="cart_trash"
														onClick={() => removeItemHandler(item)}
													>
														<i className="fas fa-trash"></i>
													</Button>
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							</div>
							<div className="box_bottom">
								<Row>
									<Col md={6}>
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
									</Col>
									<Col md={3}>
										<Button className="btn_continue">
											Continue To Shopping
										</Button>
									</Col>
									<Col md={3}>
										<Button className="btn_del_cart">Clear All Cart</Button>
									</Col>
								</Row>
							</div>
						</div>
					)}
				</Col>

				<Col md={3}>
					<div className="checkout_box">
						<Card>
							<Card.Header>SUMMARY</Card.Header>
							<Card.Body varian="flush">
								<ListGroup>
									<ListGroup.Item>
										<Row>
											<Col>
												<h5>Quantity</h5>{' '}
											</Col>
											<Col>
												{cartItems.reduce((a, c) => a + c.quantity, 0)} items
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroupItem>
										<Row>
											<Col>
												<h5>Total Price</h5>{' '}
											</Col>
											<Col>
												$
												{cartItems.reduce(
													(a, c) => a + c.price * c.quantity,
													0
												)}
											</Col>
										</Row>
									</ListGroupItem>
									<ListGroup.Item>
										<Row className="align-items-center">
											<Button
												variant="primary"
												className="btn_checkout"
												disabled={cartItems.length === 0}
											>
												Proceed To Checkout
											</Button>
										</Row>
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
