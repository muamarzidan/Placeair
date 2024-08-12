import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Search from "../../../components/Search";
import useDebounceSearch from "../../../hooks/debounce";
import formatPrice from "../../../utils/rupiahFormatter";
import dataDestination from "../../../api/destionation";
import "../../../assets/css/pages/explore.css";


export default function ExploreDestinationPage() {
    const [resizeIconStar, setResizeIconStar] = useState("16");
    const [resizeIconLoc, setResizeIconLoc] = useState("24");
    const [searchDestination, setSearchDestination] = useState("");
    const debouncedSearch = useDebounceSearch(searchDestination, 500);

    // handle scroll to top page was loaded ( hardcoded :) )
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // handler resize icon
    const handleResizeIcon = () => {
        if (window.innerWidth < 362) {
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

    // handler search

    const handleSearchDestination = (e) => {
        setSearchDestination(e.target.value);
    };

    const filterDestinationByProvince = dataDestination
        .filter(destination => destination.name.toLowerCase().includes(debouncedSearch.toLowerCase()));

    return (
        <>
            <Navbar />
            <main className="w-full h-auto bg-white">
                <section
                    id="hero"
                    className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[80vh] !mt-[75px] md:!mt-3 m-3 bg-center bg-cover rounded-xl"
                >
                    <div className="absolute inset-0 bg-black rounded-xl opacity-35"></div>
                    <div className="relative w-full px-0 lg:px-[70px] xl:px-0">
                        <h1 id="explore-province-title" className="relative text-4xl sm:text-5xl font-semibold text-center text-white md:text-6xl lg:text-8xl px-[100px] sm:px-[130px] md:px-[100px] lg:px-[66px] xl:px-[140px] 2xl:px-[270px]">
                            Jelajahi Destinasi Impian di
                        </h1>
                        <div className="flex flex-col items-center justify-center h-auto pt-5 md:pt-8">
                            <Search
                                className="w-[85%] md:w-[75%] lg:w-[95%] xl:w-[75%] sm:text-lg md:text-xl xl:text-3xl text-[#ffffff] placeholder-[#ffffff]"
                                type="text"
                                id="search"
                                placeholder="Cari destinasi..."
                                value={searchDestination}
                                onChange={handleSearchDestination}
                            />
                        </div>
                    </div>
                </section>
                <section id="kategori" className="w-full h-auto py-10">
                    <div className="container flex flex-col w-full h-auto">
                        <div className="flex flex-wrap items-center justify-between w-full h-auto gap-5 pt-5 explore-container-card">
                            {filterDestinationByProvince.length > 0 ? (
                                filterDestinationByProvince.map((data, index) => (
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
                                        <span className="card-des-title w-fit text-[#171717] font-bold text-md sm:text-xl lg:text-2xl xl:text-3xl">
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
                                            <span className="text-sm card-loc-des sm:text-md xl:text-xl">{data.location}</span>
                                        </Link>
                                        {/* Price and button area */}
                                        <div className="flex items-center justify-between w-full">
                                            <span className="card-des-price font-bold text-md sm:text-2xl md:text-[20px] lg:text-[22px] xl:text-[26px] text-[#171717]">
                                                {formatPrice(data.price)}
                                            </span>
                                            <button className="card-des-button px-5 py-2 sm:py-2 text-sm font-normal text-white rounded-full md:font-semibold sm:px-8 md:px-8 md:py-[10px] sm:text-md md:text-lg bg-primary">
                                                Lihat
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex items-center justify-center w-full h-auto p-5">
                                    <h4 className="font-semibold text-md sm:text-2xl md:text-[24px] text-secondary text-center">
                                        Destinasi tidak ditemukan di provinsi
                                    </h4>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}