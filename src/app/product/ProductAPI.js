import instance from "../../utils/axios.config";

export const fetchProduct = async () =>{

    const data = await instance.get("/products");
    console.log(data.data)
    return data.data
} 