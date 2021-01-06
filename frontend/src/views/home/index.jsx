import React, { Component } from "react";
import { Container } from "react-bootstrap";

import ShopByCategory from "./components/categories";
import Deals from "./components/deals";
import Shop from "./components/shop";
import DefaultSlider from "./../../components/carousel";
import { SplideSlide } from "@splidejs/react-splide";

//

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Container>
				<DefaultSlider>
					<SplideSlide>
						<img
							src="https://picsum.photos/1200/350"
							alt="slider"
							className="slider-image"
						/>
					</SplideSlide>

					<SplideSlide>
						<img
							src="https://placeimg.com/1200/350/any"
							alt="slider"
							className="slider-image"
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src="https://placeimg.com/1200/350/any"
							alt="slider"
							className="slider-image"
						/>
					</SplideSlide>
				</DefaultSlider>
				<br />
				{/* <Deals /> */}
				<ShopByCategory />
				<Shop />
			</Container>
		);
	}
}

export default Home;
