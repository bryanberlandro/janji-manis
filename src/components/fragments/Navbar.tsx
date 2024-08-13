import { BiBell, BiCart, BiCoffeeTogo, BiUser } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full shadow-sm flex bg-white justify-center z-50">
            <div className="max-w-7xl w-full px-[5%] items-center py-3 flex justify-between">
                <div className="flex items-center gap-2 text-teak-700">
                    <BiCoffeeTogo/>
                    <h1 className="font-bold text-lg">JANJI MANIS</h1>
                </div>
                
                <div className="flex gap-4 items-center xl:gap-6 text-lg xl:text-xl text-teak-800">
                    <div className="relative rounded-full p-1 hover:bg-teak-100">
                        <BiBell className="cursor-pointer"/>
                        <div className="absolute w-3 h-3 rounded-full bg-teak-400 -top-0 -right-0"></div>
                    </div>
                    <div className="relative rounded-full p-1 hover:bg-teak-100">
                        <BiCart className="cursor-pointer"/>
                        <div className="absolute w-3 h-3 rounded-full bg-teak-400 -top-0 -right-0"></div>
                    </div>
                    <div className="relative rounded-full p-1 hover:bg-teak-100">
                        <BiUser className="cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;