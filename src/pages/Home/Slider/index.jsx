import { sl1, sl2, sl3, arrow } from "@/shared/media/imgs";

const Slider = () => {
    return (
        <div className="bg-white p-10">
            <div className="flex items-center relative">
                <button type="button" className="w-10 h-10 flex items-center justify-center rounded-full shadow-xl -left-5 bg-white border scale-[-1] absolute">
                    <img src={arrow} className="w-6" alt="" />
                </button>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center flex-nowrap overflow-hidden">
                    <div className="cursor-pointer"><img src={sl1} alt="" /></div>
                    <div className="cursor-pointer"><img src={sl2} alt="" /></div>
                    <div className="cursor-pointer"><img src={sl3} alt="" /></div>
                </div>
                <button type="button" className="w-10 h-10 flex items-center justify-center rounded-full shadow-xl -right-5 bg-white border absolute">
                    <img src={arrow} className="w-6" alt="" />
                </button>
            </div>
        </div>
    )
};

export default Slider;