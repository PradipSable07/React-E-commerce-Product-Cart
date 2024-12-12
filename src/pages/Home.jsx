import React from "react";
import { FaCarTunnel } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "../contexts/CartContext";

const Home = () => {
	const { cart } = useCart();
	return (
		<main className="bg-slate-50">
			<nav className='  border-b py-4 px-4  border-gray-200 sticky top-0 z-40 bg-white'>
				<div className='flex justify-between items-center max-w-7xl mx-auto w-full'>
					<Link to={"/"} className='text-2xl  text-red-700 font-bolder w-full'>
						E-Commerce
					</Link>

					<Link to={"/cart"} className='relative'>
						<GiShoppingCart className='text-3xl font-extrabold' />
						<span className='absolute -top-2 -right-2 bg-blue-300 text-sm text-white px-1  rounded-full'>
							{cart?.length || 0}
						</span>
					</Link>
				</div>
			</nav>
            <section className="max-w-7xl mx-auto pt-4 px-2 ">

			<Outlet />
            </section>
		</main>
	);
};

export default Home;
