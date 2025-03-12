import React, { useState, useEffect } from 'react';
import s from './buttonWithPopup.module.scss';
import Popup from '../Popups/Popup';
import PopupCall from '../Popups/PopupCall';

const ButtonWithPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('button_telegram');
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
        className={`${s.roundButton} ${!isHeaderVisible ? s.visible : ''}`}
        onClick={togglePopup}
      />
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopupCall onClose={() => setIsOpen(false)} />
      </Popup>
    </>
  );
};

export default ButtonWithPopup;
