import { shoppingCart } from "@/shared/media/imgs";
import { ShoppingCartSidebar } from "@/shared/components";

const CartPopupButton = () => {
  return (
    <>
      <div className="bg-[#009e7f] p-4 lg:w-40 fixed top-96 right-0 rounded-tl-md rounded-bl-md shadow-2xl z-40">
        <div className="flex items-center lg:gap-4 gap-2 justify-center mb-4">
          <img src={shoppingCart} alt="" className="lg:w-6 w-5" /> <span className="text-white font-medium lg:text-lg text-md">2 Items</span>
        </div>
        <span className="text-[#009e7f] font-medium text-center block bg-white rounded-md lg:py-3 py-2">
          $24.10
        </span>
      </div>

      <ShoppingCartSidebar />
    </>
  )
}

export default CartPopupButton;