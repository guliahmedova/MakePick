import { categories } from "@/shared/media/const/categories";
import { arrow } from "@/shared/media/imgs";
import { useState } from "react";

const CategoriesSidebar = () => {
    const [categDropDown, setCategDropDown] = useState(null);

    return (
        <div className="bg-white border h-[89vh] shadow-sm sticky top-20 lg:inline-block self-start w-80 hidden">
            <ul className="p-5 w-full h-full overflow-y-scroll">
                {categories?.map((item) => (
                    <li key={item.id} className="flex flex-col cursor-pointer mb-10" onClick={() => setCategDropDown(item.title)}>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2 font-medium text-black/50 hover:text-[#009e7f] duration-300 ease-in-out">
                                <img className="w-5 hover:text-[#009e7f] duration-300 ease-in-out" src={item.img} alt="" />{item.title}
                            </span>
                            <span className={`${item.subCategories?.length > 0 ? 'inline' : 'hidden'}`}><img src={arrow} className="w-4 brightness-0 hover:brightness-10 duration-300 ease-in-out" alt="" /></span>
                        </div>
                        <ul className={`ml-7 flex flex-col gap-2 ${categDropDown === item.title && item.subCategories?.length > 0 ? 'block mt-2' : 'hidden'}`}>
                            {item?.subCategories?.map((subCat) => (
                                <li key={subCat.id} className="text-sm text-slate-600">{subCat.title}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default CategoriesSidebar;