import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Search from "../../../components/Search";
import useDebounceSearch from "../../../hooks/debounce";
import dataDestination from "../../../api/destionation";
import "../../../assets/css/pages/explore.css";


export default function ExploreProvincePage() {
    const { province } = useParams();
    const [searchDestination, setSearchDestination] = useState("");
    const [makeBaseThumbnail, setMakeBaseThumbnail] = useState("");
    const debouncedSearch = useDebounceSearch(searchDestination, 500);

    // handle scroll to top page was loaded ( hardcoded :) )
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // handler thumbnail, search, filter destination by province
    useEffect(() => {
        const filteredByProvince = dataDestination.filter(
            destination => destination.province.toLowerCase() === province.toLowerCase()
        );
        if (filteredByProvince.length > 0) {
            setMakeBaseThumbnail(filteredByProvince[0].thumbnailProvince);
        }
    }, [province]);

    const handleSearchDestination = (e) => {
        setSearchDestination(e.target.value);
    };

    const filterDestinationByProvince = dataDestination
        .filter(destination => destination.province.toLowerCase() === province.toLowerCase())
        .filter(destination => 
            destination.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );

    return (
        <>
            <Navbar />
            <main className="w-full h-auto bg-white">
                <section
                    id="hero"
                    className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[80vh] !mt-[75px] md:!mt-3 m-3 bg-center bg-cover rounded-xl"
                    style={{
                        backgroundImage: `url(${filterDestinationByProvince[0]?.thumbnailProvince || makeBaseThumbnail})`
                    }}
                >
                    <div className="absolute inset-0 bg-black rounded-xl opacity-35"></div>
                    <div className="relative w-full px-0 lg:px-[70px] xl:px-0">
                        <h1 id="explore-province-title" className="relative text-4xl sm:text-5xl font-semibold text-center text-white md:text-6xl lg:text-8xl px-[100px] sm:px-[130px] md:px-[100px] lg:px-[66px] xl:px-[140px] 2xl:px-[270px]">
                            Jelajahi Destinasi Impian di {province} 
                        </h1>
                        <div className="flex flex-col items-center justify-center w-full h-auto pt-5 md:pt-8">
                            <Search
                                className="w-[85%] md:w-[75%] lg:w-[95%] xl:w-[75%] h-auto pr-2 sm:text-lg md:text-xl xl:text-3xl text-[#ffffff] placeholder-[#ffffff] outline-none px-6 md:px-7 2xl:px-9 py-3 md:py-4 2xl:py-5 backdrop-blur-md bg-[#ffffff59] rounded-full"
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
                        <div className="flex flex-wrap items-center justify-between w-full h-auto gap-5 pt-5">
                            {filterDestinationByProvince.length > 0 ? (
                                filterDestinationByProvince.map((data, index) => (
                                    <div
                                        key={index}
                                        className="w-[445px] h-[460px] max-w-[800px] max-h-[430px] rounded-[30px] bg-center bg-cover"
                                        style={{
                                            backgroundImage: `url(${data.thumbnail})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <div className="flex items-end w-full h-full p-5">
                                            <h4 className="text-6xl font-semibold text-white">
                                                {data.name}
                                            </h4>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-2xl text-center text-gray-600">
                                    Tidak ada destinasi yang ditemukan untuk provinsi ini
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}