import Image from 'next/image';
import Link from 'next/link';
import s from './logo.module.scss';

const Logo = () => {
  return (
    <div>
      <Link href={'/'}>
        <Image src="/img/logo.png" alt="Laser Master" width={168} height={54} className={s.logo} />
        <Image
          src="/img/logo_small.png"
          alt="Laser Master"
          width={160}
          height={40}
          className={s.logo_small}
        />
      </Link>
    </div>
  );
};

export default Logo;
