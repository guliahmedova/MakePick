import { close, pr1 } from "@/shared/media/imgs"

const ShoppingCart = () => {
    return (
        <div className="flex items-center justify-between gap-3 border-b p-4">

            <div className="bg-gray-100 flex flex-col items-center rounded-3xl p-2 border font-medium text-lg">
                <button type="button">+</button>
                <span className="select-none">1</span>
                <button type="button">-</button>
            </div>

            <div className="w-20">
                <img src={pr1} alt="" className="w-full h-full" />
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="w-9/12 font-bold">Bling Thing Liquid Lipcolour</h4>
                <span className="font-medium text-[#009e7f]">$20</span>
                <span className="text-gray-400 font-medium">2 X 1 pc(s)</span>
            </div>

            <div className="flex items-center font-medium gap-3">
                <span>$40.00</span>
                <button type="button" className="w-7"><img src={close} alt="" className="opacity-35" /></button>
            </div>
        </div>
    )
}

export default ShoppingCart