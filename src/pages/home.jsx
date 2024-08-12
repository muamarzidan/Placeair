import { useState, useEffect } from "react"
import { Icon } from "@iconify-icon/react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Popular from "../components/cardPopularSlider";
import imageChoosePlaceir from "../assets/images/thumbnail-choose-placeir.png";
import NumCountUp from "../utils/counterUp";
import "../assets/css/pages/home.css";  


export default function HomePage() {
  const [resizeIconBullet, setResizeIconBullet] = useState("16");

  const handleResizeIcon = () => {
    if (window.innerWidth < 480) {
      setResizeIconBullet("12");
    } else if (window.innerWidth < 1024) {
      setResizeIconBullet("14");
    } else {
      setResizeIconBullet("18");
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
      <Navbar />
      <main className="w-full h-auto bg-white">
        <section id="hero" className="relative flex flex-col items-center justify-center h-[45vh] sm:h-screen !mt-[75px] m-3 bg-top bg-cover md:!mt-3 rounded-xl bg-hero-home-placeir">
          <div className="absolute inset-0 bg-black rounded-xl opacity-35"></div>
          <div className="relative px-3">
          <h1 className="relative font-semibold text-center text-white px-0 sm:px-5 lg:px-[50px] xl:px-[100px] 2xl:px-[200px] text-4xl sm:text-5xl md:text-6xl xl:text-8xl">
            Jelajahi Pesona Alam  Nusantara yang Menakjubkan
          </h1>
          <p className="relative text-sm sm:text-md md:text-lg xl:text-2xl text-center px-0 sm:px-16 md:px-[50px] lg:px-[100px] xl:px-[220px] 2xl:px-[320px] text-white pt-5">Temukan destinasi menakjubkan di seluruh Nusantara. Rencanakan liburan  Anda sekarang dan temukan petualangan tak terlupakan di setiap sudut negeri.</p>
          </div>
        </section>
        <section id="popular" className="w-full h-auto my-10 md:my-20">
          <Popular />
        </section>
        <section id="calculation" className="w-full h-auto my-14 sm:my-20 md:my-24">
          <div className="container w-full h-auto">
            <div className="flex flex-col flex-wrap items-center justify-between w-full h-auto gap-5 p-6 bg-center bg-cover sm:p-10 md:gap-0 md:flex-row md:p-16 rounded-3xl bg-frame-two-placeir md:bg-frame-one-placeir">
              <span className="font-semibold pr-0 md:pr-[40px] text-white text-4xl lg:text-6xl xl:text-7xl basis-full md:basis-1/2 text-left sm:text-center md:text-left">Buat Perjalananan Anda Berkesan!</span>
              <div className="flex justify-between w-full h-auto basis-full md:basis-1/2">
                {/* Left side calculation area */}
                <div className="flex flex-col basis-1/2">
                  <div className="flex flex-col w-full h-full gap-2">
                    <span className="text-6xl text-center text-white sm:text-4xl lg:text-6xl xl:text-7xl">
                      <NumCountUp end={10} duration={2} /> +
                    </span>
                    <span className="text-lg text-center text-white lg:text-2xl xl:text-3xl">Provinsi tersedia</span>
                  </div>
                  <div className="flex flex-col w-full h-full gap-2 mt-5 md:mt-0">
                    <span className="text-6xl text-center text-white sm:text-center sm:text-4xl lg:text-6xl xl:text-7xl">
                      <NumCountUp end={20} duration={2} /> +
                    </span>
                    <span className="text-lg text-center text-white lg:text-2xl xl:text-3xl">Provinsi tersedia</span>
                  </div>
                </div>
                {/* Right side calculation area */}
                <div className="flex flex-col basis-1/2">
                  <div className="flex flex-col w-full h-full gap-2">
                    <span className="text-6xl text-center text-white sm:text-4xl lg:text-6xl xl:text-7xl">
                      <NumCountUp end={100} duration={2} /> +
                    </span>
                    <span className="text-lg text-center text-white lg:text-2xl xl:text-3xl">Destinasi Wisata</span>
                  </div>
                  <div className="flex flex-col w-full h-full gap-2 mt-5 md:mt-0">
                    <span className="text-6xl text-center text-white sm:text-4xl lg:text-6xl xl:text-7xl">
                      <NumCountUp end={200} duration={2} /> +
                    </span>
                    <span className="text-lg text-center text-white lg:text-2xl xl:text-3xl">Provinsi tersedia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="choose" className="w-full h-auto my-10 md:my-20">
          <div className="container flex flex-wrap items-center gap-8  sm:gap-10 md:gap-0 w-full h-auto md:h-[500px]">
            {/* Left/top side choose area */}
            <div className="flex flex-col justify-between w-full h-full gap-1 pr-0 xl:gap-2 xl:pr-28 basis-full md:basis-1/2">
              <h4 className="text-sm font-semibold sm:text-lg md:text-xl xl:text-2xl text-secondary">WHY CHOOSE US</h4> 
              <h3 className="text-2xl font-semibold sm:text-5xl xl:text-6xl">Mengapa Pilih Placeir?</h3> 
              <div className="flex flex-col justify-between w-full h-full !mt-3 xl:!mt-4 gap-1 xl:gap-6">
                <div className="flex flex-col w-full h-full gap-2">
                  <div className="flex items-center gap-2 w-fit">
                    <Icon icon="material-symbols:circle" width={resizeIconBullet} height={resizeIconBullet} style={{ color: "#4377ef" }} />
                    <h5 className="font-semibold text-md sm:text-2xl xl:text-3xl text-thridly">Lorem Ipsum</h5>
                  </div>
                  <p className="text-sm sm:text-xl xl:text-2xl text-fourly">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis semper dolor. Aenean sed mattis libero</p>
                </div>
                <div className="flex flex-col w-full h-full gap-2">
                  <div className="flex items-center gap-2 w-fit">
                    <Icon icon="material-symbols:circle" width={resizeIconBullet} height={resizeIconBullet} style={{ color: "#4377ef" }} />
                    <h5 className="font-semibold text-md sm:text-2xl xl:text-3xl text-thridly">Lorem Ipsum</h5>
                  </div>
                  <p className="text-sm sm:text-xl xl:text-2xl text-fourly">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis semper dolor. Aenean sed mattis libero</p>
                </div>
                <div className="flex flex-col w-full h-full gap-2">
                  <div className="flex items-center gap-2 w-fit">
                    <Icon icon="material-symbols:circle" width={resizeIconBullet} height={resizeIconBullet} style={{ color: "#4377ef" }} />
                    <h5 className="font-semibold text-md sm:text-2xl xl:text-3xl text-thridly">Lorem Ipsum</h5>
                  </div>
                  <p className="text-sm sm:text-xl xl:text-2xl text-fourly">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis semper dolor. Aenean sed mattis libero</p>
                </div>
              </div>
            </div>
            {/* Right/bottom side choose area */}
            <div className="flex items-center justify-between w-full h-full gap-2 basis-full md:basis-1/2">
              <img src={imageChoosePlaceir} alt="choose banner placeir" className="w-full h-full md:h-[70%] lg:h-[80%] xl:h-[95%] bg-center bg-no-repeat bg-cover rounded-2xl brightness-75 md:brightness-100" />
            </div>
          </div>
        </section>
        <section id="newssletter" className="w-full h-auto my-14 md:my-20">
          <div className="container w-full h-[264px] sm:h-[270px] lg:h-[350px] xl:h-[400px]">
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 xl:gap-8 bg-cover bg-center bg-newsletter-placeir rounded-[30px]">
              <div className="absolute inset-0 bg-black opacity-35 rounded-[30px]"></div>
              <span id="title-newsletter" className="relative font-semibold px-[30px] sm:px-[100px] md:px-[190px] lg:px-[200px] xl:px-[300px] text-center text-white text-2xl sm:text-4xl lg:text-6xl xl:text-7xl">Ayo Berlangganan ke Newsletter Kami</span>
              {/* button and input area */}
              <div id="newsletter-input" className="relative flex justify-between w-[270px] h-[43px] sm:h-[40px] sm:w-[280px] lg:w-[422px] xl:w-[482px] lg:h-[55px] xl:h-[61px] gap-2 sm:gap-5 pl-5 pr-1 py-1 bg-white rounded-full">
                <input type="email" placeholder="Masukkan email anda" className="w-full h-auto p-1 text-sm border-none rounded-full outline-none lg:p-2 lg:text-lg text-thridly" />
                <button className="w-auto h-auto px-5 py-1 text-sm text-white rounded-full lg:px-8 sm:text-md lg:text-lg bg-primary">Kirim</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}