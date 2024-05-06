import  axios  from "axios";

export const getAllProduct = async () => {   
    const res = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/product/get-all`)
    return res.data
}