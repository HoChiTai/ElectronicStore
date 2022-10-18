import React from "react";

const UserCouponItem = () => {
    return (
        <div className="user-coupon">
            <div className="user-coupon__img">
                <i className="fa-sharp fa-solid fa-gift"></i>
            </div>
            <div className="user-coupon__info">
                <div className="user-coupon__name">Quà tặng tháng 10</div>
            </div>
            <a href="#">Buy now</a>
        </div>
    );
};

export default UserCouponItem;
