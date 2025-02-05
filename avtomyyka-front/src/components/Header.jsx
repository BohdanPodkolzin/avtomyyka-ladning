import { useState } from "react"
import logo from "/muika.jpg"
import { disablePageScroll, enablePageScroll } from "scroll-lock";


const Header = () => {
    const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

    const clickOnHumburgerMenu = () => {
        if (!openHamburgerMenu) {
            setOpenHamburgerMenu(true)
            disablePageScroll();
        } else {
            setOpenHamburgerMenu(false);
            enablePageScroll();
        }
    }

  return (
    <nav className="flex justify-between items-center h-20 bg-[#090909]">
        <div className="flex xl:ml-15 lg:ml-10 ml-4">
            <img className='rounded-2xl border-[2.5px] border-[#a11313]' src={logo} alt="Logo" height={60} width={60} />

            <div className="ml-2 flex flex-col justify-center font-[Comfortaa] font-bold items-start text-white">
                <p className="leading-none">На</p>
                <p className="leading-none ml-2">Львівській</p>
            </div>
        </div>
        <div
            className={`
                md:static min-lg:pl-20 max-lg:absolute 
                md:min-h-fit md:w-auto 
                ${!openHamburgerMenu ? `` : `max-lg:bg-white`} 
                max-lg:min-h-[60vh] max-lg:left-0 
                max-lg:top-[9%] max-lg:w-full 
                max-lg:flex max-lg:items-center 
                max-lg:px-10
            `}>
            <ul
                className={`
                ${!openHamburgerMenu ? `max-md:hidden` : `flex`}
                md:flex
                min-lg:items-center 
                min-lg:gap-[4rem] 
                max-lg:gap-[2rem] 
                min-md:flex-row 
                flex-col 
                max-md:gap-[4rem]
                `} 
            >
                <li><a className="hover:text-gray-500 text-white" href="">ПРО НАС</a></li>
                <li><a className="hover:text-gray-500 text-white" href="">ПРАЙС</a></li>
                <li><a className="hover:text-gray-500 text-white" href="">КОНТАКТИ</a></li>
                <li><a className="hover:text-gray-500 text-white" href="">ВІДГУКИ</a></li>
            </ul>
        </div>


        <div className="flex xl:mr-15 lg:mr-10 mr-4">
            <div className="max-md:hidden ">
                <span>099 75 85 101</span>
            </div>
            <button className="bg-[#a6c1ee] text-white rounded-full hover:bg-[#87acec] max-sm:hidden">Записатись</button>

            <div className='md:hidden flex cursor-pointer' onClick={clickOnHumburgerMenu} >
                { openHamburgerMenu ? (
                    <img src="/close.svg" alt="close" />
                ) : (
                    <img src="/hamburger-menu.svg" alt="hamburger" />
                )

                }
            </div>
        </div>

        

    </nav>
  )
}

export default Header
