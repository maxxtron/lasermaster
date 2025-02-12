import { useEffect, useState } from 'react';
import s from './popupcall.module.scss';
import Input from '../resuable/Input';
import Button from '../resuable/Button';

interface IClose {
  onClose: () => void;
}

const PopupCall = ({ onClose }: IClose) => {
  const [number, setNumber] = useState<string>('+380');
  const [isDisabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        if(number.length !== 13){
            setDisabled(true);
        } else {
            setDisabled(false);
        }}, [number])
  // Асинхронная функция для отправки данных
  const sendPhone = async (phone: string) => {
    try {
      const response = await fetch('https://api.lasermaster.com.ua/lead/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }), // отправка phone в теле запроса
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке номера телефона');
      }

      const data = await response.json();
      console.log('Ответ от сервера:', data);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    await sendPhone(number); // отправляем номер
    onClose(); // закрываем попап после отправки
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Замовлення дзвінка</h2>
      <span className={s.subtitle}>Надішліть форму і ми вам передзвонимо</span>

      {/* Оборачиваем Input и Button в форму */}
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.phone_container}>
          <span className={s.phone_text}>Телефон</span>
          <Input
            value={number}
            onChange={(e) => setNumber(e.target.value.replace(/[^+\d]/g, ''))}
            placeholder='+000000000'
            className={s.phone_number}
            maxLength={13}
          />
        </div>
        {/* Кнопка для отправки формы */}
        <Button
          value='Надіслати'
          className={isDisabled ? s.phone_btn_disabled : s.phone_btn_active}
          disabled={isDisabled}
          type='submit' // указываем type submit для кнопки
        />
      </form>
    </div>
  );
};

export default PopupCall;
