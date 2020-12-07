import React from "react";

const CategoryNav = () => {
	return (
		<nav className="bg-secondary text-white mb-3 p-2 sticky-top">
			<span className="categories-menu">
				<ion-icon name="menu"></ion-icon>
				<span> Categories</span>
			</span>
			<span className="category-name"> Category Name</span>

			<span className="view-options d-inline">
				<span id="list-view">
					<ion-icon name="list"></ion-icon>
					<small>List View</small>
				</span>
				<span className="grid-view ml-3">
					<ion-icon name="grid"></ion-icon>
					<small>Grid View</small>
				</span>
			</span>
			{/* <form action="" className="d-inline">
				<input type="search" name="category-search" id="category-search" />
			</form> */}
		</nav>
	);
};

export default CategoryNav;
