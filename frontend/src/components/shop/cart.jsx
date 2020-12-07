import React from "react";
import cartIcon from "../../static/svg/cart.svg";

const CartIcon = () => {
	// const { cart } = useContext();

	return (
		<span>
			<img src={cartIcon} height="30" alt="cart icon" />
			<span className="badge dc-bg-black text-white">0</span>

			{/* {cart.length ? (
				<span>
					<span className="badge dc-bg-black text-white">{cart.length}</span>
				</span>
			) : (
				<span className="badge dc-bg-black text-white">0</span>
			)} */}
		</span>
	);
};

export default CartIcon;
