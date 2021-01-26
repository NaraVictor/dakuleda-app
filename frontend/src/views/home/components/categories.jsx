import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Category from "../../../components/shop/category";
import { getData } from "./../../../utils/apiCall";

class ShopByCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
		};
	}

	async componentDidMount() {
		await getData("categories/").then((res) =>
			this.setState({ categories: res.data.categories })
		);
	}

	render() {
		return (
			<section>
				<h4>Shop by Category</h4>
				<hr />

				<Row>
					{this.state.categories.map((cat) => (
						<div className="col-md-3 col-6 my-3" key={cat.name}>
							<Category category={cat} />
						</div>
					))}
				</Row>
			</section>
		);
	}
}

export default ShopByCategory;
