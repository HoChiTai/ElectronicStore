import React, { useState } from "react";
import { Link } from "react-router-dom";

const DashBoard = ({ children }) => {
    const [content, setContent] = useState("Home");

    return (
        <div className="dashboard">
            <div className="navigation">
                <ul>
                    <li>
                        <i className="fa-light fa-house"></i>
                        <div>Dashboard</div>
                    </li>
                    <li
                        className={content === "Home" ? "active" : ""}
                        onClick={() => setContent("Home")}>
                        <Link to="/admin/Home">
                            <i className="fa-light fa-house"></i>
                            <div>Home</div>
                        </Link>
                    </li>
                    <li
                        className={content === "Product" ? "active" : ""}
                        onClick={() => setContent("Product")}>
                        <Link to="/admin/Product">
                            <i className="fa-light fa-house"></i>
                            <div>Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/home">
                            <i className="fa-light fa-house"></i>
                            <div>Home</div>
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
            <div className="content">{children}</div>
        </div>
    );
};

export default DashBoard;
