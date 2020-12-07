import { Route, Redirect, Switch } from "react-router-dom";

// components
import NavBar from "../components/nav/navbar";
import SubNav from "../components/nav/subNav";
import Home from "../views/home/index";
import Footer from "./../components/footer";
import ProductDetail from "./../views/productDetail/index";
import ProductCategory from "./../views/category/index";
import Cart from "./../views/cart/index";
import CheckOut from "./../views/cart/components/checkout";

const ShopRoutes = () => {
	return (
		<>
			<Switch>
				<div className="page-container">
					<div className="page-content">
						<NavBar />
						<SubNav />
						<Route path="/" exact component={Home} />
						<Route path="/c/:category" exact component={ProductCategory} />
						<Route path="/product/:name" component={ProductDetail} />
						<Route path="/cart" component={Cart} />
						<Route path="/checkout" component={CheckOut} />
					</div>
					<Footer />
				</div>
			</Switch>
		</>
	);
};

export default ShopRoutes;
