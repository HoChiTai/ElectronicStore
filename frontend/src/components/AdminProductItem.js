import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';

const AdminProductItem = (props) => {
	const { product } = props;
	// trạng thái khóa theo sản phẩm
	const [blocked, setBlocked] = useState(true);

	return (
		<tr>
			<td>{product.id}</td>
			<td>
				<img
					className="admin-product-item"
					src={product.image}
					alt={product.name}
				/>
			</td>
			<td>{product.name}</td>
			<td>{product.stock}</td>
			<td>{product.price}</td>
			<td>{product.brands.name}</td>
			<td>{product.categories.name}</td>
			<td>
				<div className="action-icon">
					<Link to="/admin/products/update/1" className="btn-update">
						<i className="fa-light fa-pen"></i>
					</Link>
					<div
						className={
							blocked ? 'btn-block bot-unblocked' : 'btn-block bot-blocked'
						}
						onClick={() => setBlocked(!blocked)}
					>
						<div className="bot"></div>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default AdminProductItem;
