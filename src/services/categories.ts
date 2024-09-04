import { GetAllProducts } from "../interface/products";
import { axiosInstance } from "./axios";

export const getSpecificCategory = async (name:string) => {
    const {data} = await axiosInstance.get<GetAllProducts[]>(`products/category/${name}`)
    return data
}