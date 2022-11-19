import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import AdminReceiveItem from "./AdminReceiveItem";

const AdminReceive = () => {
    return (
        <div className="admin-orders mt-4">
            <Link to="/admin/receive/create">
                <Button variant="success" className="mx-4 mb-2">
                    Create
                </Button>
            </Link>
            <div className="orders-header-table">
                <Row className="g-0 orders-header">
                    <Col className="id" xs={2}>
                        ID
                    </Col>
                    <Col className="id" xs={2}>
                        EmployeeID
                    </Col>
                    <Col className="date" xs={2}>
                        Date
                    </Col>
                    <Col className="total" xs={2}>
                        TotalQuantity
                    </Col>
                    <Col className="price" xs={3}>
                        Price
                    </Col>
                    <Col className="icon" xs={1}></Col>
                </Row>
            </div>
            <AdminReceiveItem />
        </div>
    );
};

export default AdminReceive;
