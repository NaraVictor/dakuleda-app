import React, { Component } from "react";
import SimilarProducts from "./components/similarProducts";
import SingleProduct from "./components/singleProduct";
import Specifications from "./components/specifications";
import ProductDetailNav from "./components/productDetailNav";
import Reviews from "./components/reviews";
import BrowsingHistory from "./components/browsingHistory";
import ScrollToTopOnMount from "./../../components/scrollToTop";

class ProductDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<ScrollToTopOnMount />
				<SingleProduct />
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
