import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

import useDebounceSearch from "../../hooks/debounce";
import FloatingButton from "../../components/FloatingButton";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Search from "../../components/Search";
import dataBlog from "../../api/blog";
import "../../assets/css/pages/blog.css";


export default function BlogPage() {
    const [searchBlog, setSearchBlog] = useState("");
    const debouncedSearch = useDebounceSearch(searchBlog, 500);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const totalPages = Math.ceil(dataBlog.length / blogsPerPage);

    const filterMostViewBlog = dataBlog
        .filter((data) => {
            const searchFilter = data.title.toLowerCase().includes(debouncedSearch.toLowerCase());
            return searchFilter;
        }).sort((a, b) => b.viewCount - a.viewCount);

    const currentBlogs = filterMostViewBlog.slice(
        (currentPage - 1) * blogsPerPage, currentPage * blogsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pages = [];
        const maxPagesToShow = 3;
        const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
        const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`text-sm sm:text-md px-4 py-2 rounded-lg ${
                        i === currentPage ? 'bg-primary text-white font-semibold' : 'bg-[#F4F4F4] font-semibold text-[#717171]'
                    }`}
                >
                    {i}
                </button>
            );
        }

        return (
            <div className="flex items-center gap-2 sm:gap-3">
                {currentPage > 1 && (
                    <Icon icon="iconamoon:arrow-left-2-light" onClick={() => handlePageChange(currentPage - 1)} width={28} height={28} className="font-semibold rounded text-primary" />
                )}
                {pages}
                {currentPage < totalPages && (
                    <Icon onClick={() => handlePageChange(currentPage + 1)} icon="iconamoon:arrow-right-2-light" width={28} height={28} className="font-semibold rounded text-primary" />
                )}
            </div>
        );
    };

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
                            onChange={(e) => setSearchBlog(e.target.value)}
                        />
                    </div>
                </section>
                <section id="kategori" className="w-full h-auto pt-3 pb-8 sm:pb-10 sm:pt-5 md:pt-5 md:pb-20">
                    <div className="container flex flex-col w-full h-auto">
                        <div className="flex flex-wrap items-start justify-between w-full h-auto gap-5 pt-5 explore-container-card">
                            {currentBlogs.length > 0 ? (
                                currentBlogs.map((data, index) => (
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
                        {/* Pagination area */}
                        <div className="flex justify-center mt-8">
                            {renderPagination()}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButton />
        </>
    );
}