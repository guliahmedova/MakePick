import langs from "@/shared/media/const/langs";
import { avatar, questionMark, search } from "@/shared/media/imgs";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ setShowSidebar, setAuthModal }) => {
    const [scrollNavbar, setScrollNavbar] = useState(false);
    const [selectedDropDown, setSelectedDropDown] = useState(null);

    const toggleDropDowns = (key) => {
        if (selectedDropDown == key) {
            setSelectedDropDown(null);
        } else {
            setSelectedDropDown(key);
        }
    };

    const changeNavbarBgOnScroll = () => {
        if (window.scrollY >= 100) {
            setScrollNavbar(true);
        } else {
            setScrollNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarBgOnScroll)

        return () => {
            window.removeEventListener('scroll', changeNavbarBgOnScroll);
        }
    }, []);

    return (
        <header className={`h-16 ${scrollNavbar ? 'bg-white h-20 border shadow-sm' : 'bg-transparent'} duration-300 ease-in-out fixed top-0 left-0 right-0 w-full z-40`}>
            <nav className="p-4 flex justify-between items-center w-full mx-auto">
                <div className="flex items-center gap-5">
                    <button type="button" className="flex flex-col gap-1 md:hidden" onClick={() => setShowSidebar(true)}>
                        <span className="w-7 bg-blue-950 block rounded-sm h-1"></span>
                        <span className="w-3 bg-blue-950 block rounded-sm h-1"></span>
                        <span className="w-7 bg-blue-950 block rounded-sm h-1"></span>
                    </button>
                    <Link to="/"><span className="font-bold text-2xl">
                        Make</span><span className="font-bold text-2xl text-[#009e7f]">Pick</span>
                    </Link>
                </div>

                <form action="#" className={`${scrollNavbar ? 'xl:flex hidden' : 'hidden'} duration-700 ease-in-out items-center gap-4 bg-gray-100 p-3 rounded-md border shadow-sm w-7/12`}>
                    <button type="button"><img className="w-6" src={search} alt="" /></button>
                    <input type="text" className="w-full bg-transparent outline-none" placeholder="Search your products from here" />
                </form>

                <ul className="flex items-center md:gap-5 gap-2">
                    <li className="font-medium md:block hidden">
                        <NavLink to="/offer" className={({ isActive }) => `flex items-center gap-1 ${isActive ? 'text-[#009e7f]' : ''}`}>
                            Offer
                        </NavLink>
                    </li>
                    <li className="font-medium md:block hidden">
                        <NavLink to="/help" className={({ isActive }) => `flex items-center gap-1 ${isActive ? 'text-[#009e7f]' : ''}`}>
                            <img src={questionMark} alt="" className="w-3" />Need Help
                        </NavLink>
                    </li>
                    <li className="cursor-pointer relative">
                        <span onClick={() => toggleDropDowns('langs')} className="flex items-center gap-2 sm:bg-white sm:rounded-md sm:shadow-sm py-2 px-3 font-medium sm:border-b">
                            <img src={langs[0].flag} className="w-5" alt="" /><span className="sm:block hidden">{langs[0].lang}</span>
                        </span>
                        <ul className={`${selectedDropDown == 'langs' ? "flex" : "hidden"} flex-col items-center mt-4 absolute right-2 w-44`}>
                            {langs.map((item, index) => (
                                <li
                                    className={`flex items-center justify-center gap-2 bg-white border py-4 font-medium w-full 
                                    ${index == 0 ? 'rounded-t' : index == langs.length - 1 ? "rounded-b" : ""}`}
                                    key={item.id}>
                                    <img src={item.flag} alt="" className="w-5" />{item.lang}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="font-medium bg-[#009e7f] text-white py-2 px-3 rounded-md shadow-sm cursor-pointer" onClick={() => setAuthModal(true)}>
                        <button type="button">Join</button>
                    </li>
                    <li className="relative md:block hidden z-[70]">
                        <img src={avatar} alt="" className="w-10 rounded-full cursor-pointer border" onClick={() => toggleDropDowns('account')} />
                        <ul className={`absolute bg-white right-5 top-14 w-auto shadow-md border rounded ${selectedDropDown == 'account' ? 'block' : 'hidden'}`}>
                            <li onClick={() => toggleDropDowns('account')} className="font-medium text-md text-left border-b w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200 ease-in-out">
                                <NavLink to="/profile" className='w-full block'>Profile</NavLink>
                            </li>
                            <li onClick={() => toggleDropDowns('account')} className="font-medium text-md text-left border-b w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200 ease-in-out">
                                <NavLink className='w-full block' to="/checkout">Checkout</NavLink>
                            </li>
                            <li onClick={() => toggleDropDowns('account')} className="font-medium text-md text-left border-b w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200 ease-in-out text-ellipsis whitespace-nowrap">
                                <NavLink className='w-full block' to="/checkout-alternative">Checkout Alternative</NavLink>
                            </li>
                            <li onClick={() => toggleDropDowns('account')} className="font-medium text-md text-left border-b w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200 ease-in-out">
                                <NavLink className='w-full block' to="/order">Your Order</NavLink>
                            </li>
                            <li onClick={() => toggleDropDowns('account')} className="font-medium text-md text-left border-b w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200 ease-in-out">
                                <NavLink className='w-full block' to="/order-received">Order Invoice</NavLink>
                            </li>
                            <li onClick={() => toggleDropDowns('account')} className="font-medium text-md text-left border-b w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200 ease-in-out">
                                <NavLink className='w-full block' to="/privacy">Privacy Policy</NavLink>
                            </li>
                            <li onClick={() => toggleDropDowns('account')} className="font-medium cursor-pointer text-md text-left w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200 ease-in-out">
                                Logout
                            </li>
                        </ul>
                    </li>
                    <li className="md:hidden block"><img src={search} alt="" className="w-6" /></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;