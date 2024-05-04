import { categories } from "@/shared/media/const/categories";
import { arrow } from "@/shared/media/imgs";
import { useState } from "react";

const CategoriesSidebar = () => {
    const [categDropDown, setCategDropDown] = useState(null);

    return (
        <div className="bg-white border shadow-md sticky top-0 h-screen self-start w-72">
            <ul className="p-5 w-full">
                {categories.map((item) => (
                    <li key={item.id} className="flex flex-col cursor-pointer gap-3" onClick={() => setCategDropDown(item.title)}>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2 font-medium text-slate-800 hover:text-[#009e7f] duration-300 ease-in-out">
                                <img className="w-5 hover:text-[#009e7f] duration-300 ease-in-out" src={item.img} alt="" />{item.title}
                            </span>
                            <span><img src={arrow} className="w-4 brightness-0 hover:brightness-10 duration-300 ease-in-out" alt="" /></span>
                        </div>
                        <ul className={`ml-7 flex flex-col gap-4 ${categDropDown === item.title ? 'block' : 'hidden'}`}>
                            {item?.subCategories.map((subCat) => (
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