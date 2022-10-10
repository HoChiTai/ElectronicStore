import React from "react";
import  { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Featured from '../components/Featured';
import { FeaturedStyle } from '../components/FeaturedStyle';
import data from "../data";
import UserReview from "../components/UserReview";

const ProductDetailScreen = () => {
    const {products} = data;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      };
    return  (
        <>
            <Container fluid className="breadcrumb-app">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </Container>

            <Container className="product-details">
                <Row>
                    <Col xs={4}>
                        <div className="product-details__img">
                            <img src={products[0].image} alt="" />
                            <Row>
                                <FeaturedStyle>
                                    <Slider {...settings}>
                                        <div>
                                            <img src="./images/p5.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img src="./images/p5.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img src="./images/p5.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img src="./images/p5.jpg" alt=""/>
                                        </div>
                                    </Slider>
                                </FeaturedStyle>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <div className="product-details__content">
                            <div className="name">{products[0].name}</div>
                            <div className="review-star d-flex align-items-center">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-light fa-star"></i>
                                <i className="fa-light fa-star"></i>
                                <div className="count">({products[0].numReviews}&#43;)</div>
                            </div>
                            <div className="price">${products[0].price}</div>
                            <div className="description">
                                {products[0].description}
                            </div>
                            <ul className="list-info">
                                <li>
                                    <h6>Brand</h6>
                                    <h6>{products[0].brand}</h6>
                                </li>
                                <li>
                                    <h6>CPU</h6>
                                    <h6>{products[0].cpu}</h6>
                                </li>
                                <li>
                                    <h6>Operating System</h6>
                                    <h6>{products[0].operatingSystem}</h6>
                                </li>
                                <li>
                                    <h6>RAM</h6>
                                    <h6>{products[0].ram}</h6>
                                </li>
                                <li>
                                    <h6>Memory Storage</h6>
                                    <h6>{products[0].memoryStorage}</h6>
                                </li>
                                <li>
                                    <h6>Screen Size</h6>
                                    <h6>{products[0].screenSize}</h6>
                                </li>
                                <li>
                                    <h6>Weight</h6>
                                    <h6>{products[0].weight}</h6>
                                </li>
                                <li>
                                    <h6>Released Date</h6>
                                    <h6>{products[0].releasedDate}</h6>
                                </li>
                            </ul>
                            <input type="number" value={0} />
                            <div className="btn-add">ADD TO CART</div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="review">
                <h5>Đánh giá và nhận xét của abc</h5>
                <div className="review-content">
                    <div className="summary">
                        <div className="score">
                            <div className="score-average">
                                4.8
                            </div>
                            <div className="score-max">
                                /5
                            </div>
                            </div>
                            <div className="review-star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star fail"></i>
                            <i className="fa-solid fa-star fail"></i>
                        </div>
                        <span className="count">73 đánh giá</span>
                    </div>
                    <div className="detail">
                        <ul>
                            <li>
                            <div className="review-star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="bar-bg">
                                <div className="bar-fg" style={{"--percent": '80%'}}></div>
                            </div>
                            <div className="count">65</div>
                            </li>
                            <li>
                            <div className="review-star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star fail"></i>
                            </div>
                            <div className="bar-bg">
                                <div className="bar-fg" style={{"--percent": '10%'}}></div>
                            </div>
                            <div className="count">65</div>
                            </li>
                            <li>
                            <div className="review-star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star fail"></i>
                                <i className="fa-solid fa-star fail"></i>
                            </div>
                            <div className="bar-bg">
                                <div className="bar-fg" style={{"--percent": '3%'}}></div>
                            </div>
                            <div className="count">65</div>
                            </li>
                            <li>
                            <div className="review-star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star fail"></i>
                                <i className="fa-solid fa-star fail"></i>
                                <i className="fa-solid fa-star fail"></i>
                            </div>
                            <div className="bar-bg">
                                <div className="bar-fg" style={{"--percent": '4%'}}></div>
                            </div>
                            <div className="count">65</div>
                            </li>
                            <li>
                            <div className="review-star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star fail"></i>
                                <i className="fa-solid fa-star fail"></i>
                                <i className="fa-solid fa-star fail"></i>
                                <i className="fa-solid fa-star fail"></i>
                            </div>
                            <div className="bar-bg">
                                <div className="bar-fg" style={{"--percent": '3%'}}></div>
                            </div>
                            <div className="count">65</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <h6>Nhận xét về sản phẩm</h6>
                <div className="mod-reviews">
                    <UserReview/>
                    <UserReview/>
                    <UserReview/>
                </div>
            </Container>

            <Row>
                <Col xs={12}>
                    <div className="featured-product">
                        <ul className="featured-product-btn">
                            <li className="active">Related Product</li>
                        </ul>
                    </div>
                    <FeaturedStyle>
                        <Featured/>	
                    </FeaturedStyle>
                </Col>
            </Row>
        </>
    )
}

export default ProductDetailScreen;