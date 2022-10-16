import React from "react";
import { Row, Col } from "react-bootstrap";

const UserCartProduct = () => {
    return (
        <Row className="cart-content__item">
            <Col xs={2}>
                <img src="./images/p5.jpg" alt="" />
            </Col>
            <Col xs={8}>
                <div className="name">Camera</div>
                <div className="quantity">x8</div>
            </Col>
            <Col xs={2}>123123$</Col>
        </Row>
    );
};

export default UserCartProduct;
