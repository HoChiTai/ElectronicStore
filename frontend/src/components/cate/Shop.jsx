import React from 'react';
import MenuCate from './MenuCate';
import ShopCard from './ShopCard';

const shop = ({ shopItems }) => {
	return (
		<>
			<section className="shop background mtop">
				<div className="container d_flex">
					<MenuCate />
					<div className="contentWidth">
						<div className="heading d_flex">
							<div className="heading-left row f_flex">
								<h2>Mobile Phones</h2>
							</div>
							<div className="heading-right row">
								<span>View all</span>
								<i className="fa fa-caret-right"></i>
							</div>
						</div>

						<div className="product-content grid1">
							<ShopCard shopItems={shopItems} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default shop;
