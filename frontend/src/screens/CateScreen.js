import React, { useState } from 'react';
import {
	Button,
	Col,
	Dropdown,
	DropdownButton,
	FloatingLabel,
	Form,
	ListGroup,
	ListGroupItem,
	Row,
} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Rating from '../components/Rating';
import data from '../data';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

/*
export const prices = [
	{
		name: '$1 to $200',
		value: '1-200',
	},
	{
		name: '$201 to $500',
		value: '201-500',
	},
	{
		name: '$501 to $1000',
		value: '501-1000',
	},
	{
		name: '$1001 to $3000',
		value: '1001-3000',
	},
];
*/
export const ratings = [
	{
		name: '1 star and up',
		rating: 1,
	},
	{
		name: '2 star and up',
		rating: 2,
	},
	{
		name: '3 star and up',
		rating: 3,
	},
	{
		name: '4 star and up',
		rating: 4,
	},

	// {
	// 	name: '0 star and up',
	// 	rating: 0,
	// },
];

const CateScreen = () => {
	const { products } = data;
	const { categories } = data;
	const { brands } = data;

	const [pages, setPages] = useState([]);

	const navigate = useNavigate();
	const { search } = useLocation();
	const sp = new URLSearchParams(search);

	const [loading, setLoading] = useState('');
	const countProducts = '';

	const category = sp.get('category') || 'all';
	const brand = sp.get('brand') || 'all';
	const priceMin = sp.get('priceMin') || 'all';
	const priceMax = sp.get('priceMax') || 'all';
	const query = sp.get('query') || 'all';
	const rating = sp.get('rating') || 'all';
	const order = sp.get('order') || 'newest';
	const page = sp.get('page') || 1;

	const getFilterUrl = (filter) => {
		const filterPage = filter.page || page;
		const filterCategory = filter.category || category;
		const filterBrand = filter.brand || brand;
		const filterPriceMin = filter.priceMin || priceMin;
		const filterPriceMax = filter.priceMax || priceMax;
		const filterQuery = filter.query || query;
		const filterRating = filter.rating || rating;
		const sortOrder = filter.order || order;
		return `/search?category=${filterCategory}&brand=${filterBrand}}&priceMin=${filterPriceMin}&priceMax=${filterPriceMax}&query=${filterQuery}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
	};

	return (
		<div className="cate mt-5">
			<Row>
				<Col md={3}>
					<div className="cate_sidebar">
						<div className="list_filters">
							<div className="list_filters_head">FILTERS</div>
							<div className="list_filters_inner">
								<div className="filter_cate">
									<div className="filter_title">Category</div>
									<ListGroup className="fliter_container_item">
										<ListGroup.Item className="list_filters_item">
											<Form.Check
												type="checkbox"
												id="all"
												value="all"
												label="Any"
												onChange={(e) => {
													navigate(getFilterUrl({ category: e.target.value }));
												}}
											></Form.Check>
										</ListGroup.Item>
										{categories.map((cate) => (
											<ListGroup.Item className="list_filters_item">
												<Form.Check
													type="checkbox"
													id={cate._id}
													value={cate.name}
													label={cate.name}
													onChange={(e) => {
														navigate(
															getFilterUrl({ category: e.target.value })
														);
													}}
												></Form.Check>
											</ListGroup.Item>
										))}
									</ListGroup>
								</div>

								<div className="filter_cate">
									<div className="filter_title">Brand</div>
									<ListGroup className="fliter_container_item">
										<ListGroup.Item className="list_filters_item">
											<Form.Check
												type="checkbox"
												id="all"
												value="all"
												label="Any"
												onChange={(e) => {
													navigate(getFilterUrl({ brand: e.target.value }));
												}}
											></Form.Check>
										</ListGroup.Item>
										{brands.map((brand) => (
											<ListGroup.Item className="list_filters_item">
												<Form.Check
													type="checkbox"
													id={brand._id}
													value={brand.name}
													label={brand.name}
													onChange={(e) => {
														navigate(getFilterUrl({ brand: e.target.value }));
													}}
												></Form.Check>
											</ListGroup.Item>
										))}
									</ListGroup>
								</div>

								<div className="filter_cate">
									<div className="filter_title">Rating</div>

									<ListGroup className="fliter_container_item">
										<ListGroup.Item className="list_filters_item">
											<Link
												className={rating === 'all' ? 'text-bold' : ''}
												to={getFilterUrl({ rating: 'all' })}
											>
												<Rating rating={0} caption=" & Up"></Rating>
											</Link>
										</ListGroup.Item>
										{ratings.map((r) => (
											<ListGroup.Item
												className="list_filters_item"
												key={r.name}
											>
												<Link
													className={
														'${r.rating}' === `${rating}` ? 'text-bold' : ''
													}
													to={getFilterUrl({ rating: r.rating })}
												>
													<Rating rating={r.rating} caption=" & Up"></Rating>
												</Link>
											</ListGroup.Item>
										))}
									</ListGroup>
								</div>
								<div className="filter_cate">
									<div className="filter_title">Price</div>

									<div className="list_filters_item_price">
										<Row>
											<Col>
												<FloatingLabel controlId="floatingInputMin" label="Min">
													<Form.Control
														type="number"
														placeholder="Min Price"
														onChange={(e) =>
															navigate(
																getFilterUrl({ priceMin: e.target.value })
															)
														}
													></Form.Control>
												</FloatingLabel>
											</Col>
											<Col>
												<FloatingLabel controlId="floatingInputMax" label="Max">
													<Form.Control
														type="number"
														placeholder="Max Price"
														onChange={(e) =>
															navigate(
																getFilterUrl({ priceMax: e.target.value })
															)
														}
													></Form.Control>
												</FloatingLabel>
											</Col>
										</Row>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
				<Col md={9}>
					{loading ? (
						<LoadingBox></LoadingBox>
					) : (
						<div>
							<Row className="cate_box_top">
								<Col md={7} className="cate_box_result">
									<div className="box_amount">
										{countProducts === 0 ? 'No' : countProducts} Results
										{query !== 'all' && 'Query: ' + query}
										{category !== 'all' && 'Category: ' + category}
										{priceMin !== 'all' && 'PriceMin: ' + priceMin}
										{priceMax !== 'all' && 'PriceMax: ' + priceMax}
										{rating !== 'all' && 'Rating: ' + rating + ' & up'}
										{query !== 'all' ||
										category !== 'all' ||
										rating !== 'all' ||
										priceMin !== 'all' ||
										priceMax !== 'all' ? (
											<Button
												variant="light"
												onClick={() => navigate('/search')}
											>
												<i className="fas fa-time-circle"></i>
											</Button>
										) : null}
									</div>
								</Col>
								<Col md={4} className="cate_box_sort">
									<Row>
										<Col>
											<FloatingLabel controlId="floatingSelect" label="Sort By">
												<Form.Select
													value={order}
													onChange={(e) => {
														navigate(getFilterUrl({ order: e.target.value }));
													}}
													aria-label="floadingSelect"
												>
													<option value="newest">Newest Arrivals</option>
													<option value="lowest">Price: Low to High</option>
													<option value="highest">Price: High to low</option>
													<option value="toprated">Customer Reviews</option>
												</Form.Select>
											</FloatingLabel>
										</Col>
									</Row>
								</Col>
								{products.length === 0 && (
									<MessageBox>No Product Found</MessageBox>
								)}
							</Row>

							<Row className="mt-3">
								{products.map((product) => (
									<Col sm={6} lg={4} key={product._id} className="mb-3">
										<ProductCard product={product} />
									</Col>
								))}
							</Row>
							{/*
							<div>
								{[...Array(pages).key()].map((x) => (
									<LinkContainer
										key={x + 1}
										className="mx-1"
										to={getFilterUrl({ page: x + 1 })}
									>
										<Button
											className={Number(page) === x + 1 ? 'text-bold' : ''}
											variant="light"
										></Button>
									</LinkContainer>
								))}
							</div>
								*/}
						</div>
					)}
				</Col>
			</Row>
		</div>
	);
};

export default CateScreen;
