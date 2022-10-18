import React from "react";
import { Row, Col } from "react-bootstrap";
import UserCartItem from "../components/UserCartItem";

const UserCart = () => {
    return (
        <Row>
            <Col xs={12}>
                <div className="user-cart">
                    <ul className="user-cart__tab">
                        <li className="active">All</li>
                        <li>All</li>
                        <li>All</li>
                        <li>All</li>
                        <li>All</li>
                    </ul>
                </div>
                <UserCartItem />
            </Col>
        </Row>
    );
};

export default UserCart;
