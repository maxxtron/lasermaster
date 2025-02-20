import s from './ourWorks.module.scss';
import Image from 'next/image';

interface IOurWorks {
  id: number;
  img: string;
  alt: string;
  name: string;
  description: string[];
}

const ourWorksLaser: IOurWorks[] = [
  {
    id: 1,
    img: 'laser1.jpg',
    alt: 'Панель для офісу',
    name: 'Панель для офісу',
    description: ['Матеріал: Нержавіюча сталь', 'Товщина: 2 мм', 'Тип роботи: Декоративне різання'],
  },
  {
    id: 2,
    img: 'laser2.jpg',
    alt: 'Панель для офісу',
    name: 'Панель для офісу',
    description: ['Матеріал: Нержавіюча сталь', 'Товщина: 2 мм', 'Тип роботи: Декоративне різання'],
  },
  {
    id: 3,
    img: 'laser3.jpg',
    alt: 'Панель для офісу',
    name: 'Панель для офісу',
    description: ['Матеріал: Нержавіюча сталь', 'Товщина: 2 мм', 'Тип роботи: Декоративне різання'],
  },
];
const ourWorksMetal: IOurWorks[] = [
  {
    id: 1,
    img: 'metal1.jpg',
    alt: 'Панель для офісу',
    name: 'Панель для офісу',
    description: ['Матеріал: Нержавіюча сталь', 'Товщина: 2 мм', 'Тип роботи: Декоративне різання'],
  },
  {
    id: 2,
    img: 'metal2.jpg',
    alt: 'Панель для офісу',
    name: 'Панель для офісу',
    description: ['Матеріал: Нержавіюча сталь', 'Товщина: 2 мм', 'Тип роботи: Декоративне різання'],
  },
  {
    id: 3,
    img: 'metal3.jpg',
    alt: 'Панель для офісу',
    name: 'Панель для офісу',
    description: ['Матеріал: Нержавіюча сталь', 'Товщина: 2 мм', 'Тип роботи: Декоративне різання'],
  },
];

const OurWorks = () => {
  return (
    <section className={s.container} id="ourworks">
      <h3 className={s.ourworks_title}>Наші роботи</h3>
      <h2 className={s.projects_title}>
        Проєкти від Lasermaster:
        <br /> досконалість у кожній деталі
      </h2>
      <p className={s.looking_title}>Перегляньте, як ми реалізуємо ваші ідеї!</p>
      <h4 className={s.items_title}>Лазерне різання металу</h4>
      <div className={s.works_container}>
        {ourWorksLaser?.map((items) => {
          return (
            <div className={s.item_container} key={items?.id}>
              <Image
                src={`/img/${items.img}`}
                alt={items?.alt}
                width={283}
                height={263}
                className={s.image}
              />
              <span className={s.item_name}>{items.name}</span>
              {items?.description?.map((description, index) => (
                <span className={s.item_desc} key={index}>
                  {description}
                </span>
              ))}
            </div>
          );
        })}
      </div>
      <h4 className={s.items_title}>Гнуття металу</h4>
      <div className={s.works_container}>
        {ourWorksMetal?.map((items) => {
          return (
            <div className={s.item_container} key={items?.id}>
              <Image
                src={`/img/${items.img}`}
                alt={items?.alt}
                width={283}
                height={263}
                className={s.image}
              />
              <span className={s.item_name}>{items.name}</span>
              {items?.description?.map((description, index) => (
                <span className={s.item_desc} key={index}>
                  {description}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurWorks;
