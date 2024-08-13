import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

type CategoryCardProps = {
    title: string;
    bgcol?: string;
}

const CategoryCard = ({title, bgcol='bg-teak-200'}: CategoryCardProps) => {
    return (
        <div className={`rounded-xl w-1/3 mx-auto ${bgcol} h-32 py-4 px-6 flex justify-between`}>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h1 className="font-bold text-2xl">{title}</h1>
                </div>
                <Link to={'/'} className="bg-white p-2 shadow-sm rounded-full w-max rotate-[230deg]">
                    <FaArrowDown/>
                </Link>
                </div>
            <img src="/img/image.png" alt="" className="w-28 h-full"/>
        </div>
    )
}

export default CategoryCard;