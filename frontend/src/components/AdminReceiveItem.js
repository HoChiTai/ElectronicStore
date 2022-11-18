import React from "react";
import { Row, Col } from "react-bootstrap";
import UserCartProduct from "./UserCartProduct";

const AdminReceiveItem = () => {
    return (
        <Row className="g-0">
            <Col xs={12}>
                <div className="user-cart__item">
                    <input type="checkbox" id="44567" />
                    <label className="cart-info" htmlFor="44567">
                        <Row>
                            <Col xs={2} className="cart-id">
                                4456778
                            </Col>
                            <Col className="id" xs={2}>
                                4456778
                            </Col>
                            <Col xs={2} className="cart-date">
                                12/12/2022
                            </Col>
                            <Col xs={2}>200</Col>
                            <Col xs={3} className="cart-total">
                                1000$
                            </Col>
                            <Col xs={1} className="cart-icon">
                                <i className="fa-regular fa-angle-right"></i>
                            </Col>
                        </Row>
                    </label>

                    <div className="cart-content">
                        <UserCartProduct />
                        <div className="cart-content__information">
                            <Row>
                                <Col xs={4}></Col>
                                <Col xs={8}>
                                    <ul className="cart-content__order">
                                        <li>
                                            <div className="heading">
                                                Total price
                                            </div>
                                            <div className="price">123$</div>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default AdminReceiveItem;
