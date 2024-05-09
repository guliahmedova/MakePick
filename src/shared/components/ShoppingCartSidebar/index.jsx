import { ShoppingCart } from "@/shared/components";
import { close, shopping } from "@/shared/media/imgs";
import { useEffect, useState } from "react";

const ShoppingCartSidebar = ({ openSidebar, setOpenSidebar }) => {

    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        if (openSidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [openSidebar]);

    return (
        <div className={`w-full h-full bg-black/40 lg:bg-transparent fixed left-0 right-0 ltop-0 bottom-0 z-[50] transition-opacity duration-300 
        ${openSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white pb-2 lg:pb-20 h-fit xl:w-auto lg:w-4/12 lg:h-full absolute duration-700 shadow-lg border right-0 w-full bottom-0">

                <div className="flex items-center justify-between mt-2 border-b p-3">
                    <div className="flex items-center gap-2">
                        <img src={shopping} alt="" className="w-7" />
                        <span className="font-medium text-[#009e7f]">0 Item</span>
                    </div>
                    <button type="button" onClick={() => setOpenSidebar(false)}><img src={close} alt="" className="w-7 opacity-35" /></button>
                </div>

                <div className="h-full flex flex-col justify-">
                    {/* <div className="flex flex-col items-center justify-center">
                        <img src={shopping} alt="" className="w-40 mb-5" />
                        <span className="font-medium text-gray-600">No products found</span>
                    </div> */}

                    <div className="overflow-y-scroll lg:h-[30rem] h-80">
                        <ShoppingCart />
                        <ShoppingCart />
                        <ShoppingCart />
                        <ShoppingCart />
                        <ShoppingCart />
                        <ShoppingCart />
                        <ShoppingCart />
                        <ShoppingCart />
                        <ShoppingCart />
                        <ShoppingCart />
                    </div>

                    <div className="text-center mt-5">
                        <span className={`cursor-pointer font-medium text-[#009e7f] ${openForm ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                            onClick={() => setOpenForm(true)}>Do you have a voucher?</span>

                        <form action="#"
                            className={`border shadow-md w-11/12 mx-auto mt-2 h-12 rounded-md flex items-center duration-300 ease-in-out ${openForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <input type="text" placeholder="Enter voucher code here" className="w-full outline-none m-2" />
                            <button type="button" className="bg-[#009e7f] font-medium text-white rounded-lg m-1 px-5 py-1">Aplly</button>
                        </form>

                        <div className="bg-[#009e7f] flex items-center cursor-pointer justify-between mx-auto rounded-3xl text-white font-medium mt-10 shadow-lg w-11/12 h-14 py-1.5 px-1.5 pl-4">
                            <span className="m-1">Checkout</span>
                            <span className="bg-white text-[#009e7f] rounded-3xl flex flex-col items-center justify-center w-3/12 h-full">$0.00</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCartSidebar;