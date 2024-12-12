import React from "react";
import { useCart } from "../contexts/CartContext";
import ProductCard from "../components/ProductCard";
import { MdDeleteForever, MdOutlineAddShoppingCart } from "react-icons/md";
import { toast } from "sonner";

const Cart = () => {
	const { cart, dispatch } = useCart();
	const subtotal = cart.reduce(
		(acc, curr) => acc + curr.price * curr.quantity,
		0
	);

	// Fixed shipping charge
	const shipping = 10;

	// Calculate total
	const total = subtotal + shipping;
	return (
		<div className='w-full h-[calc(100vh-12vh)] lg:min-h-[88vh] lg:h-full flex flex-col overflow-hidden'>
			<h1 className='pl-4 text-2xl font-bold text-start '>
				Your Cart Items ({cart?.length})
			</h1>
			<div className='flex flex-col-reverse w-full gap-2 p-4 mt-2 lg:p-0 lg:flex-row'>
				<div className='flex justify-start flex-col lg:max-w-[70%] w-full items-center   gap-2 h-[calc(100vh-40vh)] lg:h-[84vh] overflow-y-scroll  no-scrollbar'>
					{cart &&
						cart?.map((product) => {
							return (
								<div
									key={product?.id}
									className='flex flex-col items-center justify-start w-full bg-white border rounded-lg md:flex-row '>
									<div className='w-full h-full p-2 max-h-36 max-w-36'>
										<img
											src={product?.image}
											alt=''
											className='object-contain w-full h-full rounded-t-lg'
										/>
									</div>
									<div className='flex flex-col w-full h-full p-2 '>
										<div className='w-full '>
											<div className='flex items-center justify-between w-full'>
												<h1 className='text-lg font-bold'>{product?.title}</h1>
												<button
													className='p-2 text-xl border rounded-md hover:bg-green-400 hover:text-white'
													onClick={() =>
														dispatch({
															type: "REMOVE_FROM_CART",
															payload: product?.id,
														})
													}>
													<MdDeleteForever />
												</button>
											</div>
											<p className='text-sm max-h-24 max-w-[75%] my-2'>
												{product?.description &&
													product?.description.slice(0, 200)}
											</p>
										</div>
										<div className='flex items-center justify-start gap-4 p-2 border-t rounded-md'>
											<div className='w-full font-bold text-md'>
												$ <span className='font-normal '>{product?.price}</span>
											</div>
											<div className='w-full flex justify-between items-center md:max-w-[20%] border rounded-md'>
												<button
													className='px-4 py-2 border-r hover:bg-red-500 hover:text-white text-md hover-cursor-pointer'
													onClick={() =>
														dispatch({
															type: "UPDATE_QUANTITY",
															payload: {
																id: product?.id,
																quantity: product.quantity - 1,
															},
														})
													}>
													-
												</button>
												<p className='w-full px-4 text-center text-md'>
													{product.quantity}
												</p>
												<button
													className='px-4 py-2 border-l hover:bg-green-500 hover:text-white text-md'
													onClick={() =>
														dispatch({
															type: "UPDATE_QUANTITY",
															payload: {
																id: product?.id,
																quantity: product.quantity + 1,
															},
														})
													}>
													+
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
				<div className='flex justify-center flex-col lg:max-w-[30%] w-full h-fit items-start gap-2 border p-4 bg-white rounded-lg'>
					<h1 className='font-bold md:text-2xl'>Order Summary</h1>
					<div className='flex items-center justify-between w-full lg:p-2 '>
						<p className='font-bold lg:text-lg'>Subtotal: </p>
						<p className='font-bold lg:text-lg'>${subtotal.toFixed(2)}</p>
					</div>
					<div className='flex items-center justify-between w-full lg:p-2 '>
						<p className='font-bold lg:text-lg'>Shipping charges:</p>
						<p className='font-bold lg:text-lg'> ${shipping.toFixed(2)} </p>
					</div>
					<div className='flex items-center justify-between w-full lg:p-2'>
						<p className='font-bold lg:text-lg'>Total: ${total.toFixed(2)}</p>

						{/* <button
							className='p-2 text-sm border rounded-md hover:bg-green-400 hover:text-white'
							onClick={() => toast.success("Order Placed Successfully")}>
							<span> Proceed to Checkout</span>
						</button> */}
						<button className=' cartBtn' onClick={() => {toast.success("Order Placed Successfully"); dispatch({type:"CLEAR_CART"})}}>
							<svg
								className='cart '
								fill='white'
								viewBox='0 0 576 512'
								height='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z'></path>
							</svg>
							ADD TO CART
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='1em'
								viewBox='0 0 640 512'
								className='product '>
								<path d='M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z'></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
