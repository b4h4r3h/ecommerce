import { useAllProducts } from "./hooks/useAllProducts";
import "../../index.css";
import ProductCard from "../components/ProductCard";
import BannerSwiper from "./bannerSwiper/BannerSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import CategoriesCard from "./components/CategoriesCard";
import Result from "../components/Result";

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

  if (allProductsError) {
    return (
      <Result
      icon={
          <span
          className="icon-[solar--close-circle-bold] text-error-main"
          style={{ width: "68px", height: "68px" }}
        ></span>
      }
      status="error"
      description="Failed to fetch data."
      />
    )
  }

  return (
    <>
      <BannerSwiper />
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mt-6 mb-8 text-text-dark">
          Best Sellers!
        </h2>
        {allProductsLoading ? (
          <div className="w-full flex gap-4 justify-center">
            {screenWidth < 768
              ? 
              <span className="w-full bg-gray-low h-80 rounded-lg"></span>
              : 
              Array.from({ length: 4 }).map((item) => (
                // <SkeletonImage style={{ height: "320px", width:"300px"}} active />
                <span className="w-full bg-gray-low h-96 rounded-lg"></span>
              ))
              }
          </div>
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
        <CategoriesCard/>
      </section>
    </>
  );
};

export default Home;
