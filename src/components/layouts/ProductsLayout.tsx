import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import ProductCard from "../fragments/ProductCard";

const ProductsLayout = () => {
    return (
        <div>
                        <div className="flex justify-between">
                            <h1 className="text-lg font-bold">Best Sellers</h1>
                            <div className="flex items-center gap-2 text-lg">
                                <div className="rounded-full bg-teak-50 p-2 text-teak-500">
                                    <BiChevronLeft/>
                                </div>
                                <div className="rounded-full bg-teak-50 p-2 text-teak-900">
                                    <BiChevronRight/>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </div>
    )
}

export default ProductsLayout;