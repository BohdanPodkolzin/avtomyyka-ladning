import { useState, useEffect } from "react";
import logo from "/muika.jpg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import "../index.css";

const Header = () => {
    const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const clickOnHumburgerMenu = () => {
        if (!openHamburgerMenu) {
            setOpenHamburgerMenu(true);
            disablePageScroll();
        } else {
            setOpenHamburgerMenu(false);
            enablePageScroll();
        }
    }

    return (
        <nav
            className={`flex header-bg sticky top-0 z-50 justify-between items-center h-20 transition-all duration-300 ${
                isScrolled ? "bg-[#090909] shadow-md" : "bg-transparent"
            }`}
        >

            {/* Logo Section */}
            <div className="flex xl:ml-15 lg:ml-10 ml-4" >
                <a href="#">
                    <img 
                        className='rounded-2xl border-[2.5px] border-[#a11313] cursor-pointer' 
                        src={logo} 
                        alt="Logo" 
                        height={60} 
                        width={60} 
                    />
                </a>
                <div className="ml-2 flex flex-col justify-center items-start header-font">
                    <a href="#">
                        <p className="leading-none">На</p>
                        <p className="leading-none ml-2">Львівській</p>
                    </a>
                </div>
            </div>

            {/* Navigation Sections */}
            <div className={`
                md:static min-lg:pl-20 max-lg:absolute 
                md:min-h-fit md:w-auto 
                ${!openHamburgerMenu ? `` : `max-lg:bg-[#090909]`} 
                max-lg:min-h-[60vh] max-lg:left-0 
                max-lg:top-[9%] max-lg:w-full 
                max-lg:flex max-lg:items-center 
                max-lg:px-10
            `}>
                <ul className={`
                    ${!openHamburgerMenu ? `max-md:hidden` : `flex`}
                    md:flex
                    min-lg:items-center
                    min-lg:gap-[4rem] 
                    max-lg:gap-[2rem] 
                    min-md:flex-row 
                    flex-col 
                    max-md:gap-[4rem]
                    md:gap-[1rem]
                    md:text-[12px]
                    lg:text-[1rem]
                `}>
                    <li><a className="header-font sections-effect" href="">ПРО НАС</a></li>
                    <li><a className="header-font sections-effect" href="">ПРАЙС</a></li>
                    <li><a className="header-font sections-effect" href="">КОНТАКТИ</a></li>
                    <li><a className="header-font sections-effect" href="">ВІДГУКИ</a></li>
                </ul>
            </div>

            {/* Phone Image */}
            <img 
                className='rounded-xl absolute z-[10] right-[25%] max-xl:hidden' 
                src="/rounded-phone.png" 
                height={50} 
                width={50} 
                alt="" 
            />

            {/* Parallelogram and Button Section */}
            <div className="parallelogram flex items-center justify-evenly text-white border-1 border-dotted">
                
                {/* Contact Details */}
                <div className="flex flex-col items-center justify-evenly ml-[10%] max-md:hidden">
                    <span className="header-font text-[1rem] ml-[5%]">099 75 85 101</span>
                    <span className="text-[0.6rem]">Телефонуйте Для Запису</span>
                </div>

                {/* Button */}
                <button className="w-[42%] bg-[#750e0e] parallelogram-button sm:text-[0.65rem] md:text-[0.9rem] xl:text-[1.2rem] max-sm:hidden">
                    Записатись
                </button>

                {/* Hamburger Menu for Small Screens */}
                <div className='md:hidden flex cursor-pointer' onClick={clickOnHumburgerMenu}>
                    { openHamburgerMenu ? (
                        <img src="/close.svg" alt="close" />
                    ) : (
                        <img src="/hamburger-menu.svg" alt="hamburger" />
                    )}
                </div>
            </div>

        </nav>
    );
}

export default Header;
