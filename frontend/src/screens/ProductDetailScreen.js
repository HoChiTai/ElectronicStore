import React, {
    useContext,
    useEffect,
    useReducer,
    useRef,
    useState,
} from "react";
import {
    Container,
    Breadcrumb,
    Row,
    Col,
    Button,
    Form,
    FloatingLabel,
} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Featured from "../components/Featured";
import { FeaturedStyle } from "../components/FeaturedStyle";
import data from "../data";
import UserReview from "../components/UserReview";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";
import { getError } from "../utils";
import { Store } from "../Store";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, product: action.payload };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };

        case "FETCH_RELATIVE_REQUEST":
            return { ...state, loadingRelative: true };
        case "FETCH_RELATIVE_SUCCESS":
            return {
                ...state,
                loadingRelative: false,
                relativeProduct: action.payload,
            };
        case "FETCH_RELATIVE_FAIL":
            return {
                ...state,
                loadingRelative: false,
                errorRelative: action.payload,
            };

        case "REFRESH_PRODUCT":
            return { ...state, product: action.payload };
        case "CREATE_REQUEST":
            return { ...state, loadingCreateReview: true };
        case "CREATE_SUCCESS":
            return { ...state, loadingCreateReview: false };
        case "CREATE_FAIL":
            return { ...state, loadingCreateReview: false };
        default:
            return state;
    }
};

