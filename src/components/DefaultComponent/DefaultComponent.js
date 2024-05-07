import React, { useState, useEffect } from 'react';
import TopHeaderComponent from '../HeaderComponent/TopHeaderComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Footer from '../FooterComponent/FooterComponent';
import MobileFooter from '../HeaderComponent/MobileFooter';

const DefaultComponent = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const handleResize = () => {
      const screenWidth = window.innerWidth;
      const mobileWidth = 961;
      setIsMobile(screenWidth <= mobileWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="">
      {!isMobile && <TopHeaderComponent />}
      <HeaderComponent />
      {isMobile && <MobileFooter />}
      {children}
      <Footer />
    </div>
  );
};

export default DefaultComponent;
