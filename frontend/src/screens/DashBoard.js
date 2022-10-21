import React from "react";

const DashBoard = () => {
    return (
        <div className="dashboard">
            <div className="navigation">
                <ul>
                    <li>
                        <i className="fa-light fa-house"></i>
                        <div>Dashboard</div>
                    </li>
                    <li className="active">
                        <i className="fa-light fa-house"></i>
                        <div>Home</div>
                    </li>
                    <li>
                        <i className="fa-light fa-house"></i>
                        <div>Home</div>
                    </li>
                    <li>
                        <i className="fa-light fa-house"></i>
                        <div>Home</div>
                    </li>
                    <li>
                        <i className="fa-light fa-house"></i>
                        <div>Home</div>
                    </li>
                    <li>
                        <i className="fa-light fa-house"></i>
                        <div>Home</div>
                    </li>
                </ul>
            </div>
            <div className="content">Nội dung</div>
        </div>
    );
};

export default DashBoard;
