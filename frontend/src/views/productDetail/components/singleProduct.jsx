import React from "react";
import { Row, Container } from "react-bootstrap";
import AddToCartButton from "../../../components/shop/addToCartButton";
import BuyItemButton from "../../../components/shop/buyItemButton";

const SingleProduct = (props) => {
	const {
		name,
		number_in_stock,
		product_image,
		regular_price,
		new_price,
	} = props.prod;
	console.log(props.prod);

	let count = [];

	for (let i = 1; i <= number_in_stock; i++) {
		count.push(i);
	}

	const qtyControl = (
		<select name="cart-qty" className="cart-qty">
			{count.map((number) => (
				<option value={`${number}`}>{number}</option>
			))}
		</select>
	);

	return (
		<Container>
			<Row as="section" className="py-4 text-center text-md-left">
				<article className="col-md-1 single-product-gallery">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</article>
				<article className="col-md-7 col text-center  bg-gray">
					<img
						src={product_image}
						alt="single product"
						id="single-product"
						className="single-product-image"
					/>
				</article>
				<article className="col-md-4 col mt-4 single-product-details">
					<h3>{name}</h3>
					<div className="mt-4">
						<h4>
							<strong>GHS {new_price}</strong>
						</h4>
						<strike>GHS {regular_price}</strike>
					</div>

					<small className="d-block">qty</small>
					{qtyControl}

					<AddToCartButton classes="ml-3" prod={props.prod} />
					<BuyItemButton classes="btn-primary-filled px-3" prod={props.prod} />
				</article>
			</Row>
		</Container>
	);
};

export default SingleProduct;
