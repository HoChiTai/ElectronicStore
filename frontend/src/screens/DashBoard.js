import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const DashBoard = ({ children }) => {
    const [content, setContent] = useState("home");

    return (
        <Container fluid={true} className="dashboard">
            <Row className="g-0">
                <Col xs={2}>
                    <div className="navigation">
                        <ul>
                            <li>
                                <i className="fa-light fa-house"></i>
                                <div>Dashboard</div>
                            </li>
                            <li
                                className={content === "home" ? "active" : ""}
                                onClick={() => setContent("home")}>
                                <Link to="/admin/home">
                                    <i className="fa-light fa-house"></i>
                                    <div>Home</div>
                                </Link>
                            </li>
                            <li
                                className={content === "orders" ? "active" : ""}
                                onClick={() => setContent("orders")}>
                                <Link to="/admin/orders">
                                    <i className="fa-light fa-house"></i>
                                    <div>Orders</div>
                                </Link>
                            </li>
                            <li
                                className={
                                    content === "products" ? "active" : ""
                                }
                                onClick={() => setContent("products")}>
                                <Link to="/admin/products">
                                    <i className="fa-light fa-house"></i>
                                    <div>Product</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/home">
                                    <i className="fa-light fa-house"></i>
                                    <div>Home</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xs={10}>
                    <div className="content">
                        <div className="admin-header">
                            <div className="icon">
                                <i className="fa-regular fa-bars"></i>
                            </div>
                            <div className="avatar">
                                <div className="img">
                                    <img src="/images/p5.jpg" alt="" />
                                </div>
                                <div className="name">Tèo</div>
                            </div>
                        </div>
                        {children}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DashBoard;
