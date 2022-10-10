import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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

							<ul className="header-settings">
								<li className="user">
									<i className="fa-solid fa-user"></i>
									<ul className="user-settings">
										<li className="heading">
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
									<label className="cart" htmlFor="cart-detail-btn">
										<i className="fa-sharp fa-solid fa-bag-shopping">
											<div className="badge-cart">1</div>
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

										{/* <div className="products-list">
											<div className="product-item">
												<img src="./logo.png" alt="" />
												<div className="content">
													<div className="name">Aspire Dron Model</div>
													<div className="price">
														<p>
															1 x <span>$60.00</span>
														</p>
													</div>
												</div>
												<div className="delete-product">
													<i className="fa-regular fa-xmark"></i>
												</div>
											</div>
											<div className="product-item">
												<img src="./logo.png" alt="" />
												<div className="content">
													<div className="name">Aspire Dron Model</div>
													<div className="price">
														<p>
															1 x <span>$60.00</span>
														</p>
													</div>
												</div>
												<div className="delete-product">
													<i className="fa-regular fa-xmark"></i>
												</div>
											</div>
										</div>

										<div className="checkout">
											<div className="price">
												<h5>Total</h5>
												<h5>$120.00</h5>
											</div>
											<div className="btn-view-cart">
												<div className="icon">
													<i className="fa-solid fa-cart-shopping"></i>
												</div>
												VIEW CART
											</div>
											<div className="btn-checkout">
												<div className="icon">
													<i className="fa-regular fa-arrow-right-from-bracket"></i>
												</div>
												CHECKOUT
											</div>
										</div> */}
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div style={{marginTop: 67}}></div>								
		</React.Fragment>
	);
};

export default Header;
