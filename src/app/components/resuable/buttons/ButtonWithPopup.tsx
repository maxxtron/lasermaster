import React, { useState } from 'react';
import s from './buttonWithPopup.module.scss';
import Popup from '../popup/Popup';
import PopupCall from '../../OurProduct/PopupCall';
import Image from 'next/image';

const ButtonWithPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={s.roundButton} onClick={togglePopup}>
      {/* <Image src="/icons/phonebtn.svg" width={40} height={40} alt="call back" className={s.button_call}/> */}
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopupCall onClose={() => setIsOpen(false)} />
      </Popup>
    </button>
  );
};

export default ButtonWithPopup;
