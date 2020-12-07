import React from "react";
import { Link } from "react-router-dom";

const ProductListView = (props) => {
	const { title, price, image, manufacturer, description } = props.prod;

	return (
		<article className="product-list">
			<div className="row">
				<div className="col-2 no-gutters">
					<Link to={`/product/${title}`} title={title} className="col">
						<img
							src={image}
							alt="product"
							className="mr-3 product-list-image"
						/>
					</Link>
				</div>

				<div className="col-md-6 col product-title-details pl-5">
					<Link to={`/product/${title}`} title={title}>
						<h4>{title}</h4>
						<p className="product-list-manufacturer">
							{manufacturer ? manufacturer : "manufacturer not specified"}
						</p>
						<small id="product-list-description">{description}</small>

						{/* for small screen only */}
						<div className="product-list-sm-details">
							<h4>GHS {price}</h4>
							<p>
								<strike>GHS 110</strike>
							</p>
						</div>
					</Link>
				</div>

				<div className="col-md-4 product-list-footer pl-5 ml-5 ml-md-0">
					<div className="product-list-prices">
						<h4>GHS {price}</h4>
						<p>
							<strike>GHS 110</strike>
						</p>
					</div>
					<button className="btn-dc-white d-md-block my-md-3">
						Add to cart
					</button>
					<button className="btn-dc-primary d-md-block">Buy now</button>
				</div>
			</div>
		</article>
	);
};

export default ProductListView;
