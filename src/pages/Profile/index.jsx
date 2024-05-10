import { closeWhite, editPen, mastercard, paypal, visa } from "@/shared/media/imgs";
import { NavLink } from "react-router-dom";

const Profile = () => {
    return (
        <div className="w-full xl:h-screen flex flex-col items-center justify-center mt-20">
            <div className="w-full h-fit xl:px-20 flex xl:flex-row flex-col justify-between gap-4 px-2">

                <div className="rounded border shadow-md h-96 xl:w-4/12 w-full xl:flex hidden flex-col justify-between">
                    <div className="flex flex-col justify-center gap-10 font-medium h-[50%]">
                        <NavLink
                            className={({ isActive }) => `${isActive ? 'text-[#009e7f]' : ''} hover:text-[#009e7f] gap-10 duration-300 ease-in-out flex items-center`} to="/order">
                            <span className="w-0.5 rounded h-10 block bg-[#009e7f]"></span>Your Order
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `${isActive ? 'text-[#009e7f]' : ''} hover:text-[#009e7f] gap-10 duration-300 ease-in-out flex items-center`} to="/help">
                            <span className="w-0.5 rounded h-10 block bg-[#009e7f]"></span>Need Help
                        </NavLink>
                    </div>
                    <div className="flex flex-col gap-10 justify-center font-medium h-[50%] bg-gray-100">
                        <NavLink
                            className={({ isActive }) => `${isActive ? 'text-[#009e7f]' : ''} hover:text-[#009e7f] gap-10 duration-300 ease-in-out flex items-center`} to="/profile">
                            <span className="w-0.5 rounded h-10 block bg-[#009e7f]"></span>Profile
                        </NavLink>
                        <span className="pl-10">Logout</span>
                    </div>
                </div>

                <div className="border shadow-md rounded w-full xl:px-20 px-5 py-10">
                    <h3 className="font-bold text-blue-950 text-xl">Your Profile</h3>
                    <form action="#" className="mt-10 flex flex-col xl:flex-row items-center justify-between gap-5">
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="name" className="font-bold opacity-45">Name</label>
                            <input type="text" id="name"
                                className="bg-gray-100 py-4 px-2 border shadow-sm rounded-md outline-[#009e7f]" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="email" className="font-bold opacity-45">Email</label>
                            <input type="email" id="email"
                                className="bg-gray-100 py-4 px-2 border shadow-sm rounded-md outline-[#009e7f]" />
                        </div>
                        <button className="bg-[#009e7f] shadow-md xl:w-3/12 w-full rounded-md text-white font-medium xl:mt-9 mt-3 py-4 text-xl">Save</button>
                    </form>
                    <div className="xl:mt-5 mt-10">
                        <h6 className="font-medium mb-4">Contact Number</h6>
                        <div className="grid xl:grid-cols-3 grid-cols-1 items-center gap-4">
                            <div className="border border-[#009e7f] w-full rounded-md fl shadow-sm p-2 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Primary</span>
                                <p>202-555-0191</p>
                            </div>
                            <div className="w-full rounded-md shadow-sm p-2 bg-gray-50 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Secondary</span>
                                <p>202-555-0191</p>
                            </div>
                            <div className=" hover:border hover:border-[#009e7f] duration-300 ease-in-out w-full text-center p-2 h-full rounded-md flex flex-col items-center justify-center font-medium text-[#009e7f] cursor-pointer">
                                Add Contact
                            </div>
                        </div>
                    </div>

                    <div className="xl:mt-5 mt-10">
                        <h6 className="font-medium mb-4">Payment Option</h6>
                        <div className="flex justify-between font-medium text-[#009e7f] mt-5">
                            <span className="cursor-pointer">Saved Cards</span>
                            <span className="cursor-pointer">+ Add Card</span>
                        </div>

                        <div className="flex items-center mt-6 justify-between gap-3 overflow-x-scroll">
                            <div className="bg-blue-100 w-full border border-[#009e7f] rounded shadow-sm p-4">
                                <img src={paypal} alt="" className="w-10" />
                                <span className="font-medium text-gray-500 text-sm">Card Number</span>
                                <div className="mt-5 flex items-center gap-10">
                                    <span>****</span>
                                    <span>****</span>
                                    <span>****</span>
                                    <span>2349</span>
                                </div>
                                <p className="font-medium mt-2">Jhon Doe Smith</p>
                            </div>
                            <div className="bg-blue-100 w-full border border-[#009e7f] rounded shadow-sm p-4">
                                <img src={mastercard} alt="" className="w-10" />
                                <span className="font-medium text-gray-500 text-sm">Card Number</span>
                                <div className="mt-5 flex items-center gap-10">
                                    <span>****</span>
                                    <span>****</span>
                                    <span>****</span>
                                    <span>2349</span>
                                </div>
                                <p className="font-medium mt-2">Jhon Doe Smith</p>
                            </div>
                            <div className="bg-blue-100 w-full border border-[#009e7f] rounded shadow-sm p-4">
                                <img src={visa} alt="" className="w-10" />
                                <span className="font-medium text-gray-500 text-sm">Card Number</span>
                                <div className="mt-5 flex items-center gap-10">
                                    <span>****</span>
                                    <span>****</span>
                                    <span>****</span>
                                    <span>2349</span>
                                </div>
                                <p className="font-medium mt-2">Jhon Doe Smith</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile