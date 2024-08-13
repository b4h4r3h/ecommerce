import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FirstBanner from "../banner/FirstBanner";
import SecondBanner from "../banner/SecondBanner";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerSwiper: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <FirstBanner />
      </SwiperSlide>
      <SwiperSlide>
        <SecondBanner />
      </SwiperSlide>
    </Swiper>
  );
};
export default BannerSwiper;
