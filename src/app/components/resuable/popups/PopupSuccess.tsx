import Button from '../buttons/Button';
import s from './popupSuccess.module.scss';

interface IClose {
  onClose: () => void;
}

const PopupSuccess = ({ onClose }: IClose) => {
  const handleSubmit = () => {
    onClose();
  };

  return (
    <div>
      <h2 className={s.title}>Hello</h2>
      <p className={s.text}>Чекайте на дзвінок. Наш консультант передзвонить вам протягом години</p>
      <Button value="До головної" className={s.success_btn_active} onClick={handleSubmit} />
    </div>
  );
};

export default PopupSuccess;
