import { useEffect } from 'react';

import FloatingButton from "../components/FloatingButton";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";


export default function ContactPage() {
    // handle scroll to top page was loaded ( hardcoded :) )
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <main className="w-full h-auto bg-white">
                <section id="hero" className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[85vh] !mt-[75px] m-3 bg-center bg-cover md:!mt-3 rounded-xl bg-hero-contact-placeir">
                    <div className="absolute inset-0 bg-black rounded-xl opacity-35"></div>
                    <div className="relative px-3">
                        <h1 className="relative font-semibold text-center text-white px-0 sm:px-5 lg:px-[50px] xl:px-[100px] 2xl:px-[200px] text-4xl sm:text-5xl md:text-6xl xl:text-8xl">
                            Contact Us
                        </h1>
                        <p className="relative text-sm sm:text-md md:text-lg xl:text-2xl text-center px-5 sm:px-16 md:px-[50px] lg:px-[100px] xl:px-[220px] 2xl:px-[320px] text-white md:pt-3">Ada pertanyaan? Tertarik untuk mengetahui bagaimana kita dapat bekerja sama dan mengetahui Placeir lebih jauh? Kirimkan pesan kepada kami!</p>
                    </div>
                </section>
                <section id="contact-us" className="w-full h-auto mt-10 mb-14">
                    <div className="container w-full h-auto">
                        <div className="flex flex-col justify-between w-full h-auto gap-2 text-center">
                            <span className="text-secondary text-sm sm:text-lg md:text-2xl xl:text-[24px]">CONTACT US</span>
                            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-6xl">Suka dengan apa yang Anda lihat? Mari kita mulai obrolan</h1>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButton />
        </>
    );
}