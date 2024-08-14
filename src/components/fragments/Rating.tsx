import { FaStar } from "react-icons/fa6"

const Rating = () => {
    return (
        <div className="flex gap-1.5 items-center">
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
        </div>
    )
}


export default Rating;