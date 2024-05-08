import { close, shopping } from "@/shared/media/imgs";

const ShoppingCartSidebar = () => {
    return (
        <div className="w-3/12 h-full bg-white border shadow-lg fixed top-0 right-0 bottom-0 z-[50]">
            <div className="flex items-center justify-between mt-2 border-b p-3">
                <div className="flex items-center gap-2">
                    <img src={shopping} alt="" className="w-7" />
                    <span className="font-medium text-[#009e7f]">0 Item</span>
                </div>
                <button type="button"><img src={close} alt="" className="w-7" /></button>
            </div>

            <div className="h-full flex flex-col justify-around">
                <div className="flex flex-col items-center justify-center">
                    <img src={shopping} alt="" className="w-40 mb-5" />
                    <span className="font-medium text-gray-600">No products found</span>
                </div>

                <div className="text-center">
                    <span className="cursor-pointer font-medium text-[#009e7f]">Do you have a voucher?</span>
                    <form action="#" className="border shadow-lg w-11/12 mx-auto mt-2 p-2 rounded-md items-center hidden">
                        <input type="text" placeholder="Enter voucher code here" className="w-full outline-none" />
                        <button type="button" className="bg-gray-100 font-medium text-gray-600 px-5 py-1">Aplly</button>
                    </form>

                    <div className="bg-[#009e7f] w-full flex flex-col">
                        <span>Checkout</span>
                        <span >$0.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartSidebar;