import axios from "axios";
import instance from "../../utils/axios.config";

export const fetchProduct = async () =>{

    const data = await instance.get("/products");
    // console.log(data.data)
    return data.data
} 

export const postProduct = async (productData)=>{
    await axios.post("/product", productData)
}

export const deleteProduct = async (id)=>{
    await axios.delete(`/product/${id}`)
}