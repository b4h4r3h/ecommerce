import { useEffect, useState } from "react";
import { useAllProducts } from "./hooks/useAllProducts";
import "../../index.css";
import ProductCard from "../components/ProductCard";
import SkeletonImage from "antd/es/skeleton/Image";
import BannerSwiper from "./bannerSwiper/BannerSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
      <>
        <h2 className="text-2xl font-bold text-center mt-6 mb-2">
          {" "}
          Best Sellers!
        </h2>
        {allProductsLoading &&
          Array.from({ length: 10 }).map((item) => <SkeletonImage />)}
        {/* <Swiper
          slidesPerView={4.6}
          spaceBetween={16}
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
                <ProductCard
                  image={item?.image}
                  price={item?.price}
                  title={item?.title}
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper> */}

        <Swiper
          slidesPerView={1}
          spaceBetween={8}
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
            1280:{
                slidesPerView: 3.8,
                spaceBetween: 16,
            },
            1536: {
                slidesPerView: 4.4,
                spaceBetween: 16,
            }
          }}
          className="product-swiper"
        >
          {allProductsData?.map((item) => (
            <div key={item?.id}>
              <SwiperSlide>
                <ProductCard
                  image={item?.image}
                  price={item?.price}
                  title={item?.title}
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </>
    </>
  );
};

export default Home;
