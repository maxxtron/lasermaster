import { useEffect, useState } from 'react';
import s from './telegramButton.module.scss';
import Link from 'next/link';

const TelegramButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const telegram_btn = document.getElementById('button_telegram');
      if (telegram_btn) {
        const headerRect = telegram_btn.getBoundingClientRect();
        setIsVisible(headerRect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      href="+380735084586"
      target="_blank"
      className={`${s.telegramButton} ${!isVisible ? s.visible : ''}`}
    ></Link>
  );
};

export default TelegramButton;
