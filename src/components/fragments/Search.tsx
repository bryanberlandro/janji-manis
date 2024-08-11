import { FaMagnifyingGlass } from "react-icons/fa6"

const Search = () => {
    return (
        <div className="flex items-center bg-neutral-100 px-5 py-2 rounded-lg">
                <input type="text" className="border-0 outline-0 bg-transparent" placeholder="Search..."/>
                <FaMagnifyingGlass/>
        </div>
    )
}

export default Search;