import { HiHome, HiSearch } from "react-icons/hi"
import { BsFillKeyFill } from "react-icons/bs"
import { IoMdInformationCircle } from "react-icons/io"
import { MdPermContactCalendar } from "react-icons/md"
import { FcMenu } from "react-icons/fc"
import Divider from "../../ui/divider"
import Navlinks from "./NavLinks"
import Logo from "./NavLogo"
import { useState } from "react"

const NavBar = () => {
  const [menuState, setMenuState] = useState(false)
  const toggleMenu = () => {
    setMenuState((prevMenuState) => (prevMenuState = !prevMenuState))
  }

  return (
    <>
      <header className='relative z-10 flex w-full items-center justify-between py-4 md:px-5 md:py-5 lg:px-7 lg:py-7'>
        {/* Logo */}
        <div className='ml-5 mt-1 w-24 md:w-36 lg:w-44'>
          <Logo />
        </div>
        {/* Sandwich Button */}
        <button className='mr-5 md:hidden' onClick={toggleMenu}>
          <FcMenu size={35} />
        </button>
        {/* Tablet&Up-NavMenu */}
        <nav className='hidden md:block'>
          <ul className='flex items-center justify-end'>
            <Navlinks
              name='My Home'
              destination='/'
              icon={<HiHome size={35} />}
            />
            <Navlinks
              name='Search'
              destination='/search'
              icon={<HiSearch size={35} />}
            />
            <Navlinks
              name='Featured'
              destination='/featured'
              icon={<BsFillKeyFill size={35} />}
            />
            <Navlinks
              name='About'
              destination='/about'
              icon={<IoMdInformationCircle size={35} />}
            />
            <Navlinks
              name='Contact'
              destination='/contact'
              icon={<MdPermContactCalendar size={35} />}
            />
          </ul>
        </nav>
        {/* Mobile-NavMenu */}
        <nav
          className={`${
            menuState ? "translate-x-0" : "-translate-x-full"
          } absolute top-20 h-screen w-3/4 rounded-tr-lg rounded-br-lg bg-gray-50 shadow-xl transition-transform duration-500 md:hidden`}>
          <ul className='flex flex-col'>
            <Navlinks
              name='My Home'
              destination='/'
              icon={<HiHome size={30} />}
            />
            <Divider />
            <Navlinks
              name='Search'
              destination='/search'
              icon={<HiSearch size={30} />}
            />
            <Divider />
            <Navlinks
              name='Featured'
              destination='/featured'
              icon={<BsFillKeyFill size={30} />}
            />
            <Divider />
            <Navlinks
              name='About'
              destination='/about'
              icon={<IoMdInformationCircle size={30} />}
            />
            <Divider />
            <Navlinks
              name='Contact'
              destination='/contact'
              icon={<MdPermContactCalendar size={30} />}
            />
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar