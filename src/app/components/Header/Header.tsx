import s from './header.module.scss'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.container}>
            <Logo />
            <Nav />
        </div>
    </header>
  )
}

export default Header
