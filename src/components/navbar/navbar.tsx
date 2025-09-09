import { Button } from '@/components/ui/button'
import { GithubLogo } from '../icons'
import Logo from './logo'
import { NavMenu } from './nav-menu'
import { NavigationSheet } from './navigation-sheet'
import Link from 'next/link'
import { Phone } from 'lucide-react'
// import BorderButton from '../subtle-button'

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-lg mx-auto rounded-sm">
        <div className="h-full flex items-center justify-between mx-auto px-3">
          <Link href={'/'} className="w-full">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block w-full" />

          <div className="flex items-center justify-end gap-2 w-full">
            <Button variant="default" className="shadow-none" asChild>
              <Link href={'/contact'}>
                {/* <Phone className="mr-1 h-4 w-4" /> */}
                <span
                  className={`relative mr-3 z-10 w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-amber-300/50 scale-110`}
                >
                  {/* Ripple effect */}
                  <div
                    className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-70"
                    style={{ animationDuration: '2s' }}
                  ></div>

                  {/* Blinking dot */}
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></div>
                </span>
                <hr />
                Contact us
              </Link>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
