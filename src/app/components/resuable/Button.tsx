
import s from './button.module.scss'

interface IButton {
    value: string;
    onClick?: () => void;
    className: string;
}

const Button:React.FC<IButton> = ({ value, onClick, className }:IButton) => {
  return (
    <button onClick={onClick} className={`${s.btn} ${className}`}>
      {value}
    </button>
  )
}

export default Button
