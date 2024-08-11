import { BiBell, BiCart, BiCoffeeTogo, BiUser } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full shadow-sm flex justify-center">
            <div className="max-w-7xl w-full px-[5%] items-center py-3 flex justify-between">
                <div className="flex items-center gap-2">
                    <BiCoffeeTogo/>
                    <h1 className="font-bold text-lg">JANJI MANIS</h1>
                </div>
                
                <div className="flex gap-4 items-center xl:gap-6 text-lg xl:text-xl">
                    <BiBell/>
                    <BiCart/>
                    <BiUser/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;