import React from "react";
import { Row, Col } from "react-bootstrap";
import UserCouponItem from "../components/UserCouponItem";

const UserCoupon = () => {
    return (
        <>
            <div className="user-cart">
                <ul className="user-cart__tab">
                    <li className="active">All</li>
                    <li>All</li>
                </ul>
            </div>
            <div className="user-coupon-list">
                <Row>
                    <Col xs={6}>
                        <UserCouponItem />
                    </Col>
                    <Col xs={6}>
                        <UserCouponItem />
                    </Col>
                    <Col xs={6}>
                        <UserCouponItem />
                    </Col>
                    <Col xs={6}>
                        <UserCouponItem />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default UserCoupon;
