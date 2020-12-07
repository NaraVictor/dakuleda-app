import React, { Component } from "react";
import { Row } from "react-bootstrap";
import CategorySideBar from "./components/sidebar";
import CategoryProductList from "./components/productsList";
import CategoryNav from "./components/nav";

class ProductCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<section className="row m-0 px-md-3">
					<article className="col-md-2 categories-list">
						<CategorySideBar />
					</article>
					<article className="col category-products p-0 mt-2 no-gutters">
						put categories slider here
						<CategoryNav />
						<CategoryProductList />
					</article>
				</section>
			</>
		);
	}
}

export default ProductCategory;
