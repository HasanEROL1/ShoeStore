import type { FC } from "react"

import { Link } from "react-router-dom"
import { GiHamburgerMenu as Menu } from "react-icons/gi"
import UserInfo from "./user-info"


const Header: FC = () => {
  // oturumu açık olan kullanıcı verisine eriş
 
  return (
    <header className="bg-white grid grid-cols-3 p-4 md:p-6 xl-p-8 rounded-2xl md:rounded-3xl xl:rounded-4xl mb-6 md:m-7 xl:mb-8 ">
      <button className="md:hidden cursor-pointer text-xl">
        <Menu />
      </button>
      <nav className="hidden md:flex items-center gap-6 xl:gap-10 font-semibold">
        <Link to="/" className="flex gap-2 whitespace-nowrap">Yeni Gelenler🔥</Link>
        <Link to="/">Erkek</Link>
        <Link to="/">Kadın</Link>
      </nav>
    
    <Link to="/" className="flex justify-center items-center">
      <img src="/logo.svg" alt="logo" />
      </Link>

  <div className="flex justify-center items-center cursor-pointer">
       <UserInfo/>
  </div>
   
    </header>
  )
}

export default Header