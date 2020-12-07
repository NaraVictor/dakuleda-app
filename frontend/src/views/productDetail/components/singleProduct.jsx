import React from "react";
import { Row, Container } from "react-bootstrap";

const SingleProduct = (props) => {
	return (
		<Container>
			<Row as="section" className="py-4">
				<article className="col-md-1">gallery of images</article>
				<article className="col-md-6 col-sm-12 bg-gray">
					<img
						src="https://via.placeholder.com/150"
						alt="single product"
						id="single-product"
					/>
				</article>
				<article className="col-md-5 col-sm-12">
					<h2>Product Details</h2>
				</article>
			</Row>
		</Container>
	);
};

export default SingleProduct;
