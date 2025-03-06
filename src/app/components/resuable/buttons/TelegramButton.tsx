import s from './telegramButton.module.scss';
import Link from 'next/link';

const ButtonWithPopup: React.FC = () => {
  return (
    <Link
      href="https://telegram.me/ra_alex_888"
      target="_blank"
      className={s.telegramButton}
    ></Link>
  );
};

export default ButtonWithPopup;
