import React from 'react';

const SingleProduct = (props) => {
    const { product } = props;
    return (
        <div className="single-product">
            <img src={product.image} alt="" />
            <div className="content">
                <h4>{product.name}</h4>
                <h5>$ {product.price}</h5>
                <div className="review-star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-light fa-star"></i>
                    <i className="fa-light fa-star"></i>
                    <div className="count">({product.numReviews}&#43;)</div>
                </div>
            </div>
        </div>

    );
}

export default SingleProduct;