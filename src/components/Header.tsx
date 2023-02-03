import Image from 'next/image'
import Link from 'next/link'
import { SearchIcon, InfoIcon, StarIcon  } from '@chakra-ui/icons'

export function Header() {
  return (
    <div>
      <Image src="/logo.svg" alt="" width="100" height="48" />
      <nav>
        <ul>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Woman</Link></li>
          <li><Link href="#">Men</Link></li>
          <li><Link href="#">Beauty</Link></li>
          <li><Link href="#">Accesories</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </nav>
      <div className="commerce-menu">
        <ul>
          <li>
            <Link href="#"></Link>
          </li>
          <li>
            <Link href="#"></Link>
          </li>
          <li>
            <Link href="#"></Link>
          </li>
          <li>
            <Link href="#"></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;