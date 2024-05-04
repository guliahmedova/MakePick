import ProductPopup from "@/pages/Home/ProductPopup";
import { shopping } from "@/shared/media/imgs";
import { useState } from "react";
import { createPortal } from "react-dom";
const cardpopupEl = document.getElementById('cardpopup');

const ProductCard = ({ title, discPrice, price, imgs, discount, desc, tags, id }) => {
    const [openModal, setOpenModal] = useState(null);

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm p-3 cursor-pointer" onClick={(e) => {
                e.stopPropagation();
                setOpenModal(id);
            }}>
                <div className="relative">
                    <span className={`bg-[#ffad5e] p-1 px-3 text-sm text-white font-medium text-center rounded-xl absolute right-0 ${discount ? "inline" : "hidden"}`}>{discount}%</span>
                    <img src={imgs[0]} className="w-52" alt="" />
                </div>
                <div>
                    <h3 className="font-medium overflow-hidden text-ellipsis whitespace-nowrap mb-2">{title}</h3>
                    <span className="text-sm text-slate-500">1 pc(s)</span>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col mt-5">
                            <span className="text-[#ffad5e] text-sm italic line-through font-medium">${price}</span>
                            <span className="text-[#009e7f] font-medium">${discPrice}</span>
                        </div>
                        <button type="button" className="flex items-center hover:bg-[#009e7f] text-[#009e7f] hover:text-white duration-300 ease-in-out gap-3 border-2 shadow-sm rounded-3xl px-3 py-2 font-medium hover:fill-slate-50">
                            <img src={shopping} alt="" className="w-5 h-5" />
                            <span>Cart</span>
                        </button>
                    </div>
                </div>
            </div>

            {
                createPortal(
                    <ProductPopup imgs={imgs}
                        title={title} desc={desc}
                        tags={tags} price={price}
                        openModal={openModal}
                        id={id}
                        setOpenModal = {setOpenModal}
                        discPrice={discPrice} discount={discount} />,
                    cardpopupEl
                )
            }
        </>
    )
}

export default ProductCard;