import s from './input.module.scss'

interface IInput {
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    maxLength?: number;
}

const Input: React.FC<IInput> = ({value, placeholder, onChange, className, maxLength}) => {
  return (
    <input value={value} placeholder={placeholder} onChange={onChange} className={`${s.input} ${className}`} maxLength={maxLength}/>
  )
}

export default Input
