import { useEffect, useState } from 'react';
import s from './popupcall.module.scss';
import Input from '../Inputs/Input';
import Button from '../Buttons/Button';
import Link from 'next/link';
import PopupSuccess from './PopupSuccess';
import Popup from './Popup';

interface IClose {
  onClose: () => void;
  isOpen?: boolean;
}
const PopupCall: React.FC<IClose> = ({ onClose }: IClose) => {
  const [number, setNumber] = useState<string>('+380');
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSendSuccess, setIsSendSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (number.length !== 13 || isChecked === false) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [number, isChecked]);
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
  };
  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendPhone(number);
    setIsSendSuccess(true);
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
            onChange={(e) => {
              setNumber(handleOnChange(e.target.value));
            }}
            placeholder="+000000000"
            className={s.phone_number}
            maxLength={13}
          />
        </div>
        <div className={s.checked_container}>
          <Input
            type="checkbox"
            id="terms"
            className={s.terms_checkbox}
            required
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="terms" className={s.terms_label}>
            Я погоджуюся з{' '}
            <Link href={'#'} className={s.checkbox_link}>
              Політикою конфіденційності
            </Link>
          </label>
        </div>
        <Button
          value="Надіслати"
          className={isDisabled ? s.phone_btn_disabled : s.phone_btn_active}
          disabled={isDisabled}
          type="submit"
        />
      </form>
      <Popup isOpen={isSendSuccess} onClose={onClose}>
        <PopupSuccess onClose={onClose} />
      </Popup>
    </div>
  );
};

export default PopupCall;
