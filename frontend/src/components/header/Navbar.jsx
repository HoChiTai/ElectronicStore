import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const [MobileMenu, setMobileMenu] = useState(false);

	return (
		<>
			<header className="header">
				<div className="container d_flex">
					<div className="categories d_flex">
						<span class="fas fa-border-all"></span>
						<h4>
							Categories<i class="fa fa-chevron-down"></i>
						</h4>
					</div>
					<div className="navlink">
						<ul
							className={
								MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'
							}
							onClick={() => setMobileMenu(false)}
						>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/cate">Category</Link>
							</li>
							<li>
								<Link to="/cart">Cart</Link>
							</li>
							<li>
								<Link to="/vendor">User Account</Link>
							</li>

							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
						<button
							className="toggle"
							onClick={() => setMobileMenu(!MobileMenu)}
						>
							{MobileMenu ? (
								<i className="fas fa-times close home-btn"></i>
							) : (
								<i class="fa fa-bars open"></i>
							)}
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
