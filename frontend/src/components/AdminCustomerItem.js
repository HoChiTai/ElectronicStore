import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table } from "react-bootstrap";

const AdminCustomerItem = () => {
    // trạng thái khóa theo sản phẩm
    const [blocked, setBlocked] = useState(true);

    return (
        <tr>
            <td>1</td>
            <td>Nguyễn</td>
            <td>Văn A</td>
            <td>abc123@gmail.com</td>
            <td>adasdasdasd</td>
            <td>0912356478</td>
            <td>TP.HCM</td>
            <td>1</td>
            <td>
                <div className="action-icon">
                    <Link to="/admin/customer/update/1" className="btn-update">
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

export default AdminCustomerItem;
