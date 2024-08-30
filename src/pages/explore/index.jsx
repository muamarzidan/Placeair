import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

import formatPrice from "../../utils/rupiahFormatter";
import FloatingButton from "../../components/FloatingButton";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import dataAll from "../../api/detailDestination";
import "../../assets/css/pages/explore.css";


const categories = ["Semua", "Alam", "Sejarah", "Kesenian"];

export default function ExplorePage() {
    const [resizeIconStar, setResizeIconStar] = useState("16");
    const [resizeIconLoc, setResizeIconLoc] = useState("24");
    const [categoryType, setCategoryType] = useState("Semua");
    const [allProvince, setAllProvince] = useState([]);
    const [allDestinations, setAllDestinations] = useState([]);
    
    // handle scroll to top page was loaded ( hardcoded :) )
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);    

    // handler resize icon
    const handleResizeIcon = () => {
        if (window.innerWidth < 342) {
            setResizeIconStar("10");
            setResizeIconLoc("12");
        } else if (window.innerWidth < 480) {
            setResizeIconStar("12");
            setResizeIconLoc("14");
        } else if (window.innerWidth < 768) {
            setResizeIconStar("14");
            setResizeIconLoc("18");
        } else if (window.innerWidth < 1280) {
            setResizeIconStar("14");
            setResizeIconLoc("18");
        } else {
            setResizeIconStar("16");
            setResizeIconLoc("24");
        }
    };

    useEffect(() => {
        handleResizeIcon();
        // important to add event listener on window when resize the width then resize the size of icon automatically
        window.addEventListener("resize", handleResizeIcon);
        // Cleanup event listener on component unmount / save memory leak
        return () => {
            window.removeEventListener("resize", handleResizeIcon);
        };
    }, []);

    // handler select & show destination with calculate most view destination
    const handleCategoryClick = (category) => {
        setCategoryType(category);
    };

    useEffect(() => {
        const mergedDestinations = dataAll.map(item => ({
            province: item.province,
            thumbnailProvince: item.thumbnailProvince,
        }));
        setAllProvince(mergedDestinations);
    }, []);
    
    useEffect(() => {
        const mergedDestinations = dataAll.flatMap(province => province.destinations);
        const filter = mergedDestinations.filter((data) => {
            const categoryFilter = categoryType === "Semua" || data.category.toLowerCase() === categoryType.toLowerCase();
            return categoryFilter
        }).sort((a, b) => b.viewCount - a.viewCount).slice(0, 6);
        setAllDestinations(filter);
    }, [categoryType]);

    return (
        <>
            <Navbar />
            <main className="w-full h-auto bg-white">
                <section
                    id="hero"
                    className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[85vh] !mt-[75px] md:!mt-3 m-3 bg-center bg-cover rounded-xl bg-hero-explore-placeir"
                >
                    <div className="absolute inset-0 bg-black rounded-xl opacity-35"></div>
                    <div className="relative px-3">
                        <h1 className="relative font-semibold text-center text-white px-0 sm:px-5 lg:px-[50px] xl:px-[100px] 2xl:px-[200px] text-4xl sm:text-5xl md:text-6xl xl:text-8xl">
                            Eksplor Beragam Keindahan Keajaiban Indonesia
                        </h1>
                        <p className="relative text-sm sm:text-md md:text-lg xl:text-2xl text-center px-2 sm:px-16 md:px-[50px] lg:px-[100px] xl:px-[220px] 2xl:px-[320px] text-white pt-3 sm:pt-5">
                            Temukan destinasi menakjubkan di seluruh Nusantara. Rencanakan
                            liburan Anda sekarang dan temukan petualangan tak terlupakan di
                            setiap sudut negeri.
                        </p>
                    </div>
                </section>
                <section id="kategori" className="w-full h-auto py-14">
                    <div className="container flex flex-col w-full h-auto gap-2 sm:gap-3">
                        <h4 className="font-semibold text-sm sm:text-xl md:text-[24px] text-secondary text-left sm:text-center">
                            KATEGORI
                        </h4>
                        <h3 className="text-2xl font-semibold text-left sm:text-4xl md:text-6xl sm:text-center text-thridly">
                            Destinasi Berdasarkan Provinsi
                        </h3>
                        {/* Province data area */}
                        <div className="flex flex-wrap items-center justify-between w-full h-auto gap-5 pt-5 explore-container-card xl:pt-5 xl:gap-5 md:justify-between">
                            {allProvince.map((data, index) => (
                                <Link to={`/explore/${data.province}`} key={index}>
                                    <div className="explore-card-prov relative w-[500px] h-[500px] max-w-[280px] max-h-[320px] sm:max-w-[290px] sm:max-h-[320px] md:max-w-[315px] md:max-h-[350px] xl:max-w-[400px] xl:max-h-[430px] 2xl:max-w-[430px] 2xl:max-h-[460px] rounded-[20px] xl:rounded-[30px] overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-center bg-cover brightness-75"
                                            style={{
                                                backgroundImage: `url(${data.thumbnailProvince})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        />
                                        <div className="relative z-10 flex items-end w-full h-full p-3 sm:p-5">
                                            <h4 className="text-2xl font-semibold text-white explore-prov-title sm:text-3xl md:text-5xl xl:text-6xl">
                                                {data.province}
                                            </h4>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="jelajah" className="w-full h-auto pb-10 sm:pb-20">
                    <div className="container flex flex-col items-center w-full h-auto gap-1 item">
                        <h4 className="font-semibold text-sm sm:text-lg md:text-[24px] text-secondary text-center">
                            JELAJAHI TEMPAT IMPIAN ANDA
                        </h4>
                        <h3 className="text-2xl font-semibold text-center sm:text-4xl md:text-6xl text-thridly">
                            Temukan Destinasi Sesuai Keinginan Anda
                        </h3>
                        {/* Select category area */}
                        <ul className="flex w-auto h-auto gap-3 pt-4 text-white sm:gap-5">
                            {categories.map((category) => (
                                <li
                                    id="category-button"
                                    key={category}
                                    className={`px-4 sm:px-6 py-2 font-semibold rounded-full cursor-pointer text-sm sm:text-lg md:text-xl lg:text-3xl ${categoryType === category
                                            ? "bg-primary text-white"
                                            : "bg-[#F4F4F4] text-fourly"
                                        }`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                        {/* Popular destination area */}
                        <div className="flex flex-wrap items-center justify-between w-full h-auto gap-5 pt-7 sm:pt-10 explore-container-card">
                            {allDestinations.length > 0 ? (
                                allDestinations.map((data, index) => (
                                    <div
                                        key={index}
                                        className="explore-card-des w-[500px] h-[500px] max-w-[279px] max-h-[320px] sm:max-w-[290px] sm:max-h-[320px] md:max-w-[315px] md:max-h-[350px] xl:max-w-[400px] xl:max-h-[430px] 2xl:max-w-[430px] 2xl:max-h-[460px] flex flex-col justify-between p-2 sm:p-3 rounded-[11px] sm:rounded-3xl border-[1px] border-gray-300"
                                    >
                                        {/* Image card area */}
                                        <div
                                            className="explore-des-cardImage w-full h-[67%] sm:w-full sm:h-[67%] md:h-[68%] lg:h-[67%] xl:h-full !max-w-[404px] !max-h-[295px] p-2 sm:p-3 rounded-[8px] sm:rounded-xl"
                                            style={{
                                                backgroundImage: `url(${data.thumbnail})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                        <div className="explore-prov-rate flex items-center justify-evenly w-[57px] sm:w-[67px] py-[6px] sm:py-2 px-1 sm:px-2 rounded-full bg-[#ffffff42]">
                                            <Icon
                                                icon="mingcute:star-fill"
                                                style={{ color: "#ff9b48" }}
                                                width={resizeIconStar}
                                                height={resizeIconStar}
                                            />
                                            <span className="text-xs text-white sm:text-sm">
                                                {data.rating}
                                            </span>
                                        </div>
                                        </div>
                                        <span className="card-des-title w-fit text-[#171717] font-bold text-md sm:text-xl lg:text-2xl xl:text-3xl pt-0 sm:pt-2">
                                            {data.name}
                                        </span>
                                        {/* Icon and link location area */}
                                        <Link to={data.locationLink} target="_blank" className="flex items-center gap-1 sm:gap-2 w-fit">
                                            <Icon
                                                icon="fluent:location-16-filled"
                                                style={{ color: "#4c82fe" }}
                                                width={resizeIconLoc}
                                                height={resizeIconLoc}
                                            />
                                            <span className="text-sm card-loc-des sm:text-md xl:text-xl"> {data.location}</span>
                                        </Link>
                                        {/* Price and button area */}
                                        <div className="flex items-center justify-between w-full pt-0 sm:pt-3">
                                            <span className="card-des-price font-bold text-md sm:text-2xl md:text-[20px] lg:text-[22px] xl:text-[26px] text-[#171717]">
                                                {formatPrice(data.price)}
                                            </span>
                                            <Link to={`/explore-destination/${data.province}/${data.name}`}>
                                                <button className="card-des-button px-5 py-2 sm:py-2 text-sm font-normal text-white rounded-full md:font-semibold sm:px-8 md:px-8 md:py-[10px] sm:text-md md:text-lg bg-primary">
                                                    Lihat
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex items-center justify-center w-full h-auto p-5">
                                    <h4 className="font-semibold text-md sm:text-2xl md:text-[24px] text-secondary text-center">
                                        Destinasi tidak ditemukan
                                    </h4>
                                </div>
                            )}
                        </div>
                        {/* handler to show more destination if the destination is available when user searching */}
                        {allDestinations.length > 0 && (
                            <div className="flex justify-center w-full h-auto mt-5 sm:mt-10">
                                <Link to="/explore-destination">
                                    <button id="explore-button-more" className="px-5 py-2 text-sm font-semibold border-2 border-solid rounded-full md:text-2xl lg:text-3xl sm:px-7 text-primary border-primary">
                                        Selengkapnya
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButton />
        </>
    );
}