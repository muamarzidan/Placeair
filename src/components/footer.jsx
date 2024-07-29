import { Icon } from "@iconify-icon/react";


const Footer = () => {
  return (
    <>
      <footer className="bg-[#f4f4f4] w-full h-auto">
        <div className="container flex flex-col w-full h-auto gap-5 pb-8 border-2 pt-14">
          <div className="flex w-full h-auto">
            <div className="flex flex-col basis-[70%]">
              <h3 className="text-4xl font-semibold text-primary">Placeir</h3>
              <p className="text-lg pr-[350px] text-fourly">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.</p>
            </div>
            <div className="flex basis-[30%]">
              <ul className="flex flex-col gap-4 basis-1/3">
                <li className="mb-1 text-2xl font-semibold text-primary">Layanan</li>
                <li className="text-lg text-[#6F706F]">Contact Us</li>
              </ul>
              <ul className="flex flex-col gap-4 basis-1/3">
                <li className="mb-1 text-2xl font-semibold text-primary">Layanan</li>
                <li className="text-lg text-[#6F706F]">Explore</li>
                <li className="text-lg text-[#6F706F]">About Us</li>
                <li className="text-lg text-[#6F706F]">Blog</li>
              </ul>
              <ul className="flex flex-col gap-4 basis-1/3">
                <li className="flex justify-between w-full h-auto mb-1 text-2xl font-semibold text-primary">Media Sosial</li>
                <ul className="flex justify-between w-full h-auto text-2xl font-semibold text-primary">
                  <li className=""><Icon icon="ri:instagram-fill" width="19" height="19"  style={{color: "#181b68"}} /></li>
                  <li className=""><Icon icon="ph:twitter-logo-fill" width="19" height="19"  style={{color: "#181b68"}} /></li>
                  <li className=""><Icon icon="ph:youtube-logo-fill" width="19" height="19"  style={{color: "#181b68"}} /></li>
                </ul>
              </ul>
            </div>
          </div>
          <hr className="w-full h-[2px] mt-5 mb-2 bg-[#D9D9D9]" />
          <div className="w-full h-auto">
            <div className="sm:flex sm:justify-between">
              <p className="text-lg text-gray-500">
                &copy; 2024 Placeir. All right reserved
              </p>

              <ul className="flex flex-wrap justify-start gap-4 mt-8 text-lg sm:mt-0 lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    License{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Term and Condition{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;