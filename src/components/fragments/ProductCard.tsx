import { BiCartAdd } from "react-icons/bi";

const ProductCard = () => {
    return (
        <div className="bg-gradient-to-t from-teak-200 via-teak-50 to-teak-50 rounded-lg">
                                <div className="flex items-center px-6 py-4 w-full justify-between">
                                    <div>
                                        <h1 className="text-lg">Hazelnut Latte</h1>
                                        <h2 className="font-bold">Rp 24.000</h2>
                                    </div>
                                    <div className="p-2 bg-teak-600 text-white rounded-full text-xl cursor-pointer">
                                        <BiCartAdd/>
                                    </div>
                                </div>
                                <div className="rounded-lg w-64 h-56 relative">
                                    <img src="/img/image.png" className="w-[80%] h-full mx-auto"/>
                                </div>
                            </div>
    )
}

export default ProductCard;