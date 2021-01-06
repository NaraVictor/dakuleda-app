import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./addToCartButton";
import BuyItemButton from "./buyItemButton";

const ProductListView = (props) => {
	const { title, price, image, manufacturer, description } = props.prod;

	return (
		<article className="product-list">
			<div className="row">
				<div className="col-2 no-gutters">
					<Link to={`/p/${title}`} title={title} className="col">
						<img
							src={image}
							alt="product"
							className="mr-3 product-list-image"
						/>
					</Link>
				</div>

				<div className="col-md-6 col product-title-details pl-5">
					<Link to={`/p/${title}`} title={title}>
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
					<AddToCartButton prod={props.prod} classes="d-md-block my-md-3" />
					<BuyItemButton prod={props.prod} classes="d-md-block" />
				</div>
			</div>
		</article>
	);
};

export default ProductListView;
