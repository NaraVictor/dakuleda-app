import React, { Component } from "react";

// components
import SimilarProducts from "./components/similarProducts";
import SingleProduct from "./components/singleProduct";
import Specifications from "./components/specifications";
import ProductDetailNav from "./components/productDetailNav";
import Reviews from "./components/reviews";
import BrowsingHistory from "./components/browsingHistory";
import ScrollToTopOnMount from "./../../components/scrollToTop";

// context
import { shopContext } from "./../../context/shopContext";

class ProductDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prod: [],
			specifications: [],
			reviews: [],
		};
	}

	static contextType = shopContext;

	componentDidMount() {
		const prod = this.context.getSelectedItem();
		console.log(prod);

		if (!prod) {
			console.log("No selected product");
		}

		// console.log("Selected item ", prod);
		this.setState({
			prod,
		});

		// calls for similar products, specifications, n reviews
		this.fetchSimilarProducts();
		this.fetchSpecifications();
		this.fetchReviews();
	}

	fetchSimilarProducts = async () => {
		await console.log("Fetching similar products...");
	};

	fetchSpecifications = async () => {
		await console.log("Fetching specs");
	};

	fetchReviews = async () => {
		await console.log("Fetching product reviews");
	};

	render() {
		return (
			<>
				<ScrollToTopOnMount />
				<SingleProduct prod={this.state.prod} />
				<SimilarProducts />
				<ProductDetailNav />
				<div style={{ backgroundColor: "#eee" }} className="py-2">
					<Specifications />
					<Reviews />
					<BrowsingHistory />
				</div>
			</>
		);
	}
}

export default ProductDetail;
