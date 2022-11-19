import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table } from "react-bootstrap";

const AdminProductItem = () => {
    // trạng thái khóa theo sản phẩm
    const [blocked, setBlocked] = useState(true);

    return (
        <tr>
            <td>1</td>
            <td>
                <img
                    className="admin-product-item"
                    src="/images/p5.jpg"
                    alt=""
                />
            </td>
            <td>Otto adadada ada đa â asdas d</td>
            <td>12345</td>
            <td>20000</td>
            <td>
                <div className="action-icon">
                    <Link to="/admin/products/update/1" className="btn-update">
                        <i className="fa-light fa-pen"></i>
                    </Link>
                    <div
                        className={
                            blocked
                                ? "btn-block bot-unblocked"
                                : "btn-block bot-blocked"
                        }
                        onClick={() => setBlocked(!blocked)}>
                        <div className="bot"></div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default AdminProductItem;
