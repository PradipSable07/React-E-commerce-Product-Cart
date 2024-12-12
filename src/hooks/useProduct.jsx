import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../services/api"


export const useProduct =()=>{
    return useQuery({
        queryKey:['products'],
        queryFn:()=>fetchProducts(),
        refetchOnWindowFocus: false,
    })
}