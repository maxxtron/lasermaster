import { useEffect } from 'react';
import s from './popup.module.scss'

interface IPopup {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<IPopup> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Блокируем прокрутку при открытом попапе
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.popup} onClick={(e) => e.stopPropagation()}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.close} onClick={onClose}>
            <path d="M1 17L17 1M1 1L17 17" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {children}
      </div>
    </div>
  );
};
export default Popup;