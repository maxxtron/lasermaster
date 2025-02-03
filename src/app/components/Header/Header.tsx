import s from './header.module.scss'
import Logo from './Logo/Logo'

const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.container}>
            <Logo />
        </div>
    </header>
  )
}

export default Header
