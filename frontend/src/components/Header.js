import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<div class="header blue-bg">
				<div class="container">
					<div class="header-content">
						<ul class="header-navbar">
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
						<div class="header-search">
							<input
								type="text"
								name="headerSearch"
								placeholder="Search your keyword"
							/>
							<div class="icon">
								<i class="fa-light fa-magnifying-glass"></i>
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
										<div class="badge-cart">1</div>
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

									{/* <div class="products-list">
										<div class="product-item">
											<img src="./logo.png" alt="" />
											<div class="content">
												<div class="name">Aspire Dron Model</div>
												<div class="price">
													<p>
														1 x <span>$60.00</span>
													</p>
												</div>
											</div>
											<div class="delete-product">
												<i class="fa-regular fa-xmark"></i>
											</div>
										</div>
										<div class="product-item">
											<img src="./logo.png" alt="" />
											<div class="content">
												<div class="name">Aspire Dron Model</div>
												<div class="price">
													<p>
														1 x <span>$60.00</span>
													</p>
												</div>
											</div>
											<div class="delete-product">
												<i class="fa-regular fa-xmark"></i>
											</div>
										</div>
									</div>

									<div class="checkout">
										<div class="price">
											<h5>Total</h5>
											<h5>$120.00</h5>
										</div>
										<div class="btn-view-cart">
											<div class="icon">
												<i class="fa-solid fa-cart-shopping"></i>
											</div>
											VIEW CART
										</div>
										<div class="btn-checkout">
											<div class="icon">
												<i class="fa-regular fa-arrow-right-from-bracket"></i>
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
			;
		</div>
	);
};

export default Header;
