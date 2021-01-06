import React, { Component } from "react";
import Product from "./../../../components/shop/product";
import { SlimSlider } from "./../../../components/carousel";
import { SplideSlide } from "@splidejs/react-splide";

const similar = [
	{
		title: "beats solo headset",
		image: "https://elcopcbonline.com/photos/product/4/176/4.jpg",
		price: 250,
		manufacturer: "beats",
	},
	{
		title: "Black n White Boots",
		image: "https://elcopcbonline.com/photos/product/2/174/2.jpg",
		price: 150,
		manufacturer: "Converse",
	},
	{
		title: "beats solo headset",
		image: "https://elcopcbonline.com/photos/product/4/176/4.jpg",
		price: 250,
		manufacturer: "beats",
	},

	{
		title: "Black n White Boots",
		image: "https://elcopcbonline.com/photos/product/2/174/2.jpg",
		price: 150,
		manufacturer: "Converse",
	},
	{
		title: "beats solo headset",
		image: "https://elcopcbonline.com/photos/product/4/176/4.jpg",
		price: 250,
		manufacturer: "beats",
	},
	{
		title: "Black n White Boots",
		image: "https://elcopcbonline.com/photos/product/2/174/2.jpg",
		price: 150,
		manufacturer: "Converse",
	},
];

class SimilarProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let sn = 1,
			w = window.innerWidth;

		if (w >= 799) sn = 3;
		if (w >= 999) sn = 4;

		return (
			<section className="container py-5">
				<h4>Similar Products</h4>
				<hr />
				{/* <article className="row"> */}
				<SlimSlider slideNo={sn} duration={3000}>
					{similar.map((item, index) => (
						<SplideSlide>
							<Product
								key={item.title}
								hideButtons={true}
								hideSeparator={true}
								prod={item}
							/>
						</SplideSlide>
					))}
				</SlimSlider>
				{/* </article> */}
			</section>
		);
	}
}

export default SimilarProducts;
