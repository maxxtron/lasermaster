import Link from 'next/link';
import s from './nav.module.scss';
import Image from 'next/image';
import { useState } from 'react';

interface INav {
  id: number;
  name: string;
  link: string;
}

const link: INav[] = [
  {
    id: 1,
    name: 'Наші роботи',
    link: '#ourworks',
  },
  {
    id: 2,
    name: 'Обладнання',
    link: '#',
  },
  {
    id: 3,
    name: 'Прайс',
    link: '#',
  },
  {
    id: 4,
    name: 'Про компанію',
    link: '#',
  },
  {
    id: 5,
    name: 'Схема роботи',
    link: '#',
  },
  {
    id: 6,
    name: 'Часті питання',
    link: '#',
  },
  {
    id: 7,
    name: 'Де знаходимось ',
    link: '#location',
  },
];
const Nav = () => {
  const [activeLink, setActiveLink] = useState<number>(0);

  return (
    <nav className={s.container}>
      <div className={s.up_level}>
        <ul className={s.list}>
          <div className={s.list_container}>
            <li className={s.info}>м. Київ (Борщагівка), вул. Івана Дзюби 9</li>
            <li className={s.info}>Пн-Пт: 09:00–18:00</li>
          </div>
          <li className={s.phone}>
            <Link href="tel:+380735084586" className={s.link_phone}>
              <span>+38 073 508 45 86</span>
            </Link>
          </li>
          <li className={s.phone_mobile}>
            <Link href="tel:+380735084586" className={s.link_phone}>
              <Image
                src="/icons/phone.svg"
                alt="Телефон"
                width={16}
                height={16}
                className={s.icon_phone}
              />
              <span>+38 073 508 45 86</span>
            </Link>
          </li>
          <li className={s.telegram}>
            <Link href="https://t.me/+380735084586">
              <Image src="/icons/telegram.png" alt="Телеграм" width={25} height={25} />
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.down_level}>
        <ul className={s.nav_list}>
          {link.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={activeLink === item.id ? s.nav_item_active : s.nav_item}
                onClick={() => setActiveLink(item.id)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
