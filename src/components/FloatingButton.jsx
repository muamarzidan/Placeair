import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';


const FloatingButtons = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [showSpeaker, setShowSpeaker] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (location.pathname === '/explore') {
            setShowSpeaker(true);
        } else {
            setShowSpeaker(false);
        }
    }, [location]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="container relative flex justify-end w-full">
            <div className="z-[2000] flex justify-end space-x-3 fixed w-fit bottom-14 sm:bottom-20">
                {showScrollToTop && (
                    <button
                        onClick={scrollToTop}
                        className="flex items-center justify-center w-12 h-12 rounded-full sm:h-14 sm:w-14 bg-primary focus:outline-none"
                    >   
                        <Icon icon="iconamoon:arrow-top-right-2" width={34} height={44} className="w-auto h-auto pt-1 pr-1 text-white -rotate-45" />
                    </button>
                )}
                {showSpeaker && (
                    <button
                        className="flex items-center justify-center w-12 h-12 rounded-full sm:h-14 sm:w-14 bg-primary focus:outline-none"
                    >   
                        <Icon icon="fluent:speaker-2-24-filled" width={24} height={24} className="w-auto h-auto text-white" />
                    </button>
                )}
        </div>
        </div>

    );
};

export default FloatingButtons;