import React from "react";
import { Row, Container } from "react-bootstrap";

const SingleProduct = (props) => {
	return (
		<Container>
			<Row as="section" className="py-4">
				<article className="col-md-1 single-product-gallery">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</article>
				<article className="col-md-7 col-10 bg-gray">
					<img
						src="https://elcopcbonline.com/photos/product/2/174/2.jpg"
						alt="single product"
						id="single-product"
						className="single-product-image"
					/>
				</article>
				<article className="col-md-4 col-sm-12 mt-4 single-product-details">
					<h3>
						Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
					</h3>
					<p className="mt-4">
						<h4>
							<strong>GHS 900.00</strong>
						</h4>
						<strike>GHS 110</strike>
					</p>

					<small className="d-block">qty</small>
					<select name="cart-qty" className="cart-qty">
						<option value="1">1</option>
						<option value="2">2</option>
					</select>

					<button className="btn-dc-white ml-3">Add to cart</button>
					<button className="btn-primary-filled px-3">Buy Item</button>
				</article>
			</Row>
		</Container>
	);
};

export default SingleProduct;
