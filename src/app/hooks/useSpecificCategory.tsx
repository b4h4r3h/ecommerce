import { queryKeys } from "../../reactQueryUtilities/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getSpecificCategory } from "../../services/categories";
import { useParams } from "react-router-dom";

export const useSpecificCategory = () => {
    const { name } = useParams<{ name: string }>()

    return useQuery({
        queryKey: [queryKeys.product.GET_SPECIFIC_CATEGORY, name],
        enabled: !!name,
        queryFn: () => getSpecificCategory(name as string),
    })
}