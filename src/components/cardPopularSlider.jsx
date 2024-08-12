import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Icon } from "@iconify-icon/react";

import formatPrice from "../utils/rupiahFormatter";
import dataDestination from "../api/destionation";
import "../assets/css/components/popular.css";


const PopularCardSwiper = () => {
  const [resizeIconStar, setResizeIconStar] = useState("16");
  const [resizeIconLoc, setResizeIconLoc] = useState("24");

  const handleResizeIcon = () => {
    if (window.innerWidth < 480) {
      setResizeIconStar("12");
      setResizeIconLoc("14");
    } else if (window.innerWidth < 768) {
      setResizeIconStar("14");
      setResizeIconLoc("18");
    } else {
      setResizeIconStar("16");
      setResizeIconLoc("24");
    }
  };

  useEffect(() => {
    handleResizeIcon();
    window.addEventListener('resize', handleResizeIcon);
    // Always cleanup event listener on component unmount or to prevent memory leak
    return () => {
      window.removeEventListener('resize', handleResizeIcon);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-auto gap-7 swiper-controller">
        {/* Heading area */}
        <div className="container flex items-center w-full h-auto">
          <div className="flex flex-col w-full container-title-popular">
            <p id="sub-title-swiper-card" className="text-xl font-bold md:text-3xl text-secondary">TEMUKAN</p>
            <h3 id="title-swiper-card" className="font-bold pr-[130px] sm:pr-[130px] md:pr-[200px] lg:pr-[400px] xl:pr-[500px] 2xl:pr-[700px] text-3xl sm:text-4xl md:text-6xl text-[#171717]">
              Destinasi Populer yang Wajib Anda Kunjungi
            </h3>
          </div>
        </div>
        {/* Card swiper area */}
        <div id="container-swiper-card" className="w-full h-auto">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={0}
            loop={false}
            breakpoints={{
              330: {
                slidesPerView: 1.3,
                spaceBetween: 0,
              },
              350: {
                slidesPerView: 1.4,
                spaceBetween: 0,
              },
              400: {
                slidesPerView: 1.5,
                spaceBetween: 0,
              },
              560: {  
                slidesPerView: 2,
                spaceBetween: 0,
              },
              876: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 0,
              },
              1300: {
                slidesPerView: 3.3,
                spaceBetween: 0,
              },
            }}
            pagination={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
          >
            {dataDestination.map((data, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center sm:block sm:items-start sm:justify-start"
              >
                <div className="card-popular w-[250px] h-[306px] sm:w-[300px] sm:h-[356px] md:w-[350px] md:h-[406px] lg:w-full lg:h-[456px] max-w-[400px] max-h-[456px] flex flex-col justify-between p-3 rounded-xl md:rounded-3xl border-[1px] border-gray-300">
                  {/* image area */}
                  <div
                    className="card-image-popular w-[227px] h-[180px] sm:w-[277px] sm:h-[220px] md:w-[327px] md:h-[230px] lg:w-full lg:h-full !max-w-[377px] !max-h-[280px] p-3 rounded-lg md:rounded-xl"
                    style={{
                      backgroundImage: `url(${data.thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex items-center justify-between gap-1 sm:gap-0 sm:justify-evenly w-fit sm:w-[67px] py-[6px] px-3 sm:py-2 sm:px-2 rounded-full bg-[#ffffff43]">
                      <Icon
                        icon="mingcute:star-fill"
                        style={{ color: "#ff9b48" }}
                        width={resizeIconStar}
                        height={resizeIconStar}
                      />
                      <span className="text-xs text-white sm:text-sm">{data.rating}</span>
                    </div>
                  </div>
                  {/* title area */}
                  <span className="w-fit text-[#171717] font-bold text-lg sm:text-xl md:text-3xl">
                    {data.name}
                  </span>
                  {/* icon and location area */}
                  <Link to={data.locationLink} target="_blank" className="flex items-center gap-1 sm:gap-2 w-fit">
                    <Icon
                      icon="fluent:location-16-filled"
                      width={resizeIconLoc}
                      height={resizeIconLoc}
                      style={{ color: "#4c82fe" }}
                    />
                    <span className="text-sm sm:text-md md:text-xl">
                      {data.location}
                    </span>
                  </Link>
                  {/* price and button area */}
                  <div className="flex items-center justify-between w-full sm:!mt-4">
                    <span className="font-bold text-lg sm:text-[16px] md:text-[26px] text-[#171717]">
                      {formatPrice(data.price)}
                    </span>
                    <button className="px-4 py-2 text-sm font-normal text-white rounded-full md:font-semibold sm:px-8 md:px-10 md:py-[10px] sm:text-md md:text-lg bg-primary">
                      Lihat
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="button-controller">
            <div className="button-swiper">
              <div className="swiper-button-prev swiper-button-disabled"></div>
              <div className="swiper-button-next swiper-button-disabled"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCardSwiper;