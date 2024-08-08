import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Search from "../../../components/Search";
import useDebounceSearch from "../../../hooks/debounce";
import Destination from "../../../api/destionation";
import formatPrice from "../../../utils/rupiahFormatter";


const categories = ["Semua", "Alam", "Sejarah", "Kesenian"];

export default function ExplorePage() {
    const [resizeIconStar, setResizeIconStar] = useState("16");
    const [resizeIconLoc, setResizeIconLoc] = useState("24");
    const [categoryType, setCategoryType] = useState("Semua");
    const [searchDestination, setSearchDestination] = useState("");
    const debouncedSearchDestination = useDebounceSearch(searchDestination, 300);
    
    // handler resize icon
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
        // important to add event listener on window when resize the width then resize the size of icon automatically
        window.addEventListener("resize", handleResizeIcon);
        // Cleanup event listener on component unmount / save memory leak
        return () => {
            window.removeEventListener("resize", handleResizeIcon);
        };
    }, []);

    // handler select & search destination
    const handleCategoryClick = (category) => {
        setCategoryType(category);
    };
    
    const handleSearchDestination = (e) => {
        setSearchDestination(e.target.value);
    };

    const filterMostViewDestination = Destination.filter((data) => {
        const categoryFilter = categoryType === "Semua" || data.category.toLowerCase() === categoryType.toLowerCase();
        const searchFilterByCategory = data.name.toLowerCase().includes(debouncedSearchDestination.toLowerCase());
        return categoryFilter && searchFilterByCategory;
    }).sort((a, b) => b.viewCount - a.viewCount);

    return (
        <>
            <Navbar />
            <main className="w-full h-auto bg-white">
                <section id="jelajah" className="w-full h-auto pt-40 pb-20">
                    <div className="container flex flex-col items-center w-full h-auto gap-1 item">
                        <h4 className="font-semibold text-[24px] text-secondary text-center">
                            JELAJAHI TEMPAT IMPIAN ANDA
                        </h4>
                        <h3 className="text-6xl font-semibold text-center text-thridly">
                            Temukan Destinasi Sesuai Keinginan Anda
                        </h3>
                        {/* Select category area */}
                        <ul className="flex w-auto h-auto gap-3 pt-4 text-white">
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className={`px-5 py-2 font-semibold rounded-full cursor-pointer ${categoryType === category
                                        ? "bg-primary text-white"
                                        : "bg-[#F4F4F4] text-fourly"
                                        }`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                        {/* Search destination area */}
                        <div className="flex justify-center w-full h-auto pt-8">
                            <Search
                                className="w-full h-auto pr-2 text-3xl text-[#6F706F] placeholder-[#6F706F] outline-none px-9 py-5 peer bg-[#f4f4f4] rounded-full"
                                type="text"
                                id="search"
                                placeholder="Cari destinasi..."
                                value={searchDestination}
                                onChange={handleSearchDestination}
                            />
                        </div>
                        {/* Popular destination area */}
                        <div className="flex flex-wrap items-center justify-between w-full h-auto gap-5 pt-5">
                            {filterMostViewDestination.length > 0 ? (
                                filterMostViewDestination.map((data, index) => (
                                    <div
                                        key={index}
                                        className="card-popular w-[250px] h-[306px] sm:w-[300px] sm:h-[356px] md:w-[350px] md:h-[406px] lg:w-full lg:h-[456px] max-w-[400px] max-h-[456px] flex flex-col justify-between p-3 rounded-3xl border-[1px] border-gray-300"
                                    >
                                        <div
                                            className="w-[227px] h-[180px] sm:w-[277px] sm:h-[220px] md:w-[327px] md:h-[230px] lg:w-full lg:h-full !max-w-[377px] !max-h-[280px] p-3 rounded-xl"
                                            style={{
                                                backgroundImage: `url(${data.thumbnail})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                            <div className="flex items-center justify-evenly w-[67px] py-2 px-2 rounded-full bg-[#ffffff2b]">
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
                                        <span className="w-fit text-[#171717] font-bold sm:text-xl md:text-3xl">
                                            {data.name}
                                        </span>
                                        <div className="flex items-center gap-1 sm:gap-2 w-fit">
                                            <Icon
                                                icon="fluent:location-16-filled"
                                                style={{ color: "#4c82fe" }}
                                                width={resizeIconLoc}
                                                height={resizeIconLoc}
                                            />
                                            <span className="text-sm sm:text-md md:text-xl">
                                                {data.location}
                                                <a href={data.locationLink}></a>
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <span className="font-bold text-md sm:text-[16px] md:text-[26px] text-[#171717]">
                                                {formatPrice(data.price)}
                                            </span>
                                            <button className="px-3 py-2 text-sm font-bold text-white rounded-full sm:px-5 md:py-3 sm:text-md md:text-lg bg-primary">
                                                Selengkapnya
                                            </button>
                                        </div>
                                    </div>
                                ))) : (
                                    <div className="flex items-center justify-center w-full h-auto p-5">
                                        <h4 className="font-semibold text-[24px] text-secondary text-center">
                                            Destinasi tidak ditemukan
                                        </h4>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}