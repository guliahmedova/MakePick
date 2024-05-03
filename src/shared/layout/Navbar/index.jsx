import langs from "@/shared/media/const/langs";
import { avatar, questionMark, search } from "@/shared/media/imgs";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ setShowSidebar }) => {
    const [showDropdown, setShowDropDown] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);

    return (
        <header className="h-16 bg-transparent fixed top-0 left-0 right-0 w-full z-40">
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

                <ul className="flex items-center md:gap-5 gap-2">
                    <li className="font-medium md:block hidden">
                        <NavLink to="/offer" className={({ isActive }) => `flex items-center gap-1 ${isActive ? 'text-[#009e7f]' : ''}`}>
                            Offer
                        </NavLink>
                    </li>
                    <li className="font-medium md:block hidden">
                        <NavLink to="/offer" className={({ isActive }) => `flex items-center gap-1 ${isActive ? 'text-[#009e7f]' : ''}`}>
                            <img src={questionMark} alt="" className="w-3" />Need Help
                        </NavLink>
                    </li>
                    <li className="cursor-pointer relative">
                        <span onClick={() => setShowDropDown(!showDropdown)} className="flex items-center gap-2 sm:bg-white sm:rounded-md sm:shadow-sm py-2 px-3 font-medium sm:border">
                            <img src={langs[0].flag} className="w-5" alt="" /><span className="sm:block hidden">{langs[0].lang}</span>
                        </span>
                        <ul className={`${showDropdown ? "flex" : "hidden"} flex-col items-center mt-4 absolute right-2 w-full`}>
                            {langs.map((item, index) => (
                                <li className={`flex items-center gap-2 bg-white border px-10 py-6 font-medium ${index == 0 ? 'rounded-t' : index == langs.length - 1 ? "rounded-b" : ""}`} key={item.id}><img src={item.flag} alt="" className="w-5" />{item.lang}</li>
                            ))}
                        </ul>
                    </li>
                    <li className="font-medium hidden bg-[#009e7f] text-white py-2 px-3 rounded-md cursor-pointer">
                        <button type="button">Join</button>
                    </li>
                    <li className="relative md:block hidden">
                        <img src={avatar} alt="" className="w-10 rounded-full cursor-pointer border" onClick={() => setProfileDropdown(!profileDropdown)} />
                        <ul className={`absolute bg-white right-5 top-12 w-36 shadow-sm border rounded ${profileDropdown ? 'block' : 'hidden'}`}>
                            <li className="font-medium text-lg text-left w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200  ease-in-out"><NavLink to="/profile">Profile</NavLink></li>
                            <li className="font-medium text-lg text-left w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200  ease-in-out"><NavLink to="/profile">Profile</NavLink></li>
                            <li className="font-medium text-lg text-left w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200  ease-in-out"><NavLink to="/profile">Profile</NavLink></li>
                            <li className="font-medium text-lg text-left w-full px-4 py-4 hover:text-[#009e7f] transition-all duration-200  ease-in-out"><NavLink to="/profile">Profile</NavLink></li>
                        </ul>
                    </li>
                    <li className="md:hidden block"><img src={search} alt="" className="w-6" /></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;