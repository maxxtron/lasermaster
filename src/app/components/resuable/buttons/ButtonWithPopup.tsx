import React, { useState } from 'react';
import s from './buttonWithPopup.module.scss';
import Popup from '../popup/Popup';
import PopupCall from '../../OurProduct/PopupCall';

const ButtonWithPopup = () => {
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
