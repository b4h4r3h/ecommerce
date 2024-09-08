import { queryKeys } from "../../reactQueryUtilities/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../../services/products";
import { useParams } from "react-router-dom";

export const useProductDetail = () => {
    const { id } = useParams<{ id: string }>()

    return useQuery({
        queryKey: [queryKeys.product.GET_PRODUCT_DETAIL, id],
        enabled: !!id,
        queryFn: () => getProductDetail(id as string),
    })
}