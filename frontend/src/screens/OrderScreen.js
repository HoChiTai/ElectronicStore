import React, { useContext, useEffect } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Store } from '../Store';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

import env from 'react-dotenv';
import MessageBox from '../components/MessageBox';

const OrderScreen = () => {
	const params = useParams();
	const { id: orderId } = params;

	const { state, dispatch: ctxDispatch } = useContext(Store);
	const { cart, userInfo } = state;

	const round = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

	cart.itemsPrice = round(
		cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
	);
	cart.shippingPrice = cart.itemsPrice > 500 ? round(0) : round(10);
	cart.taxPrice = round(0.1 * cart.itemsPrice);
	cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

	const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

	function createOrder(data, actions) {
		return actions.order
			.create({
				purchase_units: [
					{
						amount: { value: cart.totalPrice },
					},
				],
			})
			.then((orderId) => {
				return orderId;
			});
	}
	function onApprove(data, actions) {
		return actions.order.capture().then(async function (details) {
			alert('Paid successfully');
		});
	}

	function onError(err) {
		alert('Paid fail');
	}

	useEffect(() => {
		const loadPaypalScript = async () => {
			// const { data: clientId } =
			// 	'AVKGfcUIR5di9eQ9MUM1ocXMHIHgqU-uNzAAm0AzQISvPko9nnk9o8EAtuXcjEF9bJiQOCUAM-BpWE0m';
			paypalDispatch({
				type: 'resetOptions',
				value: {
					'client-id':
						'AVjDowY_2Clu_plbPacA6fvxbHNgCZdB81fblm7GEMN00V2noU2lw9l511zY_aYwylos1f5-ujiIpPsB',
					currency: 'USD',
				},
			});
			paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
		};
		loadPaypalScript();
	}, [paypalDispatch]);

	return (
		<div>
			<div className="order_screen">
				<Row>
					<Col md={8} className="order_info">
						<div className="order_address">
							<Card className="mb-3">
								<Card.Body>
									<Card.Title>Shipping</Card.Title>
									<Card.Text>
										<Row>
											<Col>
												<strong>Name: </strong>
												{cart.shippingAddress.fullName}
											</Col>
											<Col>
												<strong>phone: </strong>
												{cart.shippingAddress.phone}
											</Col>
										</Row>
										<Row>
											<Col>
												<strong>Address: </strong>
												{cart.shippingAddress.address}
											</Col>
											<Col>
												<strong>City: </strong>
												{cart.shippingAddress.city}
											</Col>
										</Row>
									</Card.Text>
									<MessageBox variant="danger">Not Delivered</MessageBox>
								</Card.Body>
							</Card>
						</div>

						<Card className="mb-3">
							<Card.Body>
								<Card.Title>Payment</Card.Title>
								<Card.Text>
									<strong>Method: </strong> {cart.paymentMethod}
								</Card.Text>
								<MessageBox variant="danger">Not Paid</MessageBox>
							</Card.Body>
						</Card>

						<Card className="mb-3 cart_table">
							<Card.Body>
								<Card.Title>Items</Card.Title>

								<ListGroup className="cart_table_body">
									{cart.cartItems.map((item) => (
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
											<div className="cart_table_box_price">
												{item.quantity}
											</div>
											<div className="cart_table_box_price">${item.price}</div>
										</ListGroup.Item>
									))}
								</ListGroup>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<div className="checkout_box summary_box">
							<Card>
								<Card.Header>ORDER SUMMARY</Card.Header>
								<Card.Body>
									<ListGroup>
										<ListGroup.Item>
											<span>Items</span>

											<span>${cart.itemsPrice.toFixed(2)}</span>
										</ListGroup.Item>
										<ListGroup.Item>
											<span>Shipping Price</span>
											<span>${cart.shippingPrice.toFixed(2)}</span>
										</ListGroup.Item>
										<ListGroup.Item>
											<span>Tax Price</span>
											<span>${cart.taxPrice.toFixed(2)}</span>
										</ListGroup.Item>
										<ListGroup.Item>
											<span>
												<strong>Order Total</strong>
											</span>
											<span>
												<strong>${cart.totalPrice.toFixed(2)}</strong>
											</span>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="paypal_box">
												<PayPalButtons
													createOrder={createOrder}
													onApprove={onApprove}
													onError={onError}
												></PayPalButtons>
											</div>
										</ListGroup.Item>
									</ListGroup>
								</Card.Body>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default OrderScreen;
