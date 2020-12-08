import React from "react";
import ProductListView from "./../../../components/shop/productListView";
import axios from "axios";

class CategoryProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		axios
			.get("https://fakestoreapi.com/products/")
			.then((res) => this.setState({ products: res.data }));
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
