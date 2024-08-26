import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Search from "../../components/Search";
import useDebounceSearch from "../../hooks/debounce";
import dataBlog from "../../api/blog";
import "../../assets/css/pages/blog.css";


export default function ExploreDestinationPage() {
    const [searchBlog, setSearchBlog] = useState("");
    const debouncedSearch = useDebounceSearch(searchBlog, 500);

    // handle scroll to top page was loaded ( hardcoded :) )
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // handler search, category and filter destination by most viewCount
    const handleSearchBlog = (e) => {
        setSearchBlog(e.target.value);
    };

    const filterMostViewBlog = dataBlog
        .filter((data) => {
            const searchFilter = data.title.toLowerCase().includes(debouncedSearch.toLowerCase());
            return searchFilter;
        })
            .sort((a, b) => b.viewCount - a.viewCount);

    return (
        <>
            <Navbar />
            <main className="w-full h-auto bg-white">
                <section
                    id="hero"
                    className="flex flex-col items-center justify-center h-auto pt-[90px] sm:pt-[110px] md:pt-[180px]"
                >
                    <h3 id="explore-province-title" className="text-sm font-semibold text-center text-secondary sm:text-xl md:text-2xl lg:text-[24px]">
                        BLOG DAN ARTIKEL
                    </h3>
                    <h1 id="explore-province-title" className="container text-2xl font-semibold text-center text-black sm:text-3xl md:text-5xl lg:text-6xl">
                        Temukan Artikel Menarik Seputar Keindahan Nusantara
                    </h1>
                    {/* Search area */}
                    <div className="flex flex-col items-center justify-center w-full h-auto pt-5 md:pt-10">
                        <Search
                            className="w-full sm:text-lg md:text-xl xl:text-3xl text-[#6F706F] placeholder-[#6F706F]"
                            type="text"
                            id="search"
                            placeholder="Cari blog dan artikel..."
                            value={searchBlog}
                            onChange={handleSearchBlog}
                        />
                    </div>
                </section>
                <section id="kategori" className="w-full h-auto pt-3 pb-8 sm:pb-10 sm:pt-5 md:pt-5 md:pb-20">
                    <div className="container flex flex-col w-full h-auto">
                        <div className="flex flex-wrap items-start justify-between w-full h-auto gap-5 pt-5 explore-container-card">
                            {filterMostViewBlog.length > 0 ? (
                                filterMostViewBlog.map((data, index) => (
                                    <Link
                                        to={`/blog/${data.title}`}
                                        key={index}
                                        className="explore-card-blog w-full h-full sm:max-w-[280px] md:max-w-[355px] lg:max-w-[310px] xl:max-w-[400px] xl:max-h-[700px] flex flex-col justify-between gap-2 sm:gap-4 p-2 sm:p-3 rounded-[12px] sm:rounded-3xl border-[1px] border-gray-300"
                                    >
                                        <img
                                            className="explore-blog-cardImage w-full h-[67%] sm:w-full sm:h-[67%] md:h-[68%] lg:h-[67%] xl:h-full !max-w-[404px] !max-h-[295px] rounded-[8px] sm:rounded-xl"
                                            src={data.thumbhnailBlog}
                                        >
                                        </img>
                                        <div className="flex flex-col w-full h-full gap-1 px-1 sm:px-2">
                                            <span className="card-blog-title text-wrap w-fit text-[#171717] font-semibold !text-sm sm:!text-xl lg:!text-2xl xl:!text-3xl">
                                                {data.title}
                                            </span>
                                            <span className="text-xs w-fit text-secondary sm:text-lg lg:text-xl xl:text-2xl">
                                                {data.date}
                                            </span>
                                            <p id="blog-desc" className="text-[#6F706F] text-justify text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-1 sm:mt-2 md:mt-3 leading-5 sm:leading-7 md:leading-9 overflow-hidden">
                                                {data.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="flex items-center justify-center w-full h-auto p-5">
                                    <h4 className="font-semibold text-md sm:text-2xl md:text-[24px] text-secondary text-center">
                                        Blog atau artikel tidak ditemukan
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