import { useState } from "react"
import { Logo, InputField } from "../index";

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <header className="flex items-center justify-between mx-auto bg-[#C2C9FF] py-6 px-1">
        <Logo />
        <InputField classes={"outline-none w-1/2 font-bold border-2 border-[#FAF3DD] rounded px-2 py-1 bg-transparent text-[#1E3A8A]"} type={"text"} placeholder={"Search...🔍"} />

        <div className="desktopMenuContainer flex items-center justify-between gap-3 gl hidden md:flex">
          <nav className={`flex items-center bg-[#C2C9FF] transition-all duration-300 ease-in-out rounded"
            }`}>
            <ul className="list-none flex flex-row gap-4 text-[#1E3A8A] transition-all duration-300 ease-in-out">
              <li className="hover:text-black cursor-pointer font-bold">Home</li>
              <li className="hover:text-black cursor-pointer font-bold">Blogs</li>
              <li className="hover:text-black cursor-pointer font-bold">About</li>
              <li className="hover:text-black cursor-pointer font-bold">Contact Us</li>
              <li className="hover:text-black cursor-pointer font-bold">My Account</li>
            </ul>
          </nav>
        </div>
        <button className="hidden md:block hover:text-[#FAF3DD] w-20 text-center hover:bg-[#1E3A8A] cursor-pointer font-bold text-[#1E3A8A] border-[#1E3A8A] border-2 p-2 rounded">Login</button>


        <div className="hamburgerMenuContainer">
          <button
            className="block md:hidden flex items-center justify-center px-2"
            onClick={toggleHamburgerMenu}
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-1 overflow-y-hidden">
              <span
                className={`bg-[#1E3A8A] rounded block w-6 h-1 bg-gray-800 transition-all duration-300 ease-in-out ${openMenu ? 'rotate-45 translate-y-0.7' : ''
                  }`}
              ></span>
              <span
                className={`bg-[#1E3A8A] rounded block h-1 bg-gray-800 transition-all duration-300 ease-in-out ${openMenu ? 'w-5' : 'w-6'
                  }`}
              ></span>
              <span
                className={`bg-[#1E3A8A] rounded block w-6 h-1 bg-gray-800 transition-all duration-300 ease-in-out ${openMenu ? '-rotate-45 -translate-y-0.7' : ''
                  }`}
              ></span>
            </div>
          </button>
          <nav className={`block absolute w-[15rem] h-1/2 right-0 bg-[#C2C9FF] shadow-lg p-4 transition-all duration-300 ease-in-out rounded bg-[#C2C9FF] ${openMenu ? "top-[100px] right-[-100px]" : "right-[-1000px] top-[100px]"
            }`}>
            <ul className="list-none flex flex-col gap-2 text-[#1E3A8A] transition-all duration-300 ease-in-out">
              <li className="hover:text-black cursor-pointer font-bold mt-2">Home</li>
              <li className="hover:text-black cursor-pointer font-bold">Blogs</li>
              <li className="hover:text-black cursor-pointer font-bold">About</li>
              <li className="hover:text-black cursor-pointer font-bold">Contact Us</li>
              <span className="my-4 border-2 w-[100px] bg-[#FAF3DD] rounded"></span>
              <li className="hover:text-black cursor-pointer font-bold">My Account</li>
              <li className="hover:text-black cursor-pointer font-bold">Login</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
