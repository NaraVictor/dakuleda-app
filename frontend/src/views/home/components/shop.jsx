import React, { Component } from "react";
import axios from "axios";
import Product from "./../../../components/shop/product";

class Shop extends Component {
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
		return (
			<section className="my-4">
				<h4>Shop</h4>
				<hr />
				<div className="row">
					{this.state.products.map((product) => (
						<article className="col-md-3 col-sm-6 my-3" key={product.id}>
							<Product prod={product} />
						</article>
					))}
				</div>
			</section>
		);
	}
}

export default Shop;
