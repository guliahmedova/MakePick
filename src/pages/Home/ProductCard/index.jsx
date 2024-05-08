import ProductPopup from "@/pages/Home/ProductPopup";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
const cardpopupEl = document.getElementById('cardpopup');

const ProductCard = ({ title, discPrice, price, imgs, discount, desc, tags, id }) => {
    const [openModal, setOpenModal] = useState(null);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        if (scroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [scroll]);

    return (
        <>
            <div className="bg-white rounded-lg shadow p-3 cursor-pointer" onClick={(e) => {
                e.stopPropagation();
                setOpenModal(id);
                setScroll(true);
            }}>
                <div className="relative">
                    <span className={`bg-[#ffad5e] p-1 px-3 text-sm text-white font-medium text-center rounded-xl absolute right-0 ${discount ? "inline" : "hidden"}`}>{discount}%</span>
                    <img src={imgs[0]} className="lg:w-52 mx-auto w-20" alt="" />
                </div>
                <div>
                    <h3 className="font-medium overflow-hidden text-ellipsis xl:whitespace-nowrap mb-2">{title}</h3>
                    <span className="text-sm text-slate-500">1 pc(s)</span>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col mt-5">
                            <span className="text-[#ffad5e] text-sm italic line-through font-medium">${price}</span>
                            <span className="text-[#009e7f] font-medium">${discPrice}</span>
                        </div>
                        <button type="button" className="flex items-center group hover:bg-[#009e7f] text-[#009e7f] hover:text-white duration-300 ease-in-out gap-3 border-2 shadow-sm rounded-3xl px-3 py-2 font-medium hover:fill-slate-50">
                            <svg width="17px" className="group-hover:fill-white fill-[#009e7f] duration-200" height="17px" viewBox="-0.5 0 13 13" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_2" data-name="Path 2" d="M106.974,837h-12l2-11.031h1.989a1.98,1.98,0,0,1,3.96,0h2.051Zm-6-12.011c-1.042-.01-1.04.338-1.04.98h2.049C101.983,825.367,102.013,825,100.974,824.989ZM102.925,827v.994h-.943V827H99.933v.994h-.974V827H97.848l-1.75,9h9.719l-1.75-9ZM101,824c-.021,0-.041.005-.062.006s-.041-.006-.063-.006Z" transform="translate(-94.974 -824)"></path> </g></svg>
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
                        setOpenModal={setOpenModal}
                        setScroll={setScroll}
                        discPrice={discPrice} discount={discount} />,
                    cardpopupEl
                )
            }
        </>
    )
}

export default ProductCard;