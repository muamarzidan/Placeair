import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

const Navbar = () => {
  const locationPath = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChangeTeksColor, setIsChangeTeksColor] = useState("text-white");
  const [isBgChangeNav, setIsBgChangeNav] = useState("bg-white");
  const [isChangeMenuNav, setIsChangeMenuNav] = useState(
    "text-white border-white border-[1px] bg-[#ffffff2b]"
  );

  useEffect(() => {
    if (locationPath === "/explore-destination") {
      setIsChangeTeksColor("text-primary");
      setIsChangeMenuNav("text-primary border-2 border-primary bg-[#FFFFFF7F]");
    } else {
      setIsChangeTeksColor("text-white");
      setIsChangeMenuNav("text-white border-white border-[1px] bg-[#ffffff2b]");
    }

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsChangeTeksColor("text-primary");
      } else {
        if (window.scrollY > 500) {
          setIsChangeTeksColor("text-primary");
        } else {
          setIsChangeTeksColor(locationPath === "/explore-destination" ? "text-primary" : "text-white");
        }
      }
    };

    const handleScroll = () => {
      if (locationPath === "/explore-destination") {
        if (window.scrollY > 100) {
          setIsBgChangeNav("bg-white h-auto md:h-[90px]");
        } else {
          setIsBgChangeNav("bg-white md:bg-transparent h-auto md:h-[140px]");
        }
      } else {
        if (window.scrollY > 500) {
          setIsBgChangeNav("bg-white h-auto md:h-[90px]");
        } else {
          setIsBgChangeNav("bg-white md:bg-transparent h-auto md:h-[140px]");
        }
      }
      
      if (window.innerWidth >= 768) {
        if (window.scrollY > 500 && locationPath !== "/explore-destination") {
          setIsChangeTeksColor("text-primary");
          setIsChangeMenuNav("text-primary border-none bg-[#FFFFFF7F]");
        } else {
          setIsChangeTeksColor(locationPath === "/explore-destination" ? "text-primary" : "text-white");
          setIsChangeMenuNav(
            locationPath === "/explore-destination"
              ? "text-primary border-2 border-primary bg-[#FFFFFF7F]"
              : "text-white border-white border-[1px] bg-[#ffffff2b]"
          );
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();
    handleScroll();

    // Always cleanup event listener to save memory leak
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [locationPath]);

  return (
    <>
      <nav className={`fixed pb-4 md:pb-0 pt-4 md:pt-0 flex items-center inset-x-0 top-0 z-50 transition-all duration-300 ${isBgChangeNav}`}>
        <div className="container">
          {/* Menu default area */}
          <div className="flex items-center justify-between">
            <div className={`text-3xl font-bold ${isChangeTeksColor}`}>
              <a href="/">Placeir</a>
            </div>
            <div
              className={`w-[418px] h-[55px] justify hidden items-center justify-evenly md:flex font-semibold text-xl rounded-full ${isChangeMenuNav}`}
            >
              <Link
                to="/"
                className={`transition-all ${
                  locationPath === "/" ? "font-semibold" : "font-normal"
                }`}
              >
                Home
              </Link>
              <Link
                to="/explore"
                className={`transition-all ${
                  locationPath === "/explore" ? "font-semibold" : "font-normal"
                }`}
              >
                Explore
              </Link>
              <Link
                to="/about"
                className={`transition-all ${
                  locationPath === "/about" ? "font-semibold" : "font-normal"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className={`transition-all ${
                  locationPath === "/blog" ? "font-semibold" : "font-normal"
                }`}
              >
                Blog
              </Link>
            </div>
            <div className="items-center hidden md:flex">
              <Link
                to="/contact"
                className="px-[24px] py-[12px] font-semibold text-white rounded-full text-lg bg-primary"
              >
                Contact Us
              </Link>
            </div>
            <div id="hamburger" className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isChangeTeksColor} focus:outline-none bg-primary p-2 rounded-full flex items-center`}
              >
                <Icon
                  icon="charm:menu-hamburger"
                  width="26"
                  height="24"
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </div>
          {/* Open menu with hamburger area */}
          <div
            className={`fixed inset-y-0 right-0 bg-white transition-transform transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } w-[65%] md:hidden`}
          >
            <div className="px-6 pt-4">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center p-2 rounded-full focus:outline-none bg-primary"
                >
                  <Icon
                    icon="uis:multiply"
                    width="27"
                    height="26"
                    style={{ color: "#ffffff" }}
                  />
                </button>
              </div>
              <div className="flex flex-col w-full h-auto pt-2 space-y-4 text-xl">
                <Link
                  to="/"
                  className={`transition-all ${
                    locationPath === "/" ? "font-semibold" : "font-normal"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/explore"
                  className={`transition-all ${
                    locationPath === "/explore" ? "font-semibold" : "font-normal"
                  }`}
                >
                  Explore
                </Link>
                <Link
                  to="/about"
                  className={`transition-all ${
                    locationPath === "/about" ? "font-semibold" : "font-normal"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  to="/faq"
                  className={`transition-all ${
                    locationPath === "/faq" ? "font-semibold" : "font-normal"
                  }`}
                >
                  FAQ
                </Link>
                <Link
                  to="/blog"
                  className={`transition-all ${
                    locationPath === "/blog" ? "font-semibold" : "font-normal"
                  }`}
                >
                  Blog
                </Link>
                <div className="flex items-center">
                  <Link
                    to="/contact"
                    className="px-[12px] py-[10px] md:py-[6px] text-lg font-semibold text-white rounded-full w-full text-center bg-primary"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;