import React from 'react';

const Footer = () => {
	return (
		<div>
			<div class="container-fluid bg-dark">
				<div class="container">
					<div class="footer">
						<div class="endows">
							<div class="endow">
								<div class="img">
									<img src="./images/footer/s1.png" alt="" />
								</div>
								<div class="content">
									<div class="heading">Free Shipping</div>
									<div class="purport">Most product are free shipping.</div>
								</div>
							</div>
							<div class="endow">
								<div class="img">
									<img src="./images/footer/s2.png" alt="" />
								</div>
								<div class="content">
									<div class="heading">Customer Support</div>
									<div class="purport">24x7 Customer Support</div>
								</div>
							</div>

							<div class="endow">
								<div class="img">
									<img src="./images/footer/s3.png" alt="" />
								</div>
								<div class="content">
									<div class="heading">Secure Payment</div>
									<div class="purport">Most Secure Payment for customer.</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-3">
								<img src="./logo.png" alt="" />
								<div class="social-media">
									<i class="fa-brands fa-facebook"></i>
									<i class="fa-brands fa-twitter"></i>
									<i class="fa-brands fa-youtube"></i>
								</div>
							</div>
							<div class="col-3">
								<h3>Quick Link</h3>
								<ul>
									<li>Cart</li>
									<li>Checkout</li>
									<li>Login</li>
									<li>Register</li>
									<li>Product</li>
								</ul>
							</div>
							<div class="col-3">
								<h3>Categories</h3>
								<ul>
									<li>Laptop</li>
									<li>Headphone</li>
									<li>Mobile</li>
								</ul>
							</div>
							<div class="col-3">
								<h3>Contact Info</h3>
								<ul>
									<li>
										<div class="icon">
											<i class="fa-sharp fa-solid fa-location-dot"></i>
										</div>
										<div>lorem address south road 77 north, USA -9991</div>
									</li>
									<li>
										<div class="icon">
											<i class="fa-solid fa-envelope"></i>
										</div>
										<div>domaininfo@mail.com company@mail.com</div>
									</li>
									<li>
										<div class="icon">
											<i class="fa-solid fa-mobile-screen-button"></i>
										</div>
										<div>
											<div>+ 755 2236 6698 22</div>
											<div>+ 556 6666 6589 22</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
