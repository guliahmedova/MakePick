import { closeWhite, editPen } from "@/shared/media/imgs";

const Checkout = () => {
    return (
        <div className="w-full xl:h-screen flex flex-col items-center justify-center mt-20">
            <div className="flex justify-between gap-6 w-full px-10">

                <div className="flex flex-col gap-6 w-full">
                    <div className="bg-white border shadow rounded p-6">
                        <div className="flex justify-between items-center">
                            <h5 className="flex items-center gap-3 font-medium md:text-xl text-sm">
                                <span className="rounded-full flex flex-col items-center justify-center font-medium text-white text-sm md:text-lg select-none md:w-10 w-5 md:h-10 h-5 bg-[#009e7f]">1</span>
                                <span>Delivery Address</span>
                            </h5>
                            <span className="font-medium text-sm text-[#009e7f]">+ Add Address</span>
                        </div>
                        <div className="flex md:gap-5 md:flex-row flex-col">
                            <div className="border border-[#009e7f] w-full mt-10 rounded-md fl shadow-sm p-2 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Primary</span>
                                <p>202-555-0191</p>
                            </div>
                            <div className="border bg-gray-100 w-full mt-10 rounded-md fl shadow-sm p-2 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Primary</span>
                                <p>202-555-0191</p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white border shadow rounded p-6">
                        <div className="flex justify-between items-center">
                            <h5 className="flex items-center gap-3 font-medium text-sm ms:text-xl">
                                <span className="rounded-full flex flex-col items-center justify-center font-medium text-white text-sm md:text-lg select-none md:w-10 w-5 md:h-10 h-5 bg-[#009e7f]">2</span>
                                <span>Delivery Schedule</span>
                            </h5>
                        </div>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5">
                            <div className="border border-[#009e7f] w-full mt-10 rounded-md fl shadow-sm p-2 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Primary</span>
                                <p>202-555-0191</p>
                            </div>
                            <div className="border bg-gray-100 w-full mt-10 rounded-md fl shadow-sm p-2 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Primary</span>
                                <p>202-555-0191</p>
                            </div>
                            <div className="border bg-gray-100 w-full mt-10 rounded-md fl shadow-sm p-2 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Primary</span>
                                <p>202-555-0191</p>
                            </div>
                            <div className="border bg-gray-100 w-full mt-10 rounded-md fl shadow-sm p-2 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Primary</span>
                                <p>202-555-0191</p>
                            </div>
                            <div className="border bg-gray-100 w-full mt-10 rounded-md fl shadow-sm p-2 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Primary</span>
                                <p>202-555-0191</p>
                            </div>
                            <div className="border bg-gray-100 w-full mt-10 rounded-md fl shadow-sm p-2 cursor-pointer relative group">
                                <div className="items-center gap-1 justify-end hidden group-hover:flex absolute right-2">
                                    <img src={editPen} alt="" className="w-5 object-contain p-1 h-5 bg-green-700 rounded-full" />
                                    <img src={closeWhite} alt="" className="w-5 object-contain p-1 h-5 bg-red-700 rounded-full" />
                                </div>
                                <span className="font-medium">Primary</span>
                                <p>202-555-0191</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sticky top-20 h-96 p-4 md:inline-block self-start hidden">
                    <span className="font-medium text-center block">Your Order</span>

                    <ul className="mt-5 overflow-y-scroll flex flex-col gap-7 h-80">
                        <li className="font-medium text-gray-400 text-center text-sm">
                            <span>2</span> X <span> Bling Thing Liquid Lipcolour | 1 pc(s)</span> <span> $40.00</span>
                        </li>
                        <li className="font-medium text-gray-400 text-center text-sm">
                            <span>2</span> X <span> Bling Thing Liquid Lipcolour | 1 pc(s)</span> <span> $40.00</span>
                        </li>
                        <li className="font-medium text-gray-400 text-center text-sm">
                            <span>2</span> X <span> Bling Thing Liquid Lipcolour | 1 pc(s)</span> <span> $40.00</span>
                        </li>
                        <li className="font-medium text-gray-400 text-center text-sm">
                            <span>2</span> X <span> Bling Thing Liquid Lipcolour | 1 pc(s)</span> <span> $40.00</span>
                        </li>
                        <li className="font-medium text-gray-400 text-center text-sm">
                            <span>2</span> X <span> Bling Thing Liquid Lipcolour | 1 pc(s)</span> <span> $40.00</span>
                        </li>
                        <li className="font-medium text-gray-400 text-center text-sm">
                            <span>2</span> X <span> Bling Thing Liquid Lipcolour | 1 pc(s)</span> <span> $40.00</span>
                        </li>
                        <li className="font-medium text-gray-400 text-center text-sm">
                            <span>2</span> X <span> Bling Thing Liquid Lipcolour | 1 pc(s)</span> <span> $40.00</span>
                        </li>

                    </ul>


                    <ul className="flex flex-col gap-7 mt-3">
                        <li className="flex justify-between font-medium opacity-60 text-sm">
                            <span>Sub Total</span>
                            <span>$376.35</span>
                        </li>
                        <li className="flex justify-between font-medium opacity-60 text-sm">
                            <span>Delivery Fee</span>
                            <span>$0.00</span>
                        </li>
                        <li className="flex justify-between font-medium opacity-60 text-sm">
                            <span>Discount</span>
                            <span>$0.00</span>
                        </li>
                        <li className="flex justify-between font-medium opacity-60 text-sm">
                            <span>Total <span className="text-px font-bold">(Incl. VAT)</span></span>
                            <span>$376.35</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Checkout