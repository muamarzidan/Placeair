import { useState, useEffect } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChangeTeksColor, setIsChangeTeksColor] = useState("text-white");
  const [isChangeMenuNav, setIsChangeMenuNav] = useState("text-white border-white border-[1px] bg-[#ffffff2b]");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsChangeTeksColor("text-primary");
        setIsChangeMenuNav("text-primary border-none bg-[#FFFFFF7F]");
      } else {
        setIsChangeTeksColor("text-white");
        setIsChangeMenuNav("text-white border-white border-[1px] bg-[#ffffff2b]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="fixed h-[140px] flex items-center inset-x-0 top-0 z-50 transition-colors duration-300"
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className={`text-3xl font-bold  ${isChangeTeksColor}`}>
              <a href="/" >Placeir</a>
            </div>
            <div className={`w-[418px] h-[55px] justify hidden items-center justify-evenly md:flex font-semibold text-xl rounded-full ${isChangeMenuNav}`}>
              <a href="/" className="transition-all">
                Home
              </a>
              <a className="transition-all">Explore</a>
              <a href="/about" className="transition-all">
                About Us
              </a>
              <a href="/blog" className="transition-all">
                Blog
              </a>
            </div>
            <div className="items-center hidden md:flex">
              <button className="px-[24px] py-[12px] font-semibold text-white rounded-full text-lg bg-primary">
                Contact Us
              </button>
            </div>
            <div id="hamburger" className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div
              className="flex flex-col space-y-2 md:hidden"
              style={{ transitionProperty: "opacity, transform" }}
            >
              <a href="/" className="px-3 text-lg transition-all">
                Home
              </a>
              <a href="/about" className={"text-lg px-3 transition-all"}>
                About Us
              </a>
              <a href="/faq" className="px-3 text-lg transition-all">
                FAQ
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;