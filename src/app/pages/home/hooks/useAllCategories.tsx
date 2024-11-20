import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../reactQueryUtilities/queryKeys";
import { getAllCategories } from "../../../../services/products";

export const useAllCategories = () => {
    return useQuery({
      queryFn: getAllCategories,
      queryKey: [queryKeys.product.GET_ALL_CATEGORIES],
    })
}