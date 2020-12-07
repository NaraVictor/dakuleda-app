import React from "react";
import CategoryNav from "./nav";
import ProductListView from "./../../../components/shop/productListView";

class CategoryProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		fetch("https://fakestoreapi.com/products/")
			.then((res) => res.json())
			.then((json) => {
				return this.setState({ products: json });
			});
	}

	render() {
		return this.state.products.map((product) => (
			<span key={product.id}>
				<ProductListView prod={product} />
				<hr />
			</span>
		));
	}
}

export default CategoryProductList;