const ProductDetailScreen = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const reviewsRef = useRef();

    //const { products } = data;
    //const product = products.find((item) => item._id === id);

    const params = useParams();
    const { slug } = params;
    const navigate = useNavigate();

    const [
        {
            loading,
            error,
            product,
            loadingCreateReview,
            loadingRelative,
            errorRelative,
            relativeProduct,
        },
        dispatch,
    ] = useReducer(reducer, {
        loading: true,
        product: null,
        error: "",
        relativeProduct: [],
        loadingRelative: true,
        errorRelative: "",
    });

    const [qtyProduct, setQtyProduct] = useState(1);

    const [commit, setCommit] = useState({
        text: "",
        star: 5,
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });

            try {
                const { data } = await axios.get(`/api/products/slug/${slug}`);
                dispatch({ type: "FETCH_SUCCESS", payload: data.product });
            } catch (error) {
                dispatch({ type: "FETCH_FAIL", payload: getError(error) });
            }
        };

        // const getRelativeProduct = async () => {
        // 	dispatch({ type: 'FETCH_RELATIVE_REQUEST' });
        // 	console.log(product.brand_id);
        // 	try {
        // 		const { data } = await axios.get(`/products/brand/${product.brand_id}`);
        // 		dispatch({ type: 'FETCH_RELATIVE_SUCCESS', payload: data.products });
        // 	} catch (error) {
        // 		dispatch({ type: 'FETCH_RELATIVE_FAIL', payload: getError(error) });
        // 	}
        // };

        fetchData();
        // getRelativeProduct();
    }, [slug]);

    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x.id === product.id);
        const quantity = existItem
            ? existItem.quantity + qtyProduct
            : qtyProduct;

        // const { data } = await axios.get(`/api/produts/${product.id}`);

        // if (data.products.stock < qtyProduct) {
        // 	window.alert('Product is out of stock!');
        // 	return;
        // }

        ctxDispatch({
            type: "CART_ADD_ITEM",
            payload: { ...product, quantity },
        });
        navigate("/cart");
    };
    const updateCartHandler = () => {};

    const submitReview = async () => {
        if (!commit.text || !commit.star) {
            alert("Please enter comment and rating");
            return;
        }
        try {
            // product.reviews.push(data.review);
            // product.numReviews = product.reviews.length;

            // const rating =
            // 	product.reviews.reduce((a, c) => c.rating + a, 0) /
            // 	product.reviews.length;

            const newNumReviews = product.reviews.length + 1;

            const newRating = (product.rating + commit.star) / newNumReviews;
            console.log(product.rating);
            const { data } = await axios.post(
                `/api/reviews/`,
                {
                    comment: commit.text,
                    rating: commit.star,
                    newNumReviews: newNumReviews,
                    newRating: newRating,
                    product_id: product.id,
                    user_id: userInfo.user.id,
                },
                {
                    headers: {
                        authorization: `Bearer ${userInfo.authorization.token}`,
                    },
                }
            );

            if (data.status === 200) {
                dispatch({ type: "CREATE_SUCCESS" });
                alert("Review submitted successfully");
                dispatch({ type: "REFRESH_PRODUCT", payload: data.product });

                window.scrollTo({
                    behavior: "smooth",
                    top: reviewsRef.current.offsetTop,
                });
            }
        } catch (error) {
            alert(getError(error));
            dispatch({ type: "CREATE_FAIL" });
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : !product ? (
                <MessageBox variant="danger">Product not found</MessageBox>
            ) : (
                <>
                    <Container className="breadcrumb-app">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                {product.name}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Container>
                    <Container className="product-details">
                        <Row>
                            <Col xl={4} md={4} xs={12}>
                                <div className="product-details__img">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                    <Row>
                                        <FeaturedStyle>
                                            <Slider {...settings}>
                                                <div>
                                                    <img
                                                        src="/images/p5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        src="/images/p5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        src="/images/p5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        src="/images/p5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </Slider>
                                        </FeaturedStyle>
                                    </Row>
                                </div>
                            </Col>
                            <Col xl={8} md={8} xs={12}>
                                <div className="product-details__content">
                                    <div className="name">{product.name}</div>
                                    <div className="review-star d-flex align-items-center">
                                        <Rating
                                            rating={product.rating}
                                            numReviews={
                                                product.numReviews
                                            }></Rating>
                                    </div>
                                    <div className="price">
                                        ${product.price}
                                    </div>
                                    <div className="description">
                                        {product.description}
                                    </div>
                                    <ul className="list-info">
                                        <li>
                                            <h6>Brand</h6>
                                            <h6>{product.brands.name}</h6>
                                        </li>
                                        <li>
                                            <h6>Screen Size</h6>
                                            <h6>{product.screen}</h6>
                                        </li>
                                        <li>
                                            <h6>Operating System</h6>
                                            <h6>{product.os}</h6>
                                        </li>
                                        <li>
                                            <h6>CPU</h6>
                                            <h6>{product.cpu}</h6>
                                        </li>
                                        <li>
                                            <h6>Graphic Card</h6>
                                            <h6>{product.gpu}</h6>
                                        </li>
                                        <li>
                                            <h6>RAM</h6>
                                            <h6>{product.ram}</h6>
                                        </li>
                                        <li>
                                            <h6>Memory Storage</h6>
                                            <h6>{product.rom}</h6>
                                        </li>
                                        <li>
                                            <h6>Battery Opacity</h6>
                                            <h6>{product.battery}</h6>
                                        </li>

                                        <li>
                                            <h6>Weight</h6>
                                            <h6>{product.weight}</h6>
                                        </li>
                                        <li>
                                            <h6>Released Date</h6>
                                            <h6>{product.released}</h6>
                                        </li>
                                        <li>
                                            <h6>Released Date</h6>
                                            <h6>{product.brand_id}</h6>
                                        </li>
                                    </ul>
                                    <div className="detail_qty_box">
                                        <div>
                                            <h5>Quantity</h5>
                                        </div>
                                        <div className="qty_box">
                                            <Button
                                                className="detail_qty"
                                                onClick={() =>
                                                    setQtyProduct(
                                                        qtyProduct - 1
                                                    )
                                                }
                                                disabled={qtyProduct === 1}>
                                                <i className="fas fa-minus-circle"></i>
                                            </Button>{" "}
                                            <input
                                                type="number"
                                                value={qtyProduct}
                                                onChange={(e) =>
                                                    setQtyProduct(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <Button
                                                className="detail_qty"
                                                onClick={() =>
                                                    setQtyProduct(
                                                        qtyProduct + 1
                                                    )
                                                }
                                                disabled={
                                                    qtyProduct === product.stock
                                                }>
                                                <i className="fas fa-plus-circle"></i>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="btn_group_detail">
                                        <div>
                                            {product.stock === 0 ? (
                                                <Button
                                                    className="btn_add_cart"
                                                    onClick={() =>
                                                        addToCartHandler()
                                                    }>
                                                    OUT OF STOCK
                                                </Button>
                                            ) : (
                                                <Button
                                                    className="btn_add_cart"
                                                    onClick={() =>
                                                        addToCartHandler()
                                                    }>
                                                    ADD TO CART
                                                </Button>
                                            )}
                                        </div>
                                        <div>
                                            <Button
                                                className="btn_whislist"
                                                onClick={() => navigate("/")}>
                                                ADD TO WISHLIST
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="review" ref={reviewsRef}>
                        <h5>{product.name} - Reviews and Comments </h5>
                        <div className="review-content d-md-flex d-block text-center">
                            <div className="summary">
                                <div className="score">
                                    <div className="score-average">
                                        {product.rating}
                                    </div>
                                    <div className="score-max">/5</div>
                                </div>

                                <Rating
                                    rating={product.rating}
                                    numReviews={product.numReviews}></Rating>
                                {/* <span className="count">{product.numReviews}</span> */}
                            </div>
                            <div className="detail">
                                <ul>
                                    <li>
                                        <div className="review-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="bar-bg">
                                            <div
                                                className="bar-fg"
                                                style={{
                                                    "--percent": "80%",
                                                }}></div>
                                        </div>
                                        <div className="count">65</div>
                                    </li>
                                    <li>
                                        <div className="review-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                        </div>
                                        <div className="bar-bg">
                                            <div
                                                className="bar-fg"
                                                style={{
                                                    "--percent": "10%",
                                                }}></div>
                                        </div>
                                        <div className="count">65</div>
                                    </li>
                                    <li>
                                        <div className="review-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                        </div>
                                        <div className="bar-bg">
                                            <div
                                                className="bar-fg"
                                                style={{
                                                    "--percent": "3%",
                                                }}></div>
                                        </div>
                                        <div className="count">65</div>
                                    </li>
                                    <li>
                                        <div className="review-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                        </div>
                                        <div className="bar-bg">
                                            <div
                                                className="bar-fg"
                                                style={{
                                                    "--percent": "4%",
                                                }}></div>
                                        </div>
                                        <div className="count">65</div>
                                    </li>
                                    <li>
                                        <div className="review-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                            <i className="fa-solid fa-star fail"></i>
                                        </div>
                                        <div className="bar-bg">
                                            <div
                                                className="bar-fg"
                                                style={{
                                                    "--percent": "3%",
                                                }}></div>
                                        </div>
                                        <div className="count">65</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="d-flex">
                                <span>Review</span>
                                <div className="review-star">
                                    {[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return commit.star >= index ? (
                                            <i
                                                className="fa-solid fa-star"
                                                onClick={() =>
                                                    setCommit({
                                                        ...commit,
                                                        star: index,
                                                    })
                                                }></i>
                                        ) : (
                                            <i
                                                className="fa-solid fa-star fail"
                                                onClick={() =>
                                                    setCommit({
                                                        ...commit,
                                                        star: index,
                                                    })
                                                }></i>
                                        );
                                    })}
                                </div>
                            </div>
                            <FloatingLabel
                                controlId="floatingTextarea2"
                                label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: "100px", marginTop: 10 }}
                                    value={commit.text}
                                    onChange={(e) =>
                                        setCommit({
                                            ...commit,
                                            text: e.target.value,
                                        })
                                    }
                                />
                            </FloatingLabel>
                            <Button
                                variant="primary"
                                style={{ marginTop: 10, marginLeft: 10 }}
                                onClick={submitReview}>
                                Send
                            </Button>
                        </div>
                        <h6>Comments</h6>
                        <div className="mod-reviews">
                            {product.reviews.map((review) => (
                                <UserReview
                                    userName={
                                        review.users.fname +
                                        " " +
                                        review.users.lname
                                    }
                                    comment={review.comment}
                                    rating={review.rating}
                                />
                            ))}
                            {/* <UserReview />
							<UserReview />
							<UserReview /> */}
                        </div>
                    </Container>
                    <Row>
                        <Col xs={12}>
                            <div className="featured-product">
                                <ul className="featured-product-btn">
                                    <li className="active">Related Product</li>
                                </ul>
                            </div>
                            <FeaturedStyle>
                                <Featured
                                    products={product.categories.products}
                                />
                            </FeaturedStyle>
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
};

export default ProductDetailScreen;
