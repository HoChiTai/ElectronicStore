import React from "react";

const AdminHome = () => {
    return (
        <>
            <div className="statistic mt-4">
                <div className="col-3">
                    <div className="statistic-item">
                        <div className="icon">
                            <i className="fa-regular fa-box"></i>
                        </div>
                        <div className="heading">
                            <div className="name">Products</div>
                            <div className="count">200</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="statistic-item">
                        <div className="icon">
                            <i className="fa-light fa-user"></i>
                        </div>
                        <div className="heading">
                            <div className="name">Customer</div>
                            <div className="count">20</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="statistic-item">
                        <div className="icon">
                            <i className="fa-light fa-users"></i>
                        </div>
                        <div className="heading">
                            <div className="name">Employee</div>
                            <div className="count">18</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistic-chart">
                <div className="heading">
                    <ul className="menu">
                        <li className="active">Income</li>
                        <li>Expense</li>
                    </ul>
                    <select>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
                <ul className="chart">
                    <li>
                        <ul className="chart-data">
                            <li>12k</li>
                            <li>8k</li>
                            <li>4k</li>
                            <li>0</li>
                        </ul>
                    </li>
                    <li className="passed" style={{ "--percent": "20%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="passed" style={{ "--percent": "30%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="passed" style={{ "--percent": "40%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="passed" style={{ "--percent": "50%" }}>
                        <div className="data">20220 $</div>
                    </li>
                    <li className="now" style={{ "--percent": "60%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="" style={{ "--percent": "10%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="" style={{ "--percent": "90%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="" style={{ "--percent": "10%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="" style={{ "--percent": "20%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="" style={{ "--percent": "40%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="" style={{ "--percent": "30%" }}>
                        <div className="data">200 $</div>
                    </li>
                    <li className="" style={{ "--percent": "80%" }}>
                        <div className="data">200 $</div>
                    </li>
                </ul>
                <ul className="month">
                    <li></li>
                    <li>Jan</li>
                    <li>Feb</li>
                    <li>Mar</li>
                    <li>Apr</li>
                    <li>May</li>
                    <li>Jun</li>
                    <li>July</li>
                    <li>Aug</li>
                    <li>Sep</li>
                    <li>Oct</li>
                    <li>Nov</li>
                    <li>Dec</li>
                </ul>
            </div>
            <div className="popular-products">
                <h4>Popular Products</h4>
                <ul className="heading">
                    <li>Photos</li>
                    <li>Name</li>
                    <li>Date</li>
                    <li>Categpry</li>
                    <li>Brand</li>
                    <li>Price</li>
                    <li>Status</li>
                </ul>
                <ul className="data">
                    <li>
                        <img src="/images/p1.jpg" alt="" />
                    </li>
                    <li>
                        <div>Camera</div>
                        <div className="id">#11102</div>
                    </li>
                    <li>24 March, 2022</li>
                    <li>Camera</li>
                    <li>Panasonic</li>
                    <li>200 $</li>
                    <li>Available</li>
                </ul>
                <ul className="data">
                    <li>
                        <img src="/images/p1.jpg" alt="" />
                    </li>
                    <li>
                        <div>Camera</div>
                        <div className="id">#11102</div>
                    </li>
                    <li>24 March, 2022</li>
                    <li>Camera</li>
                    <li>Panasonic</li>
                    <li>200 $</li>
                    <li>Available</li>
                </ul>
            </div>
        </>
    );
};

export default AdminHome;
