import { Icon } from "@iconify-icon/react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Popular from "../components/popularSlider";
import imageChoosePlaceir from "../assets/images/choose-placeir.png";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto bg-white">
        <section id="hero" className="relative flex flex-col items-center justify-center h-screen m-3 bg-top bg-cover rounded-xl bg-hero-placeir">
          <div className="absolute inset-0 bg-black rounded-xl opacity-35"></div>
          <div className="relative px-3">
          <h1 className="relative font-semibold text-center text-white px-0 sm:px-5 lg:px-[50px] xl:px-[100px] 2xl:px-[200px] text-5xl md:text-6xl xl:text-8xl">
            Jelajahi Pesona Alam  Nusantara yang Menakjubkan
          </h1>
          <p className="relative text-md md:text-lg xl:text-2xl text-center px-2 sm:px-16 md:px-[50px] lg:px-[100px] xl:px-[220px] 2xl:px-[320px] text-white pt-5">Temukan destinasi menakjubkan di seluruh Nusantara. Rencanakan liburan  Anda sekarang dan temukan petualangan tak terlupakan di setiap sudut negeri.</p>
          </div>
        </section>
        <section id="popular" className="w-full h-auto my-20">
          <Popular />
        </section>
        <section id="calculation" className="w-full h-auto my-20">
          <div className="container w-full h-auto">
            <div className="flex items-center justify-between w-full h-auto p-16 bg-center bg-cover rounded-3xl bg-frame-one">
              <span className="font-semibold pr-[40px] text-white text-7xl basis-1/2">Buat Perjalananan Anda Berkesan!</span>
              <div className="flex justify-between w-full h-auto basis-1/2">
                <div className="flex flex-col basis-1/2">
                  <div className="flex flex-col w-full h-full gap-2">
                    <span className="text-center text-white text-7xl">10+</span>
                    <span className="text-3xl text-center text-white">Provinsi tersedia</span>
                  </div>
                  <div className="flex flex-col w-full h-full gap-2">
                    <span className="text-center text-white text-7xl">10+</span>
                    <span className="text-3xl text-center text-white">Provinsi tersedia</span>
                  </div>
                </div>
                <div className="flex flex-col basis-1/2">
                  <div className="flex flex-col w-full h-full gap-2">
                    <span className="text-center text-white text-7xl">100+</span>
                    <span className="text-3xl text-center text-white">Destinasi Wisata</span>
                  </div>
                  <div className="flex flex-col w-full h-full gap-2">
                    <span className="text-center text-white text-7xl">10+</span>
                    <span className="text-3xl text-center text-white">Provinsi tersedia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="choose" className="w-full h-auto my-20">
          <div className="container flex items-center w-full h-[500px]">
            <div className="flex flex-col justify-between w-full h-full gap-2 pr-28 basis-1/2">
              <h4 className="text-2xl font-semibold text-secondary">WHY CHOOSE US</h4>
              <h3 className="text-6xl font-semibold">Mengapa Pilih Placeir?</h3>
              <div className="flex flex-col justify-between w-full h-full !mt-4 gap-6">
                <div className="flex flex-col w-full h-full gap-2">
                  <div className="flex items-center gap-2 w-fit">
                    <Icon icon="material-symbols:circle" width="18" height="18" style={{ color: "#4377ef" }} />
                    <h5 className="text-3xl font-semibold text-textPrimary">Lorem Ipsum</h5>
                  </div>
                  <p className="text-2xl text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis semper dolor. Aenean sed mattis libero</p>
                </div>
                <div className="flex flex-col w-full h-full gap-2">
                  <div className="flex items-center gap-2 w-fit">
                    <Icon icon="material-symbols:circle" width="18" height="18" style={{ color: "#4377ef" }} />
                    <h5 className="text-3xl font-semibold text-textPrimary">Lorem Ipsum</h5>
                  </div>
                  <p className="text-2xl text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis semper dolor. Aenean sed mattis libero</p>
                </div>
                <div className="flex flex-col w-full h-full gap-2">
                  <div className="flex items-center gap-2 w-fit">
                    <Icon icon="material-symbols:circle" width="18" height="18" style={{ color: "#4377ef" }} />
                    <h5 className="text-3xl font-semibold text-textPrimary">Lorem Ipsum</h5>
                  </div>
                  <p className="text-2xl text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis semper dolor. Aenean sed mattis libero</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-full gap-2 basis-1/2">
              <img src={imageChoosePlaceir} alt="choose placeir" className="w-full h-[95%] bg-center bg-no-repeat bg-cover rounded-2xl" />
            </div>
          </div>
        </section>
        <section id="newssletter" className="w-full h-auto my-20">
          <div className="container w-full h-[400px]">
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 bg-cover bg-center bg-newssteller-placeir rounded-[30px]">
              <div className="absolute inset-0 bg-black opacity-35 rounded-[30px]"></div>
              <span className="relative font-semibold px-[300px] text-center text-white text-7xl">Ayo Berlangganan ke Newsletter Kami</span>
              <div className="relative flex justify-between w-[482px] h-[61px] gap-5 pl-5 pr-1 py-1 bg-white rounded-full">
                <input type="email" placeholder="Masukkan email anda" className="w-full h-auto p-2 text-lg border-none rounded-full outline-none text-textPrimary" />
                <button className="w-auto h-auto px-8 py-2 text-lg text-white rounded-full bg-primary">Kirim</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}