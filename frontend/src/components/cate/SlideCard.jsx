import React from 'react';
import slideData from './slideData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SlideCard = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		appendDots: (dots) => {
			return <ul style={{ margin: '0px' }}>{dots}</ul>;
		},
	};
	return (
		<>
			<Slider {...settings}>
				{slideData.map((value, index) => (
					<div className="box d_flex top" key={index}>
						<div className="left">
							<h1>{value.title}</h1>
							<p>{value.desc}</p>
							<button className="btn-primary ltop">Visit Collections</button>
						</div>
						<div className="right">
							<img src={value.cover} alt={value.title}></img>
						</div>
					</div>
				))}
			</Slider>
		</>
	);
};

export default SlideCard;
