import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { Icon } from "@iconify-icon/react"

const Search = ({ className, type, id, placeholder, value, onChange }) => {
    const locationPath = useLocation().pathname;
    const [resizeIcon, setResizeIcon] = useState("28");
    const [isChangeColorIcon, setIsChangeColorIcon] = useState("![#ffffff]");
    const [isChangeBgSearch, setIsChangeBgSearch] = useState("bg-[#f4f4f430]");

    const handleResizeIcon = () => {  
        if (window.innerWidth < 768) {
            setResizeIcon("18");
        } else if (window.innerWidth < 1024) {
            setResizeIcon("22");
        } else if (window.innerWidth < 1280) {
            setResizeIcon("24");
        } else {
            setResizeIcon("28");
        }
    }

    useEffect(() => {
        handleResizeIcon();
        window.addEventListener("resize", handleResizeIcon);
        return () => {
            window.removeEventListener("resize", handleResizeIcon);
        }
    });

    useEffect(() => {
        if (locationPath === "/explore-destination") {
            setIsChangeColorIcon("!text-[#6F706F]");
            setIsChangeBgSearch("bg-[#F4F4F4]");
        } else {
            setIsChangeColorIcon("!text-[#ffffff]");
            setIsChangeBgSearch("bg-[#f4f4f430]");
        }
    }, [locationPath]);

    return (
        <div className={`flex items-center w-[85%] md:w-[75%] lg:w-[95%] xl:w-[75%] backdrop-blur-md rounded-full ${isChangeBgSearch}`}>
            <input
                className={`${className} flex-1 bg-transparent outline-none px-6 py-3 md:px-7 md:py-4 rounded-full`}
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <Icon icon="uil:search" width={resizeIcon} height={resizeIcon} className={`${isChangeColorIcon} mr-5 sm:mr-10`}/>
        </div>
    );
}

Search.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Search;