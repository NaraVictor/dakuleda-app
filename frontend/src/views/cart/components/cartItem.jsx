import React from "react";

const CartItem = (props) => {
	const { title, category, image, qty } = props;

	const qtyControl = (
		<select name="cart-qty" className="control-slim cart-qty">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</select>
	);

	const prices = (
		<span className="cart-prices">
			<h4>GHS 100</h4>
			<p>
				<strike>GHS 130</strike>
			</p>
		</span>
	);

	const deleteButton = (
		<span className="cart-delete">
			Delete
			<ion-icon name="trash-outline"></ion-icon>
		</span>
	);

	let isMobile,
		size = window.innerWidth;

	if (size >= 768) isMobile = false;
	else isMobile = true;

	return (
		<div className="row">
			<div className="col-2">
				<img
					src="https://elcopcbonline.com/photos/product/4/176/4.jpg"
					alt="cart product"
					className="cart-image"
				/>
			</div>
			<div className="col-md-5 col ml-3 ml-md-0 cart-detail">
				<h4>Dr Dre Solo beats (product name)</h4>
				<p>category</p>

				<div className="cart-detail-sm">
					{isMobile ? (
						<div className="row ml-1">
							<span>{prices}</span>
							<span className="mx-4">{qtyControl}</span>
							<span className="pt-2">{deleteButton}</span>
						</div>
					) : (
						""
					)}
				</div>
			</div>

			<div className="col-md-2 text-center">{isMobile ? "" : qtyControl}</div>

			<div className="col-md-2">
				{isMobile ? (
					""
				) : (
					<>
						{prices}
						{deleteButton}
					</>
				)}
			</div>
		</div>
	);
};

export default CartItem;
