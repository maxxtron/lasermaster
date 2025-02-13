import { useEffect, useState } from 'react';
import s from './popupcall.module.scss';
import Input from '../resuable/Input';
import Button from '../resuable/Button';
import Link from 'next/link';

interface IClose {
  onClose: () => void;
}

const PopupCall = ({ onClose }: IClose) => {
  const [number, setNumber] = useState<string>('+380');
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handlePhone = (e:React.InputEvent<HTMLFormElement>) => {
    setNumber(e.target.value.replace(/[^+\d]/g, ''))
    setError(false)
  } 

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

  const handleOnChange = (input: string): string => {
  // Если введённый текст не начинается с "+380", исправляем его
  // Если пользователь пытается удалить все, возвращаем просто "+380"
  if (!input.startsWith('+380')) {
    return '+380';
  }
  // Оставляем только цифры после "+380"
  const digits = input.substring(4).replace(/\D/g, '');
  // Ограничиваем ввод до 9 цифр после "+380"
  return '+380' + digits.substring(0, 9);
}
  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendPhone(number);
    onClose();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Замовлення дзвінка</h2>
      <span className={s.subtitle}>Надішліть форму і ми вам передзвонимо</span>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.phone_container}>
          <span className={s.phone_text}>Телефон</span>
          <Input
            value={number}
<<<<<<< HEAD
            onChange={(e) => handlePhone(e)}
=======
            onChange={(e) => {setNumber(handleOnChange(e.target.value))}}
>>>>>>> 09a9d45d607142bbaad343e14eb8d62c92f7b8b9
            placeholder='+000000000'
            className={s.phone_number}
            maxLength={13}
          />
        </div>
        <div className={s.checked_container}>
          <Input type='checkbox' id='terms' className={s.terms_checkbox} required />
          <label htmlFor='terms' className={s.terms_label}>Я погоджуюся з <Link href={'#'} className={s.checkbox_link}>Політикою конфіденційності</Link></label>
        </div>
        <Button
          value='Надіслати'
          className={isDisabled ? s.phone_btn_disabled : s.phone_btn_active}
          disabled={isDisabled}
          type='submit'
        />
      </form>
    </div>
  );
};

export default PopupCall;
