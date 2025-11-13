import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="h-[400px] my-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <img
              src="https://img.freepik.com/free-photo/people-working-out-indoors-together-with-dumbbells_23-2149175410.jpg?semt=ais_incoming&w=740&q=80"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold mb-2">Step Into Health</h2>
              <p className="text-lg">Jogging is a simple yet powerful way to boost your fitness. It improves stamina, strengthens the heart, </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <img
              src="https://cdn.britannica.com/83/126383-050-38B8BE25/Michael-Phelps-American-Milorad-Cavic-final-Serbia-2008.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold mb-2">Dive Into Fitness</h2>
              <p className="text-lg">"Swimming is a refreshing way to stay fit. It strengthens muscles, improves flexibility, .</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1713184149461-69b0abeb3daa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold mb-2">Here’s a good short heading for cyclin</h2>
              <p className="text-lg">Cycling is more than just exercise; it’s a journey to better health, mental clarity, and a greener planet. </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
