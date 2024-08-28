import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../reactQueryUtilities/queryKeys";
import { getAllProducts } from "../../../services/products";

export const useAllProducts = () => {
    return useQuery({
      queryFn: getAllProducts,
      queryKey: [queryKeys.product.GET_ALL_PRODUCTS],
    })
}