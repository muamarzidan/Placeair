import { Icon } from "@iconify-icon/react";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";


export default function ExplorePage() {
    return (
        <>
            <Navbar />
            <main className="w-full h-auto bg-white">
                <section id="hero" className="relative flex flex-col items-center justify-center h-[80vh] m-3 bg-center bg-cover rounded-xl bg-hero-explore-placeir">
                    <div className="absolute inset-0 bg-black rounded-xl opacity-35"></div>
                    <div className="relative px-3">
                        <h1 className="relative font-semibold text-center text-white px-0 sm:px-5 lg:px-[50px] xl:px-[100px] 2xl:px-[200px] text-5xl md:text-6xl xl:text-8xl">
                            Jelajahi Pesona Alam  Nusantara yang Menakjubkan
                        </h1>
                        <p className="relative text-md md:text-lg xl:text-2xl text-center px-2 sm:px-16 md:px-[50px] lg:px-[100px] xl:px-[220px] 2xl:px-[320px] text-white pt-5">Temukan destinasi menakjubkan di seluruh Nusantara. Rencanakan liburan  Anda sekarang dan temukan petualangan tak terlupakan di setiap sudut negeri.</p>
                    </div>
                </section>
                <section id="kategori" className="w-full h-auto py-10">
                    <div className="container flex flex-col w-full h-auto gap-4">
                        <h4 className="font-semibold text-[24px] text-secondary text-center">KATEGORI</h4>
                        <h3 className="text-6xl font-semibold text-center text-thridly">Destinasi Berdasarkan Provinsi</h3>     
                        <div className="flex items-center justify-between w-full h-auto">
                            <div className=""></div>
                        </div>
                    </div>
                </section>
            </main> 
            <Footer />
        </>
    );
}