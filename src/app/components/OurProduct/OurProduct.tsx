import Link from 'next/link';
import Button from '../resuable/buttons/Button';
import s from './ourproduct.module.scss';
import Image from 'next/image';
import Popup from '../resuable/popups/Popup';
import { useState } from 'react';
import PopupCall from '../resuable/popups/PopupCall';
interface IMaterials {
  id: number;
  icon: string;
  name: string;
}

const materials: IMaterials[] = [
  {
    id: 1,
    icon: '/icons/ok.svg',
    name: 'Вуглецевої сталі',
  },
  {
    id: 2,
    icon: '/icons/ok.svg',
    name: 'Оцинкованої сталі',
  },
  {
    id: 3,
    icon: '/icons/ok.svg',
    name: 'Нержавіючої сталі',
  },
  {
    id: 4,
    icon: '/icons/ok.svg',
    name: 'Алюмінію',
  },
  {
    id: 5,
    icon: '/icons/ok.svg',
    name: 'Латуні',
  },
];

const OurProduct = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className={s.main}>
      <div className={s.image_container}>
        <div className={s.info_container}>
          <div className={s.title_2}>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={s.icon_product}
            >
              <path
                d="M28 37.3333C14.56 37.3333 12.18 23.94 11.76 13.314C11.641 10.36 11.5827 8.88067 12.6933 7.51567C13.8017 6.14833 15.1293 5.92433 17.787 5.47633C21.163 4.92332 24.5791 4.6525 28 4.66667C32.1627 4.66667 35.5903 5.033 38.213 5.47633C40.8707 5.92433 42.1983 6.14833 43.309 7.51567C44.4197 8.883 44.359 10.36 44.2423 13.314C43.8223 23.94 41.4423 37.3333 28.0023 37.3333H28Z"
                stroke="#E8AF1D"
                strokeWidth="2"
              />
              <path
                d="M28 37.3334V44.3334"
                stroke="#E8AF1D"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M36.1667 51.3333H19.8333L20.6267 47.376C20.7324 46.8472 21.0179 46.3714 21.4348 46.0294C21.8517 45.6874 22.3741 45.5003 22.9133 45.5H33.0867C33.6259 45.5003 34.1484 45.6874 34.5652 46.0294C34.9821 46.3714 35.2677 46.8472 35.3733 47.376L36.1667 51.3333Z"
                stroke="#E8AF1D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44.3333 11.6666L46.5477 12.404C48.8577 13.174 50.0127 13.559 50.673 14.476C51.3333 15.393 51.3333 16.6133 51.3333 19.0446V19.215C51.3333 21.2216 51.3333 22.2273 50.8503 23.0486C50.3673 23.87 49.4877 24.3576 47.733 25.3353L40.8333 29.1666M11.6667 11.6666L9.45234 12.404C7.14234 13.174 5.98734 13.559 5.32701 14.476C4.66667 15.393 4.66667 16.6133 4.66667 19.0446V19.215C4.66667 21.2216 4.66667 22.2273 5.14967 23.0486C5.63267 23.87 6.51234 24.3576 8.267 25.3353L15.1667 29.1666M26.0073 14.0536C26.894 12.46 27.3373 11.6666 28 11.6666C28.6627 11.6666 29.106 12.46 29.9927 14.0536L30.2213 14.4643C30.4733 14.917 30.5993 15.141 30.7953 15.2903C30.9937 15.4396 31.2387 15.4956 31.7287 15.6053L32.172 15.708C33.894 16.0976 34.755 16.2913 34.9603 16.9493C35.1657 17.6073 34.5777 18.2956 33.404 19.6676L33.1007 20.0223C32.767 20.412 32.599 20.6056 32.5243 20.8483C32.4497 21.091 32.4753 21.35 32.5243 21.8703L32.571 22.344C32.7483 24.1756 32.837 25.0926 32.3027 25.4986C31.766 25.9046 30.9587 25.5336 29.3463 24.7916L28.931 24.6003C28.4713 24.3903 28.2427 24.2853 28 24.2853C27.7573 24.2853 27.5287 24.3903 27.069 24.6003L26.6537 24.7916C25.0413 25.536 24.234 25.9046 23.6973 25.4986C23.1607 25.0926 23.2517 24.1756 23.429 22.344L23.4757 21.8703C23.5247 21.35 23.5503 21.091 23.4757 20.8483C23.401 20.6056 23.233 20.412 22.8993 20.0223L22.596 19.6676C21.4223 18.2956 20.8343 17.6096 21.0397 16.9493C21.245 16.2913 22.106 16.0976 23.828 15.708L24.2713 15.6053C24.7613 15.4956 25.0063 15.442 25.2047 15.2903C25.4007 15.141 25.5267 14.917 25.7787 14.4643L26.0073 14.0536Z"
                stroke="#E8AF1D"
                strokeWidth="2"
              />
              <path d="M42 51.3334H14" stroke="#E8AF1D" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h2>Власне виробництво</h2>
          </div>
          <h1 className={s.title_1}>
            <span>Лазерне різання</span> листових металів <br /> 0,5 - 20 мм
          </h1>
          <ul className={s.material_list}>
            {materials.map((material) => (
              <li key={material.id} className={s.material}>
                <Image
                  src={material.icon}
                  className={s.material_img}
                  width={24}
                  height={24}
                  alt={material.name}
                />
                <p className={s.material_text}>{material.name}</p>
              </li>
            ))}
          </ul>
          <div className={s.button_container} id="button_telegram">
            <Link href="https://telegram.me/ra_alex_888" className={s.button_link} target="_blank">
              <Button value="Написати в Telegram" className={s.btn_telegram} />
            </Link>
            <Button
              value="Замовити дзвінок"
              onClick={() => setIsOpen((prev) => !prev)}
              className={s.btn_call}
            />
          </div>
        </div>
        <div className={s.contact_container}>{/* <h2>Контакти</h2> */}</div>
      </div>
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopupCall onClose={() => setIsOpen(false)} isOpen={isOpen} />
      </Popup>
    </section>
  );
};

export default OurProduct;
