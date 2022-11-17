import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table, Button } from "react-bootstrap";
import AdminProductItem from "./AdminProductItem";

const AdminProducts = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="mt-4 px-4">
            <div className="products-search mb-4">
                <div className="search-input py-2 px-4">
                    <input type="text" placeholder="Search product..." />
                    <div className="icon-search px-2">
                        <i className="fa-light fa-magnifying-glass"></i>
                    </div>
                </div>
                <Link to="/admin/products/create">
                    <Button variant="success">Create</Button>
                </Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <AdminProductItem />
                </tbody>
            </Table>
        </div>
    );
};

export default AdminProducts;
