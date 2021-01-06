import { Route, Switch } from "react-router-dom";

// components
import NavBar from "../components/nav/navbar";
import SubNav from "../components/nav/subNav";
import Home from "../views/home/index";
import Footer from "./../components/footer";
import ProductDetail from "./../views/productDetail/index";
import ProductCategory from "./../views/category/index";
import Cart from "./../views/cart/index";
import CheckOut from "./../views/cart/components/checkout";
import CartContext from "./../context/cartContext";
import ShopContext from "../context/shopContext";

const ShopRoutes = () => {
	return (
		<Switch>
			<div className="page-container">
				<div className="page-content">
					<CartContext>
						<ShopContext>
							<NavBar />
							<SubNav />
							<Route path="/c/:category" exact component={ProductCategory} />
							<Route path="/p/:name" component={ProductDetail} />
							<Route path="/cart" component={Cart} />
							<Route path="/checkout" component={CheckOut} />
							<Route path="/" exact component={Home} />
						</ShopContext>
					</CartContext>
				</div>
				<Footer />
			</div>
		</Switch>
	);
};

export default ShopRoutes;
