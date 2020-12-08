import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Category from "../../../components/shop/category";
import axios from "axios";

class ShopByCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
		};
	}

	componentDidMount() {
		axios
			.get("https://fakestoreapi.com/products?limit=4")
			.then((res) => this.setState({ categories: res.data }));
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
