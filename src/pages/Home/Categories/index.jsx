import { products } from "@/shared/media/const/products";
import ProductCard from "../ProductCard";
import CategoriesSidebar from "./CategoriesSidebar";

const Categories = () => {
    return (
        <div className="flex gap-10 bg-slate-50 items-center">
            <CategoriesSidebar />

            <div className="py-5 h-auto min-h-screen w-full flex flex-col justify-center">
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-4 w-full lg:px-0">
                    {products.map((product) => (
                        <ProductCard key={product.id}
                            id={product.id}
                            title={product.title}
                            discPrice={product.discPrice}
                            price={product.price}
                            imgs={product.imgs}
                            desc={product.desc}
                            tags={product.tags}
                            discount={product.discount}
                        />
                    ))}
                </div>
                <button type="button"
                    className="mt-10 bg-white shadow-sm inline-block w-fit mx-auto py-2 px-6 text-[#009e7f] font-bold">Load More</button>
            </div>
        </div>
    )
}

export default Categories;