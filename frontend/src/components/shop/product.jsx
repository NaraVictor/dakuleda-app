import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
	const {
		name,
		regular_price,
		product_image,
		manufacturer_name,
		new_price,
		slug,
	} = props.prod;
	const { hideButtons, hideSeparator } = props;

	return (
		<article className="product text-center my-md-4">
			<Link to={`/product/${slug}`} title={name}>
				<div className="product-image">
					<img
						src={product_image}
						style={{ maxHeight: 200, maxWidth: 200 }}
						alt="product"
					/>
				</div>
				<div className="product-detail">
					<p className="m-0 product-title">{name}</p>
					<small>{manufacturer_name ?? "manufacturer"}</small>
					<div>
						<strong>GHS {new_price}</strong>{" "}
						<strike>
							<small>GHS {regular_price}</small>
						</strike>
					</div>

					{hideSeparator ? "" : <hr />}
				</div>
			</Link>
			{hideButtons ? (
				""
			) : (
				<div className="product-footer">
					<button className="btn-dc-white">Add to cart</button>
					<button className="btn-dc-primary">Buy now</button>
				</div>
			)}
		</article>
	);
};

export default Product;
