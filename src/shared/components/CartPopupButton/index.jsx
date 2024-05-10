import { ShoppingCartSidebar } from "@/shared/components";
import { shoppingCart } from "@/shared/media/imgs";
import { useEffect, useRef, useState } from "react";

const CartPopupButton = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [cartButtonPosition, setCartButtonPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setCartButtonPosition({ x: rect.left, y: rect.top });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="bg-[#009e7f] lg:p-4 lg:w-30 fixed lg:top-96 right-0 bottom-0 left-0 lg:left-auto cursor-pointer lg:bottom-auto lg:rounded-tl-md lg:rounded-bl-md shadow-2xl z-30 flex justify-between items-center lg:block h-14 lg:h-auto lg:mb-0 mb-6 py-1.5 px-1.5 pl-4 rounded-3xl mx-3 lg:mx-0 lg:rounded-tr-none lg:rounded-br-none"
        onClick={() => setOpenSidebar(true)}>
        <div className="flex items-center lg:gap-4 gap-1 justify-center lg:mb-4">
          <img src={shoppingCart} alt="" className="w-4" />
          <span className="text-white font-medium text-sm">2 Items</span>
        </div>
        <span className="text-[#009e7f] font-medium text-center text-sm lg:block bg-white lg:rounded-md lg:py-3 sm:py-2 h-full rounded-3xl lg:w-full w-3/12 flex flex-col items-center justify-center">
          $24.10
        </span>
      </div>
      <ShoppingCartSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  )
}

export default CartPopupButton;