import { useProductDetail } from "./hooks/useProductDetail"

const ProductDetail: React.FC<{}> = () => {
    const {data: productDetailData, isLoading: productDetailLoading, isError: productDetailError} = useProductDetail()
    console.log("data",productDetailData)
    return ""
}
export default ProductDetail