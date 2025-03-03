import React, { useState, useEffect } from 'react';
import s from './buttonWithPopup.module.scss';
import Popup from '../popups/Popup';
import PopupCall from '../popups/PopupCall';

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
      <button className={!isHeaderVisible ? s.roundButton : ''} onClick={togglePopup} />
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopupCall onClose={() => setIsOpen(false)} />
      </Popup>
    </>
  );
};

export default ButtonWithPopup;
