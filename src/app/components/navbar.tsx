import Link from 'next/link'
import MobileNav from './mobileNavbar'
import { menuList } from '../constants/app'

export default function Navbar() {
  return (
    <header className='fixed top-0 inset-x-0 z-[99] bg-white/80 backdrop-blur-md border-b border-slate-100'>
      <nav className='max-w-7xl h-16 px-6 mx-auto flex items-center justify-between'>
        
        {/* Logo and Desktop Nav */}
        <div className='flex items-center gap-10'>
          <Link href="/" className="transition-opacity hover:opacity-80 size-10 max-h-10">
            <img
              src='/icon.jpg'
              alt='logo'
              className='size-10 rounded-full object-cover'
            />
          </Link>

          <div className='hidden md:flex items-center gap-8'>
            {menuList.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className='text-sm font-medium text-slate-600 hover:text-black transition-colors duration-200'
              >
                {menu.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className='flex items-center gap-4'>
          <Link
            href='#contact'
            className='hidden md:block px-5 py-2 text-sm font-medium bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all active:scale-95'
          >
            Contact us
          </Link>
          
          <MobileNav />
        </div>
        
      </nav>
    </header>
  )
}