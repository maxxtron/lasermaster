import Button from '../Buttons/Button';
import s from './popupSuccess.module.scss';
import Image from 'next/image';

interface IClose {
  onClose: () => void;
}

const PopupSuccess = ({ onClose }: IClose) => {
  const handleSubmit = () => {
    onClose();
  };

  return (
    <div>
      <h2 className={s.title}>
        <Image src="/icons/success.svg" width={32} height={32} alt="Форму відправлено" />
        <span>Форму відправлено</span>
      </h2>
      <p className={s.text}>Чекайте на дзвінок. Наш консультант передзвонить вам протягом години</p>
      <Button value="До головної" className={s.success_btn_active} onClick={handleSubmit} />
    </div>
  );
};

export default PopupSuccess;
