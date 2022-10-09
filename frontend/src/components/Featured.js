import React from "react";
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../data"
import ProductCard from "./ProductCard";

const Featured = () => {
    const { products } = data;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
        <Container>
            <Slider {...settings}>
                {
                    products.map(product => 
                        <div key={product.name}>
                            <ProductCard product={product}/>
                        </div>    
                    )
                }
            </Slider>

        </Container>
    );
};

export default Featured;