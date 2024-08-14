import { useState } from "react";
import SideDetails from "./SideDetails";
import ReviewCard from "../../fragments/ReviewCard";
import Rating from "../../fragments/Rating";

const ProductDetailsLayout = () => {
    const [showDetails, setShowDetails] = useState<boolean>(true)

    return (
        <div className="mt-10">
            <div className="flex gap-8">
                <div className="w-[50%] h-80 bg-neutral-300 rounded-xl">
                    
                </div>

                <SideDetails/>
            </div>

            <div className="border-t-2 mt-5 pt-5">
                <div className="flex font-bold text-xl relative w-max pb-4">
                    <div className={`absolute transition-all duration-300 bottom-0 w-1/2 h-1 bg-teak-800 left-0 ${showDetails ? 'translate-x-0' : 'translate-x-full'}`}></div>
                    <button onClick={() => setShowDetails(true)} className={`${!showDetails && 'text-teak-300'} text-teak-800 cursor-pointer px-6 text-center`}>Details</button>
                    <button onClick={() => setShowDetails(false)} className={`${showDetails && 'text-teak-300'} text-teak-800 cursor-pointer px-6`}>Reviews</button>
                </div>
                <div className="mt-6">
                    {/* Details */}
                    <div className={`${!showDetails && 'hidden'}`}>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque illo id, quia cum esse doloremque recusandae exercitationem blanditiis ullam, eum aut, asperiores repellendus consequuntur sit magnam dolorem eos explicabo.</h1>
                        <div className="mt-4 font-semibold">
                            <h1>Ingridients</h1>
                            <ul className="list-disc font-normal pl-4 pt-2">
                                <li>Coffe Beans</li>
                                <li>Coffe Beans</li>
                                <li>Coffe Beans</li>
                                <li>Coffe Beans</li>
                            </ul>
                        </div>
                    </div>
                    {/* Rating */}
                    <div className={`${showDetails && 'hidden'} flex`}>
                        <div className="w-1/2 flex flex-col">
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                        </div>
                        <div className="flex flex-col w-1/2 px-4">
                            <div className="flex items-center gap-4">
                                <Rating/>
                                <h1>4.8</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsLayout;