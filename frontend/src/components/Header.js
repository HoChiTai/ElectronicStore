import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import MessageBox from './MessageBox';

const Header = () => {
	const { state, dispatch: ctxDispatch } = useContext(Store);
	const { cart, userInfo } = state;
	const navigate = useNavigate();

	const removeItemHandler = async (item) => {
		ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
	};

	const signoutHandler = () => {
		ctxDispatch({ type: 'USER_SIGNOUT' });
		localStorage.removeItem('userInfo');
		localStorage.removeItem('cartItems');
		localStorage.removeItem('shippingAddress');
		localStorage.removeItem('paymentMethod');
		localStorage.removeItem('paymentMethod');
		navigate('/login');
	};

	return (
		<React.Fragment>
			<div>
				<div className="header blue-bg">
					<div className="container">
						<div className="header-content">
							<ul className="header-navbar">
								<li>
									<img src="./logo.png" alt="" />
								</li>
								<li>
									<Link to="/">Home</Link>
								</li>

								<li>
									<Link to="/cate">Browser</Link>
								</li>
								<li>
									<Link to="/cart">Cart</Link>
								</li>
							</ul>
							<div className="header-search">
								<input
									type="text"
									name="headerSearch"
									placeholder="Search your keyword"
								/>
								<div className="icon">
									<i className="fa-light fa-magnifying-glass"></i>
								</div>
							</div>

							<ul className="header-settings">
								{userInfo ? (
									<li className="user">
										{/* <i className="fa-solid fa-user"></i> */}
										<div className="user__tag">
											<img
												className="avatar"
												src="/images/p5.jpg"
												alt="avatar"
											/>
											<div className="name">
												{userInfo.user.fname} {userInfo.user.lname}
											</div>
											<i className="fa-regular fa-angle-down"></i>
										</div>
										<ul className="user-settings">
											<li className="heading">
												<Link to="/user">My account</Link>
											</li>
											<li>
												<Link to="/user">User profile</Link>
											</li>
											<li>
												<Link to="">Order History</Link>
											</li>
											<li>
												<Link to="#" onClick={signoutHandler}>
													Log out
												</Link>
											</li>
										</ul>
									</li>
								) : (
									<Link to="/login">
										<div className="header__btn">Log in</div>
									</Link>
								)}

								<li>
									<label className="cart" htmlFor="cart-detail-btn">
										<i className="fa-sharp fa-solid fa-bag-shopping">
											<div className="badge-cart">
												{cart.cartItems.length > 0
													? cart.cartItems.length
													: '0'}
											</div>
										</i>
									</label>
									<input type="checkbox" name="" id="cart-detail-btn" />
									<label className="overlay" htmlFor="cart-detail-btn"></label>
									<div className="cart-detail">
										<div className="heading">
											<h5>Cart</h5>
											<label htmlFor="cart-detail-btn">
												<i className="fa-regular fa-xmark"></i>
											</label>
										</div>

										<div className="products-list">
											{cart.cartItems.length === 0 ? (
												<MessageBox>Cart is empty</MessageBox>
											) : (
												<div>
													{cart.cartItems.map((item) => (
														<div className="product-item">
															<div className="cart_box_img">
																<img
																	src={item.image}
																	alt={item.name}
																	className="mg-fluid img-thumbnail rounded"
																/>
															</div>

															<div className="content">
																<div className="name">{item.name}</div>
																<div className="price">
																	<p>
																		{item.quantity} x <span>${item.price}</span>
																	</p>
																</div>
															</div>
															<div className="delete-product">
																<i
																	className="fa-regular fa-xmark"
																	onClick={() => removeItemHandler(item)}
																></i>
															</div>
														</div>
													))}
													<div className="checkout">
														<div className="price">
															<h5>Quantity</h5>
															<h5>
																{cart.cartItems.reduce(
																	(a, c) => a + c.quantity,
																	0
																)}
															</h5>
														</div>
														<div className="price">
															<h5>Total Price</h5>
															<h5>
																$
																{cart.cartItems.reduce(
																	(a, c) => a + c.price * c.quantity,
																	0
																)}
															</h5>
														</div>
														<Link to="/cart">
															<div className="btn-view-cart">
																<div className="icon">
																	<i className="fa-solid fa-cart-shopping"></i>
																</div>
																VIEW CART
															</div>
														</Link>

														<div className="btn-checkout">
															<div className="icon">
																<i className="fa-regular fa-arrow-right-from-bracket"></i>
															</div>
															CHECKOUT
														</div>
													</div>
												</div>
											)}
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div style={{ marginTop: 80 }}></div>
			</div>
		</React.Fragment>
	);
};

export default Header;
