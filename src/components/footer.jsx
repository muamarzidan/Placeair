import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";


const Footer = () => {
  const [resizeIcon, setResizeIcon] = useState("16");

  const handleResizeIcon = () => {
    if (window.innerWidth < 480) {
      setResizeIcon("20");
    } else if (window.innerWidth < 768) {
      setResizeIcon("22");
    } else {
      setResizeIcon("24");
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
      <footer className="bg-[#f4f4f4] w-full h-auto">
        <div className="container flex flex-col w-full h-auto gap-5 pb-6 pt-7 sm:pb-7 sm:pt-14">
          {/* Top main side footer area */}
          <div className="flex flex-wrap w-full h-auto gap-8 md:gap-0">
            {/* Child left/top side choose area */}
            <div className="flex basis-full flex-col md:basis-[55%] lg:basis-[60%] xl:basis-[70%]">
              <h3 className="text-2xl font-semibold md:text-5xl text-primary">Placeir</h3>
              <p className="text-sm sm:text-lg pr-20 sm:pr-[100px] lg:pr-[350px] text-fourly">Temukan surga tersembunyi, liburan impian, dan rasakan keindahan Indonesia yang sesungguhnya. Hanya   dengan Placeir.</p>
            </div>
            {/* Child right/bottom side choose area */}
            <div className="flex basis-full md:basis-[45%] lg:basis-[40%] xl:basis-[30%]">
              <ul className="flex flex-col gap-2 sm:gap-4 basis-1/3">
                <li className="mb-0 font-semibold text-md sm:text-2xl sm:mb-1 text-primary">Layanan</li>
                <li className="text-sm md:text-lg text-[#6F706F]">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-2 sm:gap-4 basis-1/3">
                <li className="mb-0 font-semibold text-md sm:text-2xl sm:mb-1 text-primary">Tentang</li>
                <li className="text-sm md:text-lg text-[#6F706F]">
                  <Link to="/explore">Explore</Link>
                </li>
                <li className="text-sm md:text-lg text-[#6F706F]">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="text-sm md:text-lg text-[#6F706F]">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-2 sm:gap-4 basis-1/3">
                <li className="flex justify-between w-full h-auto mb-1 font-semibold text-md sm:text-2xl text-primary">Media Sosial</li>
                <ul className="flex justify-between w-full h-auto text-2xl font-semibold text-primary">
                  <li className="">
                    <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <Icon icon="ri:instagram-fill" width={resizeIcon} height={resizeIcon} style={{color: "#181b68"}} />
                    </Link>
                  </li>
                  <li className="">
                    <Link to="https://x.com/" target="_blank" rel="noopener noreferrer">
                      <Icon icon="ph:twitter-logo-fill" width={resizeIcon} height={resizeIcon} style={{color: "#181b68"}} />
                    </Link>
                  </li>
                  <li className="">
                    <Link to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                      <Icon icon="ph:youtube-logo-fill" width={resizeIcon} height={resizeIcon} style={{color: "#181b68"}} />
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <hr className="w-full h-[1.5px] mt-5 mb-2 bg-[#D9D9D9]" />
          {/* Bottom main side footer area */}
          <div className="w-full h-auto">
            <div className="sm:flex sm:justify-between">
              <p className="text-sm text-gray-500 sm:text-lg">
                &copy; 2024 Placeir. All right reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;