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

	async componentDidMount() {
		await axios
			.get("http://127.0.0.1:8000/api/categories/")
			.then((res) => this.setState({ categories: res.data.categories }));
	}

	render() {
		return (
			<section>
				<h4>Shop by Category</h4>
				<hr />

				<Row>
					{this.state.categories.map((cat) => (
						<div className="col-md-3 col-6 my-3" key={cat.id}>
							<Category category={cat} />
						</div>
					))}
				</Row>
			</section>
		);
	}
}

export default ShopByCategory;
