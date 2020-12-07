import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
	const { image, title } = props.category;
	return (
		<Link to={`/c/${title}`} className="category text-center">
			<div>
				<img
					src={image}
					alt="category"
					className="img-circle"
					style={{ maxHeight: 200, maxWidth: 200 }}
				/>
			</div>
			<div>
				<p>{title}</p>
			</div>
		</Link>
	);
};

export default Category;
