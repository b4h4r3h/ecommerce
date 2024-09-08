import { useAllProducts } from "./hooks/useAllProducts";
import "../../index.css";
import ProductCard from "../components/ProductCard";
import BannerSwiper from "./bannerSwiper/BannerSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import CategoriesCard from "./components/CategoriesCard";
import Result from "../components/Result";
import Title from "../components/Title";

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
      <Title title="Categories" />
      <CategoriesCard />
      {allProductsError && (
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
      )}
      <section className="container mx-auto px-4">
        <Title title="Best Sellers!" />
        {allProductsLoading ? (
          <div className="w-full flex gap-4 justify-center">
            {screenWidth < 768
              ?
              <div className="w-full bg-white border-2 shadow-loadingCardShadow h-96 rounded-xl">
                <span className="block w-[calc(100%-10%)] m-auto bg-gray-middle h-56 mt-4 rounded-lg"></span>
                <span className="block w-[calc(100%-10%)] m-auto bg-gray-middle h-3 mt-4 rounded-lg"></span>
                <span className="block w-[calc(100%-10%)] m-auto bg-gray-middle h-3 mt-4 rounded-lg"></span>
                <div className="flex px-4 justify-between items-end mt-2">
                  <span className="block w-24 bg-gray-middle h-3 mt-4 rounded-lg"></span>
                  <span className="block w-12 bg-gray-middle h-12 mt-4 rounded-lg"></span>
                </div>
              </div>
              :
              Array.from({ length: 4 }).map((item, i) => (
                <div key={i} className="w-full bg-white border-2 shadow-loadingCardShadow h-96 rounded-xl">
                  <span className="block w-[calc(100%-10%)] m-auto bg-gray-middle h-56 mt-4 rounded-lg"></span>
                  <span className="block w-[calc(100%-10%)] m-auto bg-gray-middle h-3 mt-4 rounded-lg"></span>
                  <span className="block w-[calc(100%-10%)] m-auto bg-gray-middle h-3 mt-4 rounded-lg"></span>
                  <div className="flex px-4 justify-between items-end mt-2">
                    <span className="block w-24 bg-gray-middle h-3 mt-4 rounded-lg"></span>
                    <span className="block w-12 bg-gray-middle h-12 mt-4 rounded-lg"></span>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
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
                slidesPerView: 3.6,
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
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
};

export default Home;