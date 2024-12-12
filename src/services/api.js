import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;


export const fetchProducts = async()=>{
    // console.log(baseURL);
    try {
        const response = await axios.get(`${baseURL}/products`);
        // console.log(response)
        return response.data; 
    } catch (error) {
        console.warn(error)
        throw error
    }
    
}



