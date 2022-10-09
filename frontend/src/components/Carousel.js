import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (

        <div className="carousel-app" style={{ backgroundImage: `url("./images/carousel/c1.jpg")`}}>
			<Container>
                <Slider {...settings}>
                    <div>
                        <div className="slide-content">
                            <Col xs={7}>
                                <img src="./images/carousel/s1.png" alt="" />
                            </Col>
                            <Col xs={5}>
                                <div className="content">
                                    <h2>Best Product</h2>
                                    <h1>Mount Carved 2200XD</h1>
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                        text. It has roots in a piece of classical Latin literature.
                                    </p>
                                    <div className="button">Shop Now</div>
                                </div>
                            </Col>
                        </div>
                    </div>
                    <div>
                        <div className="slide-content">
                            <Col xs={7}>
                                <img src="./images/carousel/s1.png" alt="" />
                            </Col>
                            <Col xs={5}>
                                <div className="content">
                                    <h2>Best Product</h2>
                                    <h1>Mount Carved 2200XD</h1>
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                        text. It has roots in a piece of classical Latin literature.
                                    </p>
                                    <div className="button">Shop Now</div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Slider>		
			</Container>
		</div>		
    );
};

export default Carousel;