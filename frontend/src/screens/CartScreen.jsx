import React from 'react';
import {
	Button,
	Card,
	Col,
	ListGroup,
	ListGroupItem,
	Row,
} from 'react-bootstrap';
import MessageBox from '../components/MessageBox';
import data from '../data.js';
import { Link } from 'react-router-dom';
const CartScreen = () => {
	const cartItems = data.products;
	return (
		<div className="cart">
			<div className="mtop">
				<h2>Shopping Cart</h2>
			</div>

			<Row>
				<Col md={8}>
					{data.products.length === 0 ? (
						<MessageBox>
							Cart is empty. <Link to="/">Go Shopping</Link>
						</MessageBox>
					) : (
						<ListGroup className="mtop">
							{cartItems.map((item) => (
								<ListGroup.Item key={item._id} className="mPadding">
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
											<Button variant="light">
												<i className="fas fa-minus-circle"></i>
											</Button>{' '}
											<span>{item.countInStock}</span>{' '}
											<Button variant="light">
												<i className="fas fa-plus-circle"></i>
											</Button>
										</Col>
										<Col md={2}>${item.price}</Col>
										<Col md={1}>
											<Button variant="light">
												<i className="fas fa-trash"></i>
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							))}
						</ListGroup>
					)}
				</Col>
				<Col md={4}>
					<Card className="boxShadow mtop">
						<Card.Header>SUMMARY</Card.Header>
						<Card.Body varian="flush">
							<ListGroup>
								<ListGroup.Item>
									<Row>
										<Col>
											<h5>Quantity</h5>{' '}
										</Col>
										<Col>
											{cartItems.reduce((a, c) => a + c.countInStock, 0)} items
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroupItem>
									<Row>
										<Col>
											<h5>Total Price</h5>{' '}
										</Col>
										<Col>
											${' '}
											{cartItems.reduce(
												(a, c) => a + c.price * c.countInStock,
												0
											)}
										</Col>
									</Row>
								</ListGroupItem>
								<ListGroup.Item>
									<Row className="align-items-center">
										<Button variant="primary" disabled={cartItems.leng === 0}>
											Proceed To Checkout
										</Button>
									</Row>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default CartScreen;
