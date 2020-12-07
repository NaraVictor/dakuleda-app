import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Category from "../../../components/shop/category";

class ShopByCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
		};
	}

	componentDidMount() {
		fetch("https://fakestoreapi.com/products?limit=4")
			.then((res) => res.json())
			.then((json) => this.setState({ categories: json }));
	}

	render() {
		return (
			<section>
				<h4>Shop by Category</h4>
				<hr />

				<Row>
					{this.state.categories.map((cat) => (
						<article className="col-md-3 col-sm-6 my-3" key={cat.id}>
							<Category category={cat} />
						</article>
					))}
				</Row>
			</section>
		);
	}
}

export default ShopByCategory;
