// import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Icon } from "@iconify-icon/react";

import dataCard from "../api/destionation";

const popularCardSwiper = () => {
  return (
    <>
      <div className="flex flex-col w-full h-auto gap-10">
        <div className="container flex items-center justify-between w-full h-auto">
          <div className="flex flex-col w-full gap-5 container-title-popular">
            <p className="font-bold text-secondary">TEMUKAN</p>
            <h3 className="font-bold pr-[200px] text-[#171717]">
              Destinasi Populer yang Wajib Anda Kunjungi
            </h3>
          </div>
          <div className="flex flex-col w-full gap-5 container-title-popular">
            <p className="font-bold text-secondary">TEMUKAN</p>
            <h3 className="font-bold pr-[200px] text-[#171717]">
              Destinasi Populer yang Wajib Anda Kunjungi
            </h3>
          </div>
        </div>
        <div className="w-full h-auto my-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            loop={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={false}
            navigation={true}
            modules={[Pagination, Navigation]}
            className=""
          >
            {dataCard.map((data, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center sm:block sm:items-start sm:justify-start"
              >
                <div className="card-popular w-[400px] h-[456px] flex flex-col justify-between p-3 rounded-xl border-[1px] border-gray-300">
                  <div
                    className="w-full h-full !max-w-[377px] !max-h-[280px] p-3 rounded-xl"
                    style={{
                      backgroundImage: `url(${data.thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="flex items-center justify-evenly w-[67px] py-2 rounded-full bg-[#ffffff2b]">
                      <Icon
                        icon="mingcute:star-fill"
                        width="16"
                        height="16"
                        style={{ color: "#ff9b48" }}
                      />
                      <span className="text-sm text-white">{data.rating}</span>
                    </div>
                  </div>
                  <span className="w-fit text-[#171717] font-bold text-3xl">
                    {data.name}
                  </span>
                  <div className="flex gap-2 w-fit">
                    <Icon
                      icon="fluent:location-16-filled"
                      width="24"
                      height="24"
                      style={{ color: "#4c82fe" }}
                    />
                    <span className="text-xl">
                      {data.location}
                      <a href={data.locationLink}></a>
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                   <span className="font-bold text-[26px] text-[#171717]">Rp. {data.price}</span>
                   <button className="px-5 py-3 text-lg font-bold text-white rounded-full bg-primary">Selengkapnya</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default popularCardSwiper;