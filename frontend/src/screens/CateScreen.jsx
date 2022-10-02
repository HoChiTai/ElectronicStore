import React from 'react';
import Categories from '../components/cate/Categories';
import Shop from '../components/cate/Shop';
const CateScreen = ({ shopItems }) => {
	return (
		<>
			<Categories />
			<Shop shopItems={shopItems} />
		</>
	);
};

export default CateScreen;
