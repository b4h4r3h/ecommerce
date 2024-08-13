import { useAllProducts } from "./hooks/useAllProducts"
import "../../index.css"
import SecondBanner from "./banner/SecondBanner";
import ProductCard from "../components/ProductCard";
import SkeletonImage from "antd/es/skeleton/Image";
import BannerSwiper from "./bannerSwiper/BannerSwiper";

const Home :React.FC = () => {
    const {data: allProductsData, isError:allProductsError , isLoading: allProductsLoading} = useAllProducts();

return (
    <>
    <BannerSwiper/>
    {
        allProductsLoading && (
            Array.from({length: 10}).map((item) => (
                <SkeletonImage/>
            ))
        )
    }
    {allProductsData?.map((item) => (
        <div key={item?.id}>
        <ProductCard image={item?.image} price={item?.price} title={item?.title}/>
        </div>
    ))}
    </>
)
}

export default Home