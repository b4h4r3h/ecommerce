import { axiosInstance } from "./axios";
import { GetAllProducts } from "../interface/products";

export const getAllProducts = async (): Promise<GetAllProducts[]> => {
    const { data } = await axiosInstance.get("products");
    return data;
}

export const getAllCategories = async () => {
    const {data} = await axiosInstance.get<string[]>("products/categories")
    return data;
}