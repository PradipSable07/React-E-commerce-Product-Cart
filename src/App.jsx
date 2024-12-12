import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{ path: "/", element: <ProductsList /> },
			{ path: "/cart", element: <Cart /> },
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
