import React from "react";

const CategorySideBar = () => {
	return (
		<ul className="sticky-top">
			<li className="main-category">
				category
				<ul className="sub-category">
					<li>subcategory</li>
					<li>subcategory</li>
					<li>subcategory</li>
				</ul>
			</li>
			<li className="main-category">category</li>
			<li className="main-category">
				category
				<ul className="sub-category">
					<li>subcategory</li>
					<li>subcategory</li>
					<li>subcategory</li>
				</ul>
			</li>
			<li className="main-category">category</li>
			<li className="main-category">category</li>
		</ul>
	);
};

export default CategorySideBar;
