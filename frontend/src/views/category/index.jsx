import React, { Component } from "react";
import CategorySideBar from "./components/sidebar";
import CategoryProductList from "./components/productsList";
import CategoryNav from "./components/nav";
import { getData } from "../../utils/apiCall";
import { toTitleCase } from "./../../utils/utils";

class ProductCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			categories: [],
		};
	}

	async componentDidMount() {
		const { category } = this.props.match.params;

		await getData(`products/category/${category}`).then((res) =>
			this.setState({ products: res.data.products })
		);

		await getData("categories/").then((res) =>
			this.setState({ categories: res.data.categories })
		);
	}

	render() {
		return (
			<>
				<section className="row m-0 px-md-3">
					<article className="col-md-2 categories-list">
						<CategorySideBar categories={this.state.categories} />
					</article>
					<article className="col category-products p-0 mt-2 no-gutters">
						{/* put categories slider here */}
						<CategoryNav
							category={toTitleCase(this.props.match.params.category)}
						/>
						<CategoryProductList prods={this.state.products} />
					</article>
				</section>
			</>
		);
	}
}

export default ProductCategory;
