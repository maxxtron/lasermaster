import Link from 'next/link'
import s from './nav.module.scss'
import Image from "next/image"

const Nav = () => {
  return (
    <nav className={s.container}>
      <div className={s.up_level}>
            <ul className={s.list}>
                <li className={s.info}>м. Київ (Борщагівка), вул. Івана Дзюби 9</li>
                <li className={s.info}>Пн-Пт: 09:00–18:00</li>
                <li className={s.phone}>
                    <Link href='tel:++380978542401' className={s.link_phone}>
                        <Image src='/icons/phone.png' alt='Телефон' width={24} height={24} />
                        <span>+380 97 854 24 01</span>
                    </Link>
                </li>
                <li className={s.telegram}>
                    <Link href='https://telegram.me/ra_alex_888'>
                        <Image src='/icons/telegram.png' alt='Телеграм' width={40} height={40} />
                    </Link>
                </li>
            </ul>
      </div>
    </nav>
  )
}

export default Nav
