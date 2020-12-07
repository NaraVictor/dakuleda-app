// react
import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import ShopRoutes from "./routes/shopRoutes";

// css
// import "./App.css";
import "./static/css/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<BrowserRouter>
			<ShopRoutes />
		</BrowserRouter>
	);
}

export default App;

// ion icon imported using a script tag in the index.html
