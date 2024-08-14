import { useParams } from "react-router-dom";
import Rating from "../../fragments/Rating";
import { BiCart, BiCartAdd } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import Additional from "../../fragments/Additional";

const SideDetails = () => {
    const { categoryId, productId } = useParams<string>()

    return (
    <div className="w-[50%]">
                    <div className="flex justify-between">
                        <h1>{categoryId}</h1>
                        <p className="text-neutral-500 font-semibold">PRODUCT ID</p>
                    </div>
                    <h1 className="text-2xl font-semibold mt-2">{productId}</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <Rating/>
                            <p>4.5</p>
                        </div>
                        <span>|</span>
                        <h1 className="text-neutral-400 font-semibold">45 Reviews</h1>
                    </div>
                    <h1 className="text-4xl font-bold mt-4">Rp 25.000</h1>

                    <Additional/>
                    
                    <div className="flex gap-2 font-semibold mt-6">
                        <button className="flex items-center w-[80%] bg-black text-white rounded-lg py-3 justify-center gap-3">
                            <BiCart/>
                            <p>Buy Now</p>
                        </button>
                        <button className="w-[20%] text-xl bg-teak-200 rounded-lg px-4 flex justify-center items-center"><BiCartAdd/></button>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5 font-medium">
                        <TbTruckDelivery/>
                        <p>Free delivery on orders over Rp 50.000</p>
                    </div>

                </div>
    )
}

export default SideDetails;