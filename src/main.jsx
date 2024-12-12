import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./contexts/CartContext.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={queryClient}>
		<CartProvider>
			<StrictMode>
				<App />
			</StrictMode>
		</CartProvider>
       <Toaster position="top-center" reverseOrder={false} richColors closeButton />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
);
