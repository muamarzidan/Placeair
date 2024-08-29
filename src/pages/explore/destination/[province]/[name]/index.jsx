import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

import formatPrice from "../../../../../utils/rupiahFormatter";
import FloatingButton from "../../../../../components/FloatingButton";
import dataAll from "../../../../../api/detailDestination";
import Navbar from "../../../../../components/navbar";
import Footer from "../../../../../components/footer";


export default function DetailDestinationPage() {
    const { province, name } = useParams();
    const [resizeIconStar, setResizeIconStar] = useState("16");
    const [resizeIconLoc, setResizeIconLoc] = useState("24");
    const [destination, setDestination] = useState(null);

    // handler resize icon
    const handleResizeIcon = () => {
        if (window.innerWidth < 362) {
            setResizeIconStar("14");
            setResizeIconLoc("12");
        } else if (window.innerWidth < 480) {
            setResizeIconStar("16");
            setResizeIconLoc("14");
        } else if (window.innerWidth < 768) {
            setResizeIconStar("20");
            setResizeIconLoc("18");
        } else if (window.innerWidth < 1280) {
            setResizeIconStar("20");
            setResizeIconLoc("18");
        } else {
            setResizeIconStar("28");
            setResizeIconLoc("28");
        }
    };

    // handler effect to resize icon
    useEffect(() => {
        handleResizeIcon();
        // important to add event listener on window when resize the width then resize the size of icon automatically
        window.addEventListener("resize", handleResizeIcon);
        // Cleanup event listener on component unmount / save memory leak
        return () => {
            window.removeEventListener("resize", handleResizeIcon);
        };
    }, []);

    useEffect(() => {
        const selectedProvince = dataAll.find(
            (item) => item.province.toLowerCase() === province.toLowerCase()
        );

        if (selectedProvince) {
            const selectedDestination = selectedProvince.destinations.find(
                (item) => item.name.toLowerCase() === name.toLowerCase()
            );
            setDestination(selectedDestination);
        }
    }, [province, name]);

    if (!destination) {
        return (
            <div className="flex items-center justify-center w-full h-auto p-5">
                <h4 className="font-semibold text-md sm:text-2xl md:text-[24px] text-secondary text-center">
                    Destinasi tidak ditemukan di provinsi {province}
                </h4>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className="w-full h-auto bg-white">
                <section id="detail-blog" className="container w-full h-auto pt-[100px] md:pt-[150px] pb-[40px] sm:pb-[50px] md:pb-[100px]">
                    <div className="flex flex-col justify-between w-full h-auto gap-4 sm:gap-8">
                        {/* Detail image destinasi area */}
                        <div className="container-thumbnail-blog flex items-center justify-between w-full sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[682px]">
                            <div className="basis-[60%] w-full h-full pr-3 sm:pr-5">
                                <img
                                    src={destination.thumbnail}
                                    alt="Thumbnail blog - Placeir"
                                    className="object-cover object-center w-full h-full rounded-[12px] sm:rounded-[20px]"
                                />
                            </div>
                            <div className="basis-[40%] flex flex-col justify-between h-full">
                                <img
                                    src={destination.thumbnailTwo}
                                    alt="Thumbnail blog - Placeir"
                                    className="object-cover w-full h-[calc(50%-5px)] sm:h-[calc(50%-10px)] rounded-[12px] sm:rounded-[20px]"
                                />
                                <img
                                    src={destination.thumbnailTree}
                                    alt="Detail blog - Placeir"
                                    className="object-cover w-full h-[calc(50%-5px)] sm:h-[calc(50%-10px)] rounded-[12px] sm:rounded-[20px]"
                                />
                            </div>
                        </div>
                        {/* Detail teks destinasi area */}
                        <div className="flex flex-col items-start justify-start w-full h-auto">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-thridly w-fit">{destination.name}</h1>
                                <div className="flex items-center space-x-2 sm:space-x-3 w-fit">
                                    <Icon
                                        icon="mingcute:star-fill"
                                        style={{ color: "#ff9b48" }}
                                        width={resizeIconStar}
                                        height={resizeIconStar}
                                    />
                                    <span className="text-md sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl">{destination.rating}</span>
                                </div>
                            </div>
                            <Link to={destination.locationLink} target="_blank" rel="noopener noreferrer" className="flex items-center w-full gap-3">
                                <Icon
                                    icon="fluent:location-16-filled"
                                    style={{ color: "#4c82fe" }}
                                    width={resizeIconLoc}
                                    height={resizeIconLoc}
                                />
                                <span className="text-md sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl text-thridly">{destination.location}, {destination.province}</span>
                            </Link>
                            <div className="w-full h-auto flex flex-col gap-2 sm:gap-4 lg:gap-5 !mt-4 sm:!mt-12">
                                <h4 className="font-semibold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Tentang</h4>
                                <p className="text-sm font-normal text-justify sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-fourly">{destination.description}</p>
                            </div>
                        </div>
                        {/* Detail price destinasi area */}
                        <div className="flex flex-wrap sm:flex-nowrap w-full h-auto gap-3 lg:gap-5 mt-2 sm:!mt-4 lg:!mt-8">
                            <div className="flex flex-col w-full h-auto gap-2 md:gap-4 basis-full sm:basis-1/2">
                                <h3 className="font-semibold text:lg sm:text-3xl md:text-4xl xl:text-5xl">Harga Tiket Masuk WNI</h3>
                                <ul id="container-price-wni" className="flex flex-col w-full gap-2 p-2 text-sm border-2 rounded-xl sm:text-xl lg:text-3xl sm:rounded-2xl">
                                    {destination.priceDetail && destination.priceDetail.length > 0 ? (
                                        destination.priceDetail
                                            .filter(price => price.name === "WNI")
                                            .map(price => (
                                                <span key={price.id} className="w-full text-center">
                                                    {price.price > 0 ? formatPrice(price.price) : "Gratis"}
                                                </span>
                                            ))
                                    ) : (
                                        <span className="w-full font-semibold text-md sm:text-2xl md:text-[24px] text-secondary text-center">Maaf, Kami belum bisa beri informasi harga</span>
                                    )}
                                </ul>
                            </div>
                            <div className="flex flex-col w-full h-auto gap-2 md:gap-4 basis-full sm:basis-1/2">
                                <h3 className="font-semibold text:lg sm:text-3xl md:text-4xl xl:text-5xl">Harga Tiket Masuk WNA</h3>
                                <ul id="container-price-wna" className="flex flex-col w-full gap-2 p-2 text-sm border-2 sm:text-xl rounded-xl lg:text-3xl sm:rounded-2xl">
                                    {destination.priceDetail && destination.priceDetail.length > 0 ? (
                                        destination.priceDetail
                                            .filter(price => price.name === "WNA")
                                            .map(price => (
                                                <span key={price.id} className="w-full text-center">
                                                    {price.price > 0 ? formatPrice(price.price) : "Gratis"}
                                                </span>
                                            ))
                                    ) : (
                                        <span className="w-full font-semibold text-md sm:text-2xl md:text-[24px] text-secondary text-center">Maaf, Kami belum bisa beri informasi harga</span>
                                    )}
                                </ul>
                            </div>
                        </div>
                        {/* Detail lokasi destinasi area */}
                        <div className="flex flex-col w-full h-auto gap-3 md:gap-8 !mt-4 md:!mt-7">
                            <h3 className="font-semibold text:lg sm:text-3xl md:text-4xl xl:text-5xl text-thridly">Lokasi dan Informasi Rute</h3>
                            {/* Detail maps area */}
                            {destination.locationMaps ? (
                                <div className="w-full h-auto">
                                    <iframe
                                        src={destination.locationMaps}
                                        title="maps"
                                        className="rounded-xl sm:rounded-2xl w-full h-[230px] md:h-[300px] lg:h-[500px] xl:h-[600px] border-none focus:border-none"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            ) : (
                                <p className="w-full font-semibold text-md sm:text-2xl md:text-[24px] text-secondary text-center">
                                    Kami belum bisa menyediakan peta
                                </p>
                            )}
                            {/* Detail rute area */}
                            <div className="flex flex-col w-full h-auto gap-5 sm:gap-7 lg:gap-10 !mt-5">
                                {destination.rute && destination.rute.length > 0 ? (
                                    destination.rute.map((route, index) => (
                                        <div key={route.id} className="flex justify-start gap-4 sm:gap-5">
                                            <div className="flex items-center justify-center w-full h-10 rounded-full max-w-10 sm:h-12 max-h-10 sm:max-w-12 sm:max-h-12 lg:h-16 lg:max-w-16 lg:max-h-16 bg-primary">
                                                <span className="text-lg font-semibold text-white sm:text-xl lg:text-3xl">{index + 1}</span>
                                            </div>
                                            <div className="flex flex-col gap-2 md:gap-3">
                                                <h4 className="text-lg font-semibold leading-5 md:leading-7 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-thridly">{route.name}</h4>
                                                <p className="text-sm sm:text-lg md:text-xl xl:text-3xl text-fourly">{route.description}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="w-full font-semibold text-md sm:text-2xl md:text-[24px] text-secondary text-center">Mohon maaf informasi detail tentang rute destinasi ini belum tersedia</p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButton />
        </>
    );
}