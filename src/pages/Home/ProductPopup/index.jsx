import { close, shopping } from "@/shared/media/imgs";

const ProductPopup = ({ title, discPrice, price, imgs, discount, desc, tags }) => {
    
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/10 z-50">
            <button className="bg-white rounded-full w-10 h-10 flex flex-col justify-center items-center ml-auto mr-5 mt-5" type="button">
                <img className="w-6" src={close} alt="" />
            </button>
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="bg-white w-9/12 min-h-96 py-10 rounded-lg shadow-sm flex justify-between px-12">
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
                            <button type="button" className="flex items-center hover:bg-[#009e7f] text-[#009e7f] hover:text-white duration-300 ease-in-out gap-3 border-2 shadow-sm rounded-3xl font-medium px-3 py-2 hover:fill-slate-50">
                                <img src={shopping} alt="" className="w-5 h-5" />
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