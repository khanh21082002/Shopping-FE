import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CartComponent from "../CartProductCompornent/CartComponent";

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const DealProductComponent = () => {
  return (
    <div className="flex flex-col  rounded-xl bg-[#ff463b] p-4">
      <div className="flex justify-between py-4">
        <div className="flex flex-col">
          <a
            href="/"
            className="text-2xl font-bold text-white hover:text-[#ffe818]"
          >
            Săn Sale đón lễ
          </a>
          <span className="text-white">
            Hàng ngàn sản phẩm giảm giá diễn ra từ ngày 30/4 đến 30/6
          </span>
        </div>
        <div className="flex">
          <div className="text-white">Kết thúc sau</div>
          <div
            className="time"
            data-countdown="countdown"
            data-date="12-10-2023-09-15-45"
          >
            <div className="lof-labelexpired hidden"> Hết hạn </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-[#ffaaaf] p-3">
      <Swiper
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
          spaceBetween={30} // Khoảng cách giữa các slide
          breakpoints={{
            1024: {
              slidesPerView: 5
            },
            768: {
              slidesPerView: 3 
            },
            320: {
              slidesPerView: 2 
            }
          }}
        >
          <SwiperSlide><CartComponent /></SwiperSlide>
          <SwiperSlide><CartComponent /></SwiperSlide>
          <SwiperSlide><CartComponent /></SwiperSlide>
          <SwiperSlide><CartComponent /></SwiperSlide>
          <SwiperSlide><CartComponent /></SwiperSlide>
          <SwiperSlide><CartComponent /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DealProductComponent;
