import React, { useEffect, useState } from 'react';
import s from './telegramButton.module.scss';

const ButtonWithPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${s.telegramButton} ${!isHeaderVisible ? s.visible : ''}`}
        onClick={togglePopup}
      />
      <a
        href="https://telegram.me/ra_alex_888"
        target="_blank"
        rel="noopener noreferrer"
        // className={!isHeaderVisible ? s.telegramButton : ''}
      />
    </>
  );
};

export default ButtonWithPopup;
