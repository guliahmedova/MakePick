import { products } from "@/shared/media/const/products";
import ProductCard from "../ProductCard";
import CategoriesSidebar from "./CategoriesSidebar";

const Categories = () => {
    return (
        <div className="flex gap-10 bg-slate-50 items-center">
            <CategoriesSidebar />

            <div className="py-5 h-auto min-h-screen w-full flex flex-col justify-center">
                <div className="grid grid-cols-5 gap-4 w-full">
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
            </div>
        </div>
    )
}

export default Categories;