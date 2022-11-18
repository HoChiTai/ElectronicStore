import React from "react";
import { Row, Col } from "react-bootstrap";
import AdminOrderItem from "./AdminOrderItem";

const AdminOrder = () => {
    return (
        <div className="admin-orders">
            <div className="user-cart">
                <ul className="user-cart__tab">
                    <li className="active">All</li>
                    <li>All</li>
                    <li>All</li>
                    <li>All</li>
                    <li>All</li>
                </ul>
            </div>
            <div className="orders-header-table">
                <Row className="g-0 orders-header">
                    <Col className="id" xs={2}>
                        ID
                    </Col>
                    <Col className="id" xs={2}>
                        CustomerID
                    </Col>
                    <Col className="date" xs={1}>
                        Date
                    </Col>
                    <Col className="status" xs={4}>
                        Status
                    </Col>
                    <Col className="price" xs={2}>
                        Price
                    </Col>
                    <Col className="icon" xs={1}></Col>
                </Row>
            </div>
            <AdminOrderItem />
        </div>
    );
};

export default AdminOrder;
