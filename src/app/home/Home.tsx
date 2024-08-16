import { useAllProducts } from "./hooks/useAllProducts"
import "../../index.css"
import SecondBanner from "./banner/SecondBanner";
import ProductCard from "../components/ProductCard";
import SkeletonImage from "antd/es/skeleton/Image";
import BannerSwiper from "./bannerSwiper/BannerSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import FirstBanner from "./banner/FirstBanner";

const Home: React.FC = () => {
    const { data: allProductsData, isError: allProductsError, isLoading: allProductsLoading } = useAllProducts();


    return (
        <>
            <BannerSwiper />

            <>
                <h2 className="text-2xl font-bold text-center mt-6 mb-2"> Best Sellers!</h2>
                {
                allProductsLoading && (
                    Array.from({ length: 10 }).map((item) => (
                        <SkeletonImage />
                    ))
                )
            }
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="product-swiper"
            >
                {allProductsData?.map((item) => (
                    <div key={item?.id}>
                        <SwiperSlide>
                            <ProductCard image={item?.image} price={item?.price} title={item?.title} />
                        </SwiperSlide>


                    </div>
                ))}
            </Swiper>
            </>
        </>
    )
}

export default Home