import { useState, useEffect } from "react"
import { Icon } from "@iconify-icon/react";

import NewsletterForm from "../components/NewsletterForm";
import FloatingButton from "../components/FloatingButton";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import amarTeamPlaceir from "../assets/images/profile/profile-amar-placeir.png";
import fadiaTeamPlaceir from "../assets/images/profile/profile-fadia-placeir.png";
import mellaTeamPlaceir from "../assets/images/profile/profile-mella-placeir.png";
import imageAboutPlaceir from "../assets/images/banner-about-placeir.webp";
import "../assets/css/pages/about.css";


export default function AboutPage() {
    const [resizeIconBullet, setResizeIconBullet] = useState("16");

    // handle scroll to top page was loaded ( hardcoded :) )
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // handler for resize icon 
    const handleResizeIcon = () => {
        if (window.innerWidth < 480) {
            setResizeIconBullet("12");
        } else if (window.innerWidth < 1024) {
            setResizeIconBullet("14");
        } else {
            setResizeIconBullet("18");
        }
    };

    // handler scroll to bottom with about id
    const handleScrollToAbout = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
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
                <section id="hero" className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[85vh] !mt-[75px] m-3 bg-center bg-cover md:!mt-3 rounded-xl bg-hero-about-placeir">
                    <div className="absolute inset-0 bg-black rounded-xl opacity-35"></div>
                    <div className="relative px-3">
                        <h1 className="relative font-semibold text-center text-white px-0 sm:px-5 lg:px-[50px] xl:px-[100px] 2xl:px-[200px] text-4xl sm:text-5xl md:text-6xl xl:text-8xl">
                                About Placeir
                        </h1>
                        <p className="relative text-sm sm:text-md md:text-lg xl:text-2xl text-center px-5 sm:px-16 md:px-[50px] lg:px-[100px] xl:px-[220px] 2xl:px-[320px] text-white md:pt-3">Kami menyediakan informasi lengkap mengenai berbagai destinasi wisata yang ada di Indonesia.</p>
                    </div>
                </section>
                <section id="about-us" className="w-full h-auto pt-5 pb-1 sm:pt-10 sm:pb-5">
                    <div className="container w-full h-auto">
                        <div className="flex flex-col justify-between w-full h-auto gap-2 text-center">
                            <span className="text-secondary text-sm sm:text-lg md:text-2xl xl:text-[24px] cursor-pointer" onClick={() => handleScrollToAbout('about-us')}>ABOUT US</span>
                            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-6xl">Mengenal Lebih Jauh Tentang Placeir</h1>
                            <p className="text-sm sm:text-md lg:text-xl xl:text-3xl leading-5 md:leading-7 xl:leading-10 px-0 sm:px-[36px] lg:px-[72px] !mt-0 sm:!mt-1 md:!mt-3 text-fourly">
                                Placeir merupakan sebuah platform  yang berfokus untuk mempromosikan sektor-sektor pariwisata yang ada di Indonesia. Placeir  menyediakan informasi lengkap mengenai berbagai destinasi wisata di Indonesia. 
                            </p>
                        </div>
                    </div>
                </section>  
                <section id="visi" className="w-full h-auto py-5 sm:py-10">
                    <div className="container w-full h-auto">
                        <div className="flex flex-col justify-between w-full h-auto gap-2 text-center">
                            <span className="text-secondary text-sm sm:text-lg md:text-2xl xl:text-[24px]">VISI DAN MISI</span>
                            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-6xl">Visi Placeir</h1>
                            <p className="text-sm sm:text-md lg:text-xl xl:text-3xl leading-5 md:leading-7 xl:leading-10 px-0 sm:px-[36px] lg:px-[72px] !mt-0 sm:!mt-1 md:!mt-3 text-fourly">
                                Menjadi sumber informasi utama Anda untuk menjelajahi keindahan dan keragaman destinasi wisata di Indonesia. Kami berkomitmen untuk membawa Anda lebih dekat dengan pesona alam, budaya, dan kekayaan tradisi yang tersebar di seluruh Indonesia.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="misi" className="w-full h-auto py-1 sm:py-5">
                    <div className="container w-full h-auto">
                        <div className="flex flex-col justify-between w-full h-auto gap-2 text-center">
                            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-6xl">Misi Placeir</h1>
                            <p className="text-sm sm:text-md lg:text-xl xl:text-3xl leading-5 md:leading-7 xl:leading-10 px-0 sm:px-[36px] lg:px-[72px] !mt-0 sm:!mt-1 md:!mt-3 text-fourly">
                                Memperkenalkan Indonesia sebagai destinasi wisata yang luar biasa dan beragam kepada dunia. Kami ingin memastikan setiap orang, baik wisatawan lokal maupun mancanegara, dapat menemukan destinasi wisata yang tak terlupakan di Indonesia, dari keindahan alam yang memukau hingga warisan budaya yang kaya.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="team" className="w-full h-auto py-5 sm:py-10 md:py-20">
                    <div className="container w-full h-auto">
                        <div className="flex flex-col justify-between w-full h-auto gap-0 text-center md:gap-2">
                            <span className="text-secondary text-sm sm:text-lg md:text-2xl xl:text-[24px]">OUR TEAM</span>
                            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-6xl">Tim di Balik Placeir</h1>
                            <div className="flex items-center justify-center w-full h-auto gap-0 sm:gap-7 lg:gap-14 !mt-3 sm:!mt-8">
                                <div className="flex flex-col items-center w-full h-full max-w-[242px] max-h-[232px] gap-2">
                                    <img src={amarTeamPlaceir} alt="profile team placeir" className="w-full h-full max-w-[90px] max-h-[90px] sm:max-w-[142px] sm:max-h-[142px] lg:max-w-[232px] lg:max-h-[232px] rounded-full   " />
                                    <span className="text-sm font-semibold about-name sm:text-xl lg:text-3xl">Muamar Zidan T.A</span>
                                </div>
                                <div className="flex flex-col items-center w-full h-full max-w-[242px] max-h-[232px] gap-2">
                                    <img src={fadiaTeamPlaceir} alt="profile team placeir" className="w-full h-full max-w-[90px] max-h-[90px] sm:max-w-[142px] sm:max-h-[142px] lg:max-w-[232px] lg:max-h-[232px] rounded-full" />
                                    <span className="text-sm font-semibold about-name sm:text-xl lg:text-3xl">Fadia Rizqa Yunanto</span>
                                </div>
                                <div className="flex flex-col items-center w-full h-full max-w-[242px] max-h-[232px] gap-2">
                                    <img src={mellaTeamPlaceir} alt="profile team placeir" className="w-full h-full max-w-[90px] max-h-[90px] sm:max-w-[142px] sm:max-h-[142px] lg:max-w-[232px] lg:max-h-[232px] rounded-full" />
                                    <span className="text-sm font-semibold about-name sm:text-xl lg:text-3xl">Mellafesa Rofida</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="choose" className="w-full h-auto my-0 sm:my-10 md:my-20">
                    <div className="container flex flex-wrap-reverse items-center w-full h-auto gap-0 sm:gap-3 md:gap-0 md:h-auto">
                        {/* Left/bottom side about area */}
                        <div className="flex items-center justify-between w-full h-full gap-2 pr-0 lg:pr-14 basis-full md:basis-1/2">
                            <img src={imageAboutPlaceir} alt="about banner placeir" className="w-full h-full max-h-[310px] md:max-h-[410px] lg:max-h-[464px] xl:max-h-[534px] object-cover object-center rounded-2xl brightness-[95%] md:brightness-100" />
                        </div>
                        {/* Right/top side about area */}
                        <div className="flex flex-col justify-between w-full h-full my-7 md:pl-8 xl:pl-5 basis-full md:basis-1/2">
                            <h4 className="text-sm font-semibold sm:text-lg md:text-xl xl:text-2xl text-secondary">ABOUT PLACEIR</h4>
                            <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Fitur Unik Placeir</h3>
                            <div className="flex flex-col justify-between w-full h-full gap-1 mt-3 sm:gap-2 xl:gap-3 sm:mt-2 lg:mt-3">
                                <div className="flex flex-col w-full h-full gap-1">
                                    <div className="flex items-center gap-2 w-fit">
                                        <Icon icon="material-symbols:circle" width={resizeIconBullet} height={resizeIconBullet} style={{ color: "#4377ef" }} />
                                        <h5 className="font-semibold text-md sm:text-2xl xl:text-3xl text-thridly">Backsound Musik Tradisional</h5>
                                    </div>
                                    <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-fourly">Adanya backsound musik tradisional tiap provinsi untuk meningkatkan pengalaman Anda</p>
                                </div>
                                <div className="flex flex-col w-full h-full gap-1">
                                    <div className="flex items-center gap-2 w-fit">
                                        <Icon icon="material-symbols:circle" width={resizeIconBullet} height={resizeIconBullet} style={{ color: "#4377ef" }} />
                                        <h5 className="font-semibold text-md sm:text-2xl xl:text-3xl text-thridly">Peta Interaktif</h5>
                                    </div>
                                    <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-fourly">Peta Indonesia yang dapat di klik dan akan menuju ke halaman eksplor destinasi</p>
                                </div>
                                <div className="flex flex-col w-full h-full gap-1">
                                    <div className="flex items-center gap-2 w-fit">
                                        <Icon icon="material-symbols:circle" width={resizeIconBullet} height={resizeIconBullet} style={{ color: "#4377ef" }} />
                                        <h5 className="font-semibold text-md sm:text-2xl xl:text-3xl text-thridly">Informasi Rute</h5>
                                    </div>
                                    <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-fourly">Kami menyediakan fitur informasi rute yang jarang diketahui oleh google maps dan rute ini bisa menjadi jalan pintas anda dalam berwisata</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="newsletter" className="w-full h-auto my-14 md:my-20">
                    <div className="container w-full h-[264px] sm:h-[270px] lg:h-[350px] xl:h-[400px]">
                        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 xl:gap-8 bg-cover bg-center bg-newsletter-placeir rounded-[30px]">
                            <div className="absolute inset-0 bg-black opacity-35 rounded-[30px]"></div>
                            <span id="title-newsletter" className="relative font-semibold px-[30px] sm:px-[100px] md:px-[190px] lg:px-[200px] xl:px-[300px] text-center text-white text-2xl sm:text-4xl lg:text-6xl xl:text-7xl">
                                Ayo Berlangganan ke Newsletter Kami
                            </span>
                            <NewsletterForm />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButton />
        </>
    );
}