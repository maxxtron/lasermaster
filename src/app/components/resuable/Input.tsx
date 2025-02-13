import s from './input.module.scss'

interface IInput {
    id?: string | number;
    value?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    maxLength?: number;
}

const Input: React.FC<IInput> = ({value, placeholder, onChange, className, maxLength, type}) => {
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={onChange} className={`${s.input} ${className}`} maxLength={maxLength}/>
  )
}

export default Input
