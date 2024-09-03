import { axiosInstance } from "./axios";
import { GetAllProducts } from "../interface/products";

export const getAllProducts = async () => {
    const {data} = await axiosInstance.get<GetAllProducts[]>("products")
    return data;
}

export const getAllCategories = async () => {
    const {data} = await axiosInstance.get<string[]>("products/categories")
    return data;
}