import React, { Component } from "react";
import CartItem from "./components/cartItem";
import CartSummary from "./components/cartSummary";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<section className="container mt-3">
				<h4>Your Cart (0 items) </h4>
				<div className="row mt-4">
					<article className="col-md-8">
						<CartItem />
						<hr />
						<CartItem />
						<hr />
						<CartItem />
						<hr />
						<CartItem />
					</article>
					<article className="col-md-4">
						<CartSummary />
						<a href="/checkout">checkout cheat</a>
					</article>
				</div>
			</section>
		);
	}
}

export default Cart;
