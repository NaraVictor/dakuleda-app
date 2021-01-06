import React, { createContext } from "react";

export const cartContext = createContext();

class CartContext extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cart: [],
			success: false,
		};
	}

	handleClearCart = () => {
		this.setState({ success: !this.state.success, cart: [] });
	};

	handleAddToCart = (prod) => {
		const item = this.state.cart.filter((item) => item.name === prod.name);
		this.state.success && this.setState({ success: false });

		// check if product already exists
		if (item.length > 0) {
			// if so, increase qty instead
			// const foundItem = item[0];
			item[0].quantity = item[0].quantity + 1;
			return item[0];
		}

		// if not, add entire item to cart
		const updatedCart = [...this.state.cart, { ...prod, quantity: 1 }];
		this.setState({ cart: updatedCart });
	};

	handleRemoveFromCart = (name) => {
		// re-create new cart without removed item
		const newCart = this.state.cart.filter((item) => item.name !== name);
		this.setState({ cart: newCart });
	};

	render() {
		return (
			<cartContext.Provider
				value={{
					cart: this.state.cart,
					addToCart: this.handleAddToCart,
					removeFromCart: this.handleRemoveFromCart,
					clearCart: this.handleClearCart,
					success: this.state.success,
				}}>
				{this.props.children}
			</cartContext.Provider>
		);
	}
}

export default CartContext;
