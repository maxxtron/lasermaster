
import s from './button.module.scss'

interface IButton {
    value: string;
    onClick?: () => void;
    className: string;
    type?: string;
    disabled?: boolean;
}

const Button:React.FC<IButton> = ({ value, onClick, className, disabled }:IButton) => {
  return (
    <button onClick={onClick} className={disabled ? `${s.btn} ${className} ${s.btn_disabled}` : `${s.btn} ${className}` } disabled={disabled}>
      {value}
    </button>
  )
}

export default Button
