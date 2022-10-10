import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import MessageBox from './MessageBox';

const Header = () => {
	const { state, dispatch: ctxDispatch } = useContext(Store);
	const {
		cart: { cartItems },
	} = state;
	const removeItemHandler = async (item) => {
		ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
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
									<Link to="/">Product</Link>
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

							<ul class="header-settings">
								<li class="user">
									<i class="fa-solid fa-user"></i>
									<ul class="user-settings">
										<li class="heading">
											<a href="#">My account</a>
										</li>
										<li>
											<a href="#">Login</a>
										</li>
										<li>
											<a href="#">Register</a>
										</li>
									</ul>
								</li>
								<li>
									<label class="cart" for="cart-detail-btn">
										<i class="fa-sharp fa-solid fa-bag-shopping">
											<div class="badge-cart">
												{cartItems.length > 0 ? cartItems.length : '0'}
											</div>
										</i>
									</label>
									<input type="checkbox" name="" id="cart-detail-btn" />
									<label class="overlay" for="cart-detail-btn"></label>
									<div class="cart-detail">
										<div class="heading">
											<h5>Cart</h5>
											<label for="cart-detail-btn">
												<i class="fa-regular fa-xmark"></i>
											</label>
										</div>

										<div class="products-list">
											{cartItems.length === 0 ? (
												<MessageBox>Cart is empty</MessageBox>
											) : (
												<div>
													{cartItems.map((item) => (
														<div class="product-item">
															<img src={item.image} alt={item.name} />
															<div class="content">
																<div class="name">{item.name}</div>
																<div class="price">
																	<p>
																		{item.quantity} x <span>{item.price}</span>
																	</p>
																</div>
															</div>
															<div class="delete-product">
																<i
																	class="fa-regular fa-xmark"
																	onClick={() => removeItemHandler(item)}
																></i>
															</div>
														</div>
													))}
													<div class="checkout">
														<div class="price">
															<h5>Total Quantity</h5>
															<h5>
																{cartItems.reduce((a, c) => a + c.quantity, 0)}
															</h5>
														</div>
														<div class="price">
															<h5>Total Price</h5>
															<h5>
																{cartItems.reduce(
																	(a, c) => a + c.price * c.quantity,
																	0
																)}
															</h5>
														</div>
														<Link to="/cart">
															<div class="btn-view-cart">
																<div class="icon">
																	<i class="fa-solid fa-cart-shopping"></i>
																</div>
																VIEW CART
															</div>
														</Link>

														<div class="btn-checkout">
															<div class="icon">
																<i class="fa-regular fa-arrow-right-from-bracket"></i>
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
				<div style={{marginTop: 67}}></div>		
			</div>						
		</React.Fragment>
	);
};

export default Header;
