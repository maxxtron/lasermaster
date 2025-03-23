import React, { useEffect, useState } from 'react';
import s from './burgerMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface INav {
  id: number;
  name: string;
  link: string;
}

const links: INav[] = [
  { id: 1, name: 'Наші роботи', link: '#ourworks' },
  { id: 2, name: 'Обладнання', link: '#' },
  { id: 3, name: 'Прайс', link: '#' },
  { id: 4, name: 'Про компанію', link: '#' },
  { id: 5, name: 'Схема роботи', link: '#' },
  { id: 6, name: 'Часті питання', link: '#' },
  { id: 7, name: 'Де знаходимось', link: '#location' },
];

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, setActiveLink] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id: number) => {
    setIsOpen(false);
    setActiveLink(id);
  };

  return (
    <div className={`${s.burgerMenu} ${isOpen ? s.open : ''}`}>
      <button className={`${s.burgerButton} ${isOpen ? s.open : ''}`} onClick={toggleMenu}>
        <span className={s.bar}></span>
        <span className={s.bar}></span>
        <span className={s.bar}></span>
      </button>
      <nav className={`${s.menu} ${isOpen ? s.open : ''}`}>
        <div className={s.adress_container}>
          <span className={s.info}>м. Київ (Борщагівка), вул. Івана Дзюби 9</span>
          <span className={s.info}>Пн-Пт: 09:00–18:00</span>
          <div className={s.phone}>
            <Link href="tel:+380978542401" className={s.link_phone}>
              <Image
                src="/icons/phone.svg"
                alt="Телефон"
                width={16}
                height={16}
                className={s.icon_phone}
              />
              <span>+380 97 854 24 01</span>
            </Link>
          </div>
        </div>
        <ul className={s.nav_list}>
          {links.map((item) => (
            <li key={item.id}>
              <Link href={item.link} onClick={() => handleLinkClick(item.id)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={s.telegram}>
          <Link href="https://t.me/+380735084586" target="_blank">
            <Image src="/icons/telegram.png" alt="Телеграм" width={25} height={25} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
