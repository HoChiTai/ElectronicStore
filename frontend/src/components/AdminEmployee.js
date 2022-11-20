import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table, Button } from "react-bootstrap";
import AdminEmployeeItem from "./AdminEmployeeItem";

const AdminEmployee = () => {
    return (
        <div className="mt-4 px-4">
            <div className="products-search mb-4">
                <div className="search-input py-2 px-4">
                    <input type="text" placeholder="Search employee..." />
                    <div className="icon-search px-2">
                        <i className="fa-light fa-magnifying-glass"></i>
                    </div>
                </div>
                <Link to="/admin/employee/create">
                    <Button variant="success">Create</Button>
                </Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ width: "6%" }}>ID</th>
                        <th style={{ width: "10%" }}>Firstname</th>
                        <th style={{ width: "10%" }}>Lastname</th>
                        <th style={{ width: "24%" }}>Email</th>
                        <th style={{ width: "25%" }}>Password</th>
                        <th style={{ width: "10%" }}>Phone</th>
                        <th style={{ width: "5%" }}>RoleID</th>
                        <th style={{ width: "10%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <AdminEmployeeItem />
                </tbody>
            </Table>
        </div>
    );
};

export default AdminEmployee;
