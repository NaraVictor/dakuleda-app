import React, { Component } from "react";
import axios from "axios";
import Product from "./../../../components/shop/product";

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fakeapi: [],
			products: [],
		};
	}

	async componentDidMount() {
		// await axios
		// 	.get("https://fakestoreapi.com/products/")
		// 	.then((res) => this.setState({ fakeapi: res.data }));

		await axios
			.get("http://127.0.0.1:8000/api/products/")
			.then((res) => this.setState({ products: res.data.products }));
	}

	render() {
		return (
			<section className="my-4">
				<h4>Shop</h4>
				<hr />
				{/* <div className="row">
					{this.state.fakeapi.map((product) => (
						<article className="col-md-3 col-sm-6 my-3" key={product.id}>
							<Product prod={product} fakeapi={true} />
						</article>
					))}
				</div> */}
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
