import React from "react";
import { useProduct } from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";

const ProductsList = () => {
    const{isLoading,data:products,error,isError} =useProduct();

    console.log(products);
    if(isLoading){
        return <div className="w-full flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }
    if(isError){
        return  <div className="w-full flex justify-center item-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">{error.message}</h1>
    </div>
    }
	return <div className='w-full grid grid-cols-4 gap-4 '>
        {products && products?.map((product)=>{

            return <ProductCard key={product?.id} product={ product} />
        })}
    
    </div>;
};

export default ProductsList;