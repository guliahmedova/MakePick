import { sl1, sl2, sl3, arrow } from "@/shared/media/imgs";

const Slider = () => {
    return (
        <div className="bg-white p-10">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center flex-nowrap overflow-hidden">
                <div className="cursor-pointer"><img src={sl1} alt="" /></div>
                <div className="cursor-pointer"><img src={sl2} alt="" /></div>
                <div className="cursor-pointer"><img src={sl3} alt="" /></div>
            </div>
        </div>
    )
};

export default Slider;