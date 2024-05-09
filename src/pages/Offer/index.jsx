import { offers } from "@/shared/media/const/offers";
import { useState } from "react";

const Offer = () => {
    const [copySuccess, setCopySuccess] = useState(offers?.map(() => 'Copy'));

    const copyToClipBoard = async (copyText, index) => {
        try {
            await navigator.clipboard.writeText(copyText);
            setCopySuccess(prevState => {
                const newState = [...prevState];
                newState[index] = 'Copied!';
                return newState;
            });
            setTimeout(() => {
                setCopySuccess(prevState => {
                    const newState = [...prevState];
                    newState[index] = 'Copy';
                    return newState;
                });
            }, 2000);
        } catch (err) {
            setCopySuccess(prevState => {
                const newState = [...prevState];
                newState[index] = 'Failed to copy!';
                return newState;
            });
        }
    };

    return (
        <div className="py-32 w-full h-full bg-gray-100 px-10">
            <div className="grid xl:grid-cols-4 grid-rows-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {offers.map((offer, index) => (
                    <div key={offer.id} className="w-full h-full rounded-lg">
                        <img src={offer.img} alt="" className="w-full" />
                        <p className="bg-white w-11/12 mx-auto py-2 px-4 border shadow rounded-b-md font-medium text-gray-600 flex justify-between">
                            <span>{offer.cupon}</span>
                            <span className="text-[#009e7f] font-bold cursor-pointer"
                                onClick={() => copyToClipBoard(offer.cupon, index)}>
                                {copySuccess[index]}
                            </span>
                        </p>
                    </div>
                ))}
            </div>

            <p className="text-center mt-10 font-medium text-gray-400 text-sm">MakePick is a product by <a className="text-[#009e7f]" href="https://www.linkedin.com/in/guli-ahmedova-5b8985256/">Guli Ahmedova</a></p>
        </div>
    )
}

export default Offer;
