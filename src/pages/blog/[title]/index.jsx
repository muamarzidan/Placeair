import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import dataBlog from "../../../api/blog";


export default function DetailBlogPage() {
    const { title } = useParams();
    const [detailBlog, setDetailBlog] = useState({});
    
    // handle scroll to top page was loaded ( hardcoded :) )
    useEffect(() => { 
        window.scrollTo(0, 0);
    }, []);

    // handler to get detail blog by title
    useEffect(() => {
        const detailBlogData = dataBlog.find((data) => data.title === title);
        setDetailBlog(detailBlogData);
    }, [title]);

    return (
        <>
            <Navbar />
            <main className="w-full h-auto bg-white">
                <section id="detail-blog" className="container w-full h-auto pt-[100px] md:pt-[150px] pb-[40px] sm:pb-[50px] md:pb-[100px]">
                    <div className="flex flex-col justify-between w-full h-auto gap-4 sm:gap-10">
                        { 
                            detailBlog ? (
                                <>
                                    {/* Detail image blog area */}
                                    <div className="container-thumbnail-blog flex items-center justify-between w-full sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[682px]">
                                        <div className="basis-[60%] w-full h-full pr-3 sm:pr-5">
                                            <img
                                                src={detailBlog.thumbhnailBlog}
                                                alt="Thumbnail blog - Placeir"
                                                className="object-cover object-[80%] w-full h-full rounded-[12px] sm:rounded-[20px]"        
                                            />
                                        </div>
                                        <div className="basis-[40%] flex flex-col justify-between h-full">
                                            <img
                                                src={detailBlog.thumbhnailBlogTwo}
                                                alt="Thumbnail blog - Placeir"
                                                className="object-cover w-full h-[calc(50%-5px)] sm:h-[calc(50%-10px)] rounded-[12px] sm:rounded-[20px]"
                                            />
                                            <img
                                                src={detailBlog.thumbhnailBlogTree}
                                                alt="Detail blog - Placeir"
                                                className="object-cover w-full h-[calc(50%-5px)] sm:h-[calc(50%-10px)] rounded-[12px] sm:rounded-[20px]"
                                            />
                                        </div>
                                    </div>
                                    {/* Detail teks blog area */}
                                    <div className="flex flex-col items-start justify-start w-full h-auto gap-2 px-0 sm:px-5 lg:px-14">
                                        <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-thridly">{detailBlog.title}</h1>
                                        <span className="text-md sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl text-secondary">{detailBlog.date}</span>
                                        <div className="w-full h-auto flex flex-col gap-4 sm:gap-6 lg:gap-8 !mt-4 sm:!mt-10 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal text-justify text-fourly">
                                            <p className="">{detailBlog.description}</p>
                                            <p className="">{detailBlog.descriptionDetailOne}</p>
                                            <p className="">{detailBlog.descriptionDetailTwo}</p>
                                            <p className="">{detailBlog.descriptionDetailTree}</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <section className="flex items-center justify-center w-full h-screen">
                                    <h1 className="text-4xl font-semibold text-fourly">Maaf Sekali, data blog {title} tidak ditemukan</h1>
                                </section>
                            )  
                        }
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}