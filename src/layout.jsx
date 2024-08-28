import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import FloatingButtons from './components/FloatingButton';


const TitleTab = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const routePath = location.pathname;
        let pageTitle = 'Placeir';

        if (routePath === '/') {
            document.title = pageTitle;
        } else if (routePath.startsWith('/explore')) {
            document.title = `${pageTitle} - Explore`;
        } else if (routePath.startsWith('/blog')) {
            document.title = `${pageTitle} - Blog`;
        } else if (routePath === '/about') {
            document.title = `${pageTitle} - About`;
        } else if (routePath === '/contact') {
            document.title = `${pageTitle} - Contact`;
        } else {
            document.title = `${pageTitle} - Not Found`;
        }
    }, [location]);

    return (
        <div>
            {children}
            <FloatingButtons />
        </div>
    );
};

TitleTab.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TitleTab;