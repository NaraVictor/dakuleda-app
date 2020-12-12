import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
	const { image, name, slug } = props.category;
	return (
		<Link to={`/c/${slug}`}>
			<div className="category text-center">
				<img
					src={image}
					alt="category"
					style={{ maxHeight: 200, maxWidth: 200 }}
				/>
			</div>
			<div className="category-title text-center">{name}</div>
		</Link>
	);
};

export default Category;
