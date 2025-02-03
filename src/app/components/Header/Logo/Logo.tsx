import Image from "next/image"
import Link from "next/link"


const Logo = () => {
  return (
    <div>
        <Link href={'/'}>
      <Image src="/img/logo.png" alt="Laser Master" width={168} height={54}/>
        </Link>
    </div>
  )
}

export default Logo

