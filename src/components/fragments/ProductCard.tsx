import { BiCartAdd } from "react-icons/bi";

const ProductCard = ({name, price}: {name: string, price: string}) => {
    return (
        <div className="bg-white rounded-xl w-48 xl:w-60 h-max">
            <div className="flex items-center px-6 py-4 w-full justify-between">
                <div>
                    <h1 className="text-base xl:text-lg">{name}</h1>
                    <h2 className="font-bold text-teak-800">{price}</h2>
                </div>
                <div className="p-2 bg-teak-600 text-white rounded-full xl:text-xl cursor-pointer">
                    <BiCartAdd/>
                </div>
            </div>
            <div className="rounded-lg w-full h-40 xl:h-56 relative">
                <img src="/img/image.png" className="w-[80%] h-full mx-auto"/>
            </div>
        </div>
    )
}

export default ProductCard;