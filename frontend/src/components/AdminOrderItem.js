import UserCartProduct from '../components/UserCartProduct';
import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Store } from '../Store';
import { getError } from '../utils';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

const AdminOrderItem = ({ order, UpdateStatusHandller }) => {
	// const { ords } = props;
	return (
		<div>
			<Row className="g-0">
				<Col xs={12}>
					<div className="user-cart__item">
						<input type="checkbox" id={order.id} />
						<label className="cart-info" htmlFor={order.id}>
							<Row>
								<Col xs={2} className="cart-id">
									{order.id}
								</Col>
								<Col className="id" xs={2}>
									{order.cus_id}
								</Col>
								<Col xs={3} className="cart-date">
									{order.date}
								</Col>
								<Col xs={2} className="cart-confirm">
									{order.statuses.name}
								</Col>
								<Col xs={2} className="cart-total">
									{order.total_price}
								</Col>
								<Col xs={1} className="cart-icon">
									<i className="fa-regular fa-angle-right"></i>
								</Col>
							</Row>
						</label>

						<div className="cart-content">
							{order.order_details.map((item) => (
								<UserCartProduct item={item} />
							))}
							<div className="cart-content__information">
								<Row>
									<Col xs={4}>
										<div className="cart-content__address">
											<h5>Name: {order.name}</h5>
											<h6>Phone: {order.phone}</h6>
											<h6>Address: {order.address}</h6>
											<h6>City: {order.city}</h6>
										</div>
									</Col>
									<Col xs={8}>
										<ul className="cart-content__order">
											<li>
												<div className="heading">Total cart</div>
												<div className="price">
													${order.items_price.toFixed(2)}
												</div>
											</li>
											<li>
												<div className="heading">Shipping</div>
												<div className="price">
													$${order.shipping_price.toFixed(2)}
												</div>
											</li>
											<li>
												<div className="heading">Tax price</div>
												<div className="price">
													${order.tax_price.toFixed(2)}
												</div>
											</li>
											<li>
												<div className="heading">Total price</div>
												<div className="price">
													${order.total_price.toFixed(2)}
												</div>
											</li>
										</ul>
									</Col>
								</Row>
							</div>
							<div>
								{order.status_id === 1 ? (
									<>
										<div
											className="btn-cancel"
											onClick={() => UpdateStatusHandller(order.id, 6)}
										>
											Cancel
										</div>{' '}
										<div
											className="btn-cancel"
											onClick={() =>
												UpdateStatusHandller(order.id, order.status_id + 1)
											}
										>
											Confirm
										</div>
									</>
								) : order.status_id === 2 ? (
									<div
										className="btn-cancel"
										onClick={() =>
											UpdateStatusHandller(order.id, order.status_id + 1)
										}
									>
										Packed
									</div>
								) : order.status_id === 3 ? (
									<div
										className="btn-cancel"
										onClick={() =>
											UpdateStatusHandller(order.id, order.status_id + 1)
										}
									>
										Delivery
									</div>
								) : (
									<>
										<div
											className="btn-cancel"
											onClick={() =>
												UpdateStatusHandller(order.id, order.status_id + 1)
											}
										>
											Success
										</div>{' '}
										<div
											className="btn-cancel"
											onClick={() => UpdateStatusHandller(order.id, 6)}
										>
											Fail
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default AdminOrderItem;
