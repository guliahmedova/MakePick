import { search, sl1, sl2, sl3 } from "@/shared/media/imgs";
import { createPortal } from "react-dom";
import MobileDemoPopup from "../MobileDemoPopup";
import { useEffect, useState } from "react";
const mobileDemoPopup = document.getElementById('mobileDemoPopup');

const Slider = () => {
    const [openDemoPopup, setOpenDemoPopup] = useState(false);

    useEffect(() => {
        if (openDemoPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [openDemoPopup]);

    return (
        <section className="lg:h-auto lg:mt-0 lg:pb-0 pb-10 mt-20">

            <div className="bg-white p-4 lg:hidden">
                <div className="flex justify-between mb-8 items-center">
                    <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis xl:text-xl font-medium text-slate-500">Branded & imported makeups</p>
                    <button type="button" onClick={() => setOpenDemoPopup(true)} className="xl:text-lg text-[#009e7f] font-medium flex items-center gap-2"><span className="w-1 h-1 block rounded-full bg-orange-500"></span>Makeup</button>
                </div>

                <form action="#" className="flex items-center gap-4 bg-gray-100 p-3 rounded-md border shadow-sm">
                    <button type="button"><img className="w-6" src={search} alt="" /></button>
                    <input type="text" className="w-full bg-transparent outline-none" placeholder="Search your products from here" />
                </form>
            </div>

            {
                createPortal(
                    <MobileDemoPopup openDemoPopup={openDemoPopup} setOpenDemoPopup={setOpenDemoPopup} />,
                    mobileDemoPopup
                )
            }

            <div className="bg-white lg:p-10 px-4 mt-9">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center flex-nowrap overflow-hidden">
                    <div className="cursor-pointer shadow border"><img src={sl1} alt="" /></div>
                    <div className="cursor-pointer shadow border"><img src={sl2} alt="" /></div>
                    <div className="cursor-pointer shadow border"><img src={sl3} alt="" /></div>
                </div>
            </div>
        </section>
    )
};

export default Slider;