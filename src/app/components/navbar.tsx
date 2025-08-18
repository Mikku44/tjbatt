import Link from 'next/link'
import MobileNav from './mobileNavbar'
import { menuList } from '../constants/app'

export default function Navbar () {


  return (
    <header className='top-0 fixed w-screen z-[99] bg-white shadow'>
      <nav className='max-w-7xl py-1 px-4 mx-auto flex items-center justify-between'>
        <div className='flex gap-2 items-center justify-center'>
          <Link href="/">
            <img
              src='/icon.jpg'
              alt='tj batt logo'
              className='size-14 rounded-full mr-5'
            />
          </Link>
          <div className='md:flex hidden'>
            {menuList.map((menu, index) => (
              <Link
                className='w-[100px] text-white p-1 mix-blend-difference text-center '
                key={index}
                href={menu.href}
              >
                {menu.label}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href={'#contact'}
          className='px-6 py-2 bg-[var(--primary)] text-white md:block hidden rounded-full'
        >
          Contact us
        </Link>

        <MobileNav />
       
      </nav>
    </header>
  )
}
