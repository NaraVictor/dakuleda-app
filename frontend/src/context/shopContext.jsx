import React, { createContext } from "react";

export const shopContext = createContext();

class ShopContext extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: [],
			buy: [],
		};
	}

	handleBoughtItem = () => {
		console.log("Bought item is ", this.state.buy);
	};

	handleBuyItem = (item) => {
		// const { buy } = this.state;
		// buy.length = 0;
		// buy.push(item);
		const newItem = [item];
		this.setState({ buy: newItem });
	};

	handleSelectItem = (item) => {
		// const { selectedItem: si } = this.state;

		// if (si.length < 1 || si === undefined) {
		// const newItem = si.push({ ...item });
		// this.setState({ selectedItem: [{ ...item }] });
		// return;
		// }

		// si.length = 0;
		// si.push(item);
		this.setState({ selectedItem: { ...item } });
	};

	handleSelectedItem = () => {
		const { selectedItem } = this.state;
		if (selectedItem.length < 1) {
			return false;
		}

		return { ...selectedItem };
	};

	render() {
		return (
			<shopContext.Provider
				value={{
					getSelectedItem: this.handleSelectedItem,
					selectItem: this.handleSelectItem,
					buyItem: this.handleBuyItem,
					getBuyItem: this.handleBoughtItem,
				}}>
				{this.props.children}
			</shopContext.Provider>
		);
	}
}

export default ShopContext;
