import UserCartProduct from '../components/UserCartProduct';
import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Store } from '../Store';
import { getError } from '../utils';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

// const AdminOrderItem = () => {
//     return (
//         <Row className="g-0">
//             <Col xs={12}>
//                 <div className="user-cart__item">
//                     <input type="checkbox" id="44567" />
//                     <label className="cart-info" htmlFor="44567">
//                         <Row>
//                             <Col xs={2} className="cart-id">
//                                 4456778
//                             </Col>
//                             <Col className="id" xs={2}>
//                                 4456778
//                             </Col>
//                             <Col xs={1} className="cart-date">
//                                 12/12/2022
//                             </Col>
//                             <Col xs={4} className="cart-confirm">
//                                 Wait
//                             </Col>
//                             <Col xs={2} className="cart-total">
//                                 1000$
//                             </Col>
//                             <Col xs={1} className="cart-icon">
//                                 <i className="fa-regular fa-angle-right"></i>
//                             </Col>
//                         </Row>
//                     </label>

//                     <div className="cart-content">
//                         <UserCartProduct />
//                         <div className="cart-content__information">
//                             <Row>
//                                 <Col xs={4}>
//                                     <div className="cart-content__address">
//                                         <h5>Address</h5>
//                                         <h6>Tèo</h6>
//                                         <p>0908051508</p>
//                                         <p>abc123 P4 Q4</p>
//                                     </div>
//                                 </Col>
//                                 <Col xs={8}>
//                                     <ul className="cart-content__order">
//                                         <li>
//                                             <div className="heading">
//                                                 Total cart
//                                             </div>
//                                             <div className="price">123$</div>
//                                         </li>
//                                         <li>
//                                             <div className="heading">
//                                                 Shipping
//                                             </div>
//                                             <div className="price">0$</div>
//                                         </li>
//                                         <li>
//                                             <div className="heading">
//                                                 Total price
//                                             </div>
//                                             <div className="price">123$</div>
//                                         </li>
//                                     </ul>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div className="btn-cancel">Cancel</div>
//                     </div>
//                 </div>
//             </Col>
//         </Row>
//     );
// };

const AdminOrderItem = ({ order, UpdateStatusHandller }) => {
	// const { ords } = props;
	return (
		<div>
			<Row>
				<Col xs={12}>
					<div className="user-cart__item">
						<input type="checkbox" id="44567" />
						<label className="cart-info" htmlFor="44567">
							<Row>
								<Col xs={3} className="cart-id">
									{order.id}
								</Col>
								<Col xs={3} className="cart-date">
									{order.date}
								</Col>
								{/* <Col xs={5} className="cart-confirm">
                                        {order.statuses.name}
                                    </Col> */}
								<Col xs={2} className="cart-total">
									${order.total_price}
								</Col>
								<Col xs={2} className="cart-total">
									{order.status_id}
								</Col>
								<Col xs={2} className="cart-icon">
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
											<h5>ID: {order.id}</h5>
											<h6>Name: {order.name}</h6>
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
													${order.shipping_price.toFixed(2)}
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
