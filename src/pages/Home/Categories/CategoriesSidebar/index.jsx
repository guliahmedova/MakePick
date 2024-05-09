import { categories } from "@/shared/media/const/categories";
import { arrow } from "@/shared/media/imgs";
import { useState } from "react";

const CategoriesSidebar = () => {
    const [openDropdown, setOpenDropdown] = useState("");

    const toggleDropdown = (dropdownKey) => {
        setOpenDropdown(openDropdown === dropdownKey ? "" : dropdownKey);
    };

    return (
        <div className="bg-white border h-[88vh] shadow-sm sticky top-20 lg:inline-block self-start w-80 hidden">
            <ul className="p-5 w-full h-full overflow-y-scroll">
                {categories?.map((item) => (
                    <li key={item.id} className="flex flex-col cursor-pointer mb-10">
                        <div className="flex items-center justify-between">
                            <span
                                className="flex items-center gap-2 font-medium text-black/50 hover:text-[#009e7f] duration-300 ease-in-out"
                                onClick={() => toggleDropdown(item.title)}
                            >
                                <img className="w-5 hover:text-[#009e7f] duration-300 ease-in-out" src={item.img} alt="" />
                                {item.title}
                            </span>
                            {item.subCategories?.length > 0 && (
                                <span
                                    onClick={(e) => {
                                        toggleDropdown(item.title);
                                        e.stopPropagation();
                                    }}
                                >
                                    <img
                                        src={arrow}
                                        className={`w-4 brightness-0 hover:brightness-10 duration-300 ease-in-out ${openDropdown === item.title ? "rotate-90" : ""
                                            }`}
                                        alt=""
                                    />
                                </span>
                            )}
                        </div>
                        <ul
                            className={`ml-7 flex flex-col gap-2 bg-white duration-100 ease-in-out ${openDropdown === item.title && item.subCategories?.length > 0
                                ? "opacity-100 mt-3"
                                : "opacity-0 h-0 pointer-events-none"
                                }`}
                        >
                            {item?.subCategories?.map((subCat) => (
                                <li key={subCat.id} className="text-sm text-slate-600">
                                    {subCat.title}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesSidebar;
