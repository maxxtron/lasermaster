import React, { useEffect, useState } from 'react';
import s from './scrollToTopButton.module.scss';

const ScrollToTopButton = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        setIsHeaderVisible(headerRect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${s.scrollToTopButton} ${!isHeaderVisible ? s.visible : ''}`}
      onClick={scrollToTop}
    ></button>
  );
};

export default ScrollToTopButton;
