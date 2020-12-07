import React, { Component } from "react";
import Product from "./../../../components/shop/product";

class Shop extends Component {
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
