import { close } from "@/shared/media/imgs";

const ProductPopup = ({ title, discPrice, price, imgs, discount, desc, tags, openModal, id, setOpenModal, setScroll }) => {
    return (
        <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-50 w-full duration-500 ease-in-out h-screen overflow-hidden ${openModal === id ? 'block' : 'hidden'}`}>
            <button className="bg-white rounded-full w-10 h-10 flex flex-col justify-center items-center ml-auto mr-5 mt-5" type="button"
                onClick={() => {
                    setOpenModal(null);
                    setScroll(false);
                }}>
                <img className="w-6" src={close} alt="" />
            </button>
            <div className="flex flex-col items-center justify-center w-9/12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="bg-white h-full w-full py-10 rounded-lg shadow-sm flex justify-between px-12">
                    <div className="w-6/12 mx-auto relative">
                        <span className={`bg-[#ffad5e] p-1 px-3 text-sm text-white font-medium text-center rounded-xl absolute right-14 ${discount ? "inline" : "hidden"}`}>
                            {discount}%
                        </span>
                        <img src={imgs[0]} className="w-6/12 mx-auto" alt="" />
                        <ul className="flex items-center gap-2 justify-center">
                            {imgs.map((img, index) => (
                                <li key={index} className={`rounded-lg ${index === 0 ? 'border-[#009e7f] border-2' : 'border'}`}><img src={img} alt="" className="w-24 rounded-lg" /></li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-6/12">
                        <h3 className="font-semibold text-2xl mt-3">{title}</h3>
                        <span className="text-sm text-slate-500">1 pc(s)</span>
                        <p className="mt-5 text-slate-500 leading-8">{desc}</p>
                        <ul className="flex items-center gap-3 mt-5">
                            {tags.map((tag, index) => (
                                <li key={index} className="bg-slate-100 shadow-sm p-2 px-4 font-medium cursor-pointer rounded-lg">{tag}</li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center mt-10">
                            <div className="flex items-center gap-3">
                                <span className="text-[#009e7f] font-medium">${discPrice}</span>
                                <span className="text-[#ffad5e] text-sm italic line-through font-medium">${price}</span>
                            </div>
                            <button type="button" className="flex group: items-center hover:bg-[#009e7f] text-[#009e7f] hover:text-white duration-300 ease-in-out gap-3 border-2 shadow-sm rounded-3xl font-medium px-3 py-2 hover:fill-slate-50">
                                <svg width="19px" className="group-hover:fill-white fill-[#009e7f] duration-200" height="19px" viewBox="-0.5 0 13 13" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_2" data-name="Path 2" d="M106.974,837h-12l2-11.031h1.989a1.98,1.98,0,0,1,3.96,0h2.051Zm-6-12.011c-1.042-.01-1.04.338-1.04.98h2.049C101.983,825.367,102.013,825,100.974,824.989ZM102.925,827v.994h-.943V827H99.933v.994h-.974V827H97.848l-1.75,9h9.719l-1.75-9ZM101,824c-.021,0-.041.005-.062.006s-.041-.006-.063-.006Z" transform="translate(-94.974 -824)"></path> </g></svg>
                                <span>Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPopup