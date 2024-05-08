import { demos } from '@/shared/media/const/demos';
import { close } from '@/shared/media/imgs';

const MobileDemoPopup = ({ setOpenDemoPopup, openDemoPopup }) => {
    
    return (
        <div className={`${openDemoPopup ? 'block' : 'hidden'} fixed bottom-0 top-0 left-0 right-0 bg-black/40 w-full h-full z-50 flex flex-col justify-end`}>
            <div>
                <button type='button' onClick={() => setOpenDemoPopup(false)} className='w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center mx-auto mb-10'>
                    <img src={close} className='w-5' alt="" />
                </button>
                <div className='bg-white p-5 border shadow-lg h-[500px] overflow-scroll  rounded-tl-3xl rounded-tr-3xl grid grid-cols-2 gap-4'>
                    {demos.map((demo) => (
                        <div className='bg-gray-50 rounded-md border shadow-sm flex flex-col items-center font-medium text-gray-600 md:text-lg gap-2 justify-center py-6' key={demo.id}>
                            <img src={demo.img} alt="" className='w-6' />{demo.title}</div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default MobileDemoPopup;