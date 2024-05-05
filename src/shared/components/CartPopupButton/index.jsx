import { shoppingCart } from "@/shared/media/imgs";

const CartPopupButton = () => {
  return (
    <div className="bg-[#009e7f] p-4 w-40 fixed top-96 right-0 rounded-tl-md rounded-bl-md shadow-2xl z-40">
      <div className="flex items-center gap-4 justify-center mb-4">
        <img src={shoppingCart} alt="" className="w-6" /> <span className="text-white font-medium text-lg">2 Items</span>
      </div>
      <span className="text-[#009e7f] font-medium text-center block bg-white rounded-md py-3">
        $24.10
      </span>
    </div>
  )
}

export default CartPopupButton;