import React, { useState } from 'react';
import s from './buttonWithPopup.module.scss';
import Popup from '../popups/Popup';
import PopupCall from '../popups/PopupCall';

const ButtonWithPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={s.roundButton} onClick={togglePopup} />
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopupCall onClose={() => setIsOpen(false)} />
      </Popup>
    </>
  );
};

export default ButtonWithPopup;
