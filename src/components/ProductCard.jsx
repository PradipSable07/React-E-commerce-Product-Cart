import React from "react";
import { useCart } from "../contexts/CartContext";
import { PiCaretCircleDown } from "react-icons/pi";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
	const { dispatch } = useCart();
	console.log(product);

	const { image, title, description, price, id, category, rating } = product;

	const cropDes =
		description.length > 100 ? description.slice(0, 100) + "..." : description;
	const cropTitle =
		title.length > 30 ? title.slice(0, 25) + "..." : title;
	return (
		<div className='max-w-sm rounded-lg   border bg-white '>
			<div className='max-h-48 h-full w-full p-2'>
				<img
					src={image}
					alt={title}
					className='w-full h-full rounded-t-lg object-contain '
				/>
			</div>
			<div className='flex flex-col w-full h-full p-2 border-t '>
				<div className='w-full  '>
					<h3 className='text-lg font-bold'>{cropTitle}</h3>
					<p className="text-sm min-h-24 mt-2">{cropDes}</p>
				</div>
				<div className='flex justify-between items-center p-2 '>
					<p>$ {price}</p>
					<button className="py-2 px-4 hover:bg-green-400 border hover:text-white rounded-md"
						onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
						<MdOutlineAddShoppingCart />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
