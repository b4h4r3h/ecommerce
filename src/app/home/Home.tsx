import { useAllProducts } from "./hooks/useAllProducts";
import "../../index.css";
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
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const shouldShowPagination = screenWidth < 1024;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {
    data: allProductsData,
    isError: allProductsError,
    isLoading: allProductsLoading,
  } = useAllProducts();

  return (
    <>
      <BannerSwiper />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mt-6 mb-8">Best Sellers!</h2>
        {allProductsLoading ? (
          Array.from({ length: 10 }).map((item) => <SkeletonImage />)
        ) : (
          <Swiper
            slidesPerView={shouldShowPagination ? 1 : 2}
            spaceBetween={shouldShowPagination ? 8 : 16}
            pagination={shouldShowPagination ? { dynamicBullets: true } : false}
            navigation={shouldShowPagination ? false : true}
            modules={[Navigation, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2.3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3.8,
                spaceBetween: 16,
              },
              1536: {
                slidesPerView: 4.4,
                spaceBetween: 16,
              },
            }}
            className="product-swiper"
          >
            {allProductsData?.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  image={item.image}
                  price={item.price}
                  title={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default Home;

