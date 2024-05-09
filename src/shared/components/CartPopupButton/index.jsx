import { ShoppingCartSidebar } from "@/shared/components";
import { shoppingCart } from "@/shared/media/imgs";
import { useState } from "react";

const CartPopupButton = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div className="bg-[#009e7f] lg:p-4 lg:w-40 fixed lg:top-96 right-0 bottom-0 left-0 lg:left-auto cursor-pointer lg:bottom-auto lg:rounded-tl-md lg:rounded-bl-md shadow-2xl z-40 flex justify-between items-center lg:block h-14 lg:h-auto lg:mb-0 mb-6 py-1.5 px-1.5 pl-4 rounded-3xl mx-3 lg:mx-0 lg:rounded-tr-none lg:rounded-br-none"
        onClick={() => setOpenSidebar(true)}>
        <div className="flex items-center lg:gap-4 gap-2 justify-center lg:mb-4">
          <img src={shoppingCart} alt="" className="lg:w-6 w-5" /> <span className="text-white font-medium lg:text-lg text-md">2 Items</span>
        </div>
        <span className="text-[#009e7f] font-medium text-center lg:block bg-white lg:rounded-md lg:py-3 sm:py-2 h-full rounded-3xl  lg:w-full w-3/12 flex flex-col items-center justify-center">
          $24.10
        </span>
      </div>
      <ShoppingCartSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  )
}

export default CartPopupButton;