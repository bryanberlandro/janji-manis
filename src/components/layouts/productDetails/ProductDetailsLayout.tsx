import SideDetails from "./SideDetails";

const ProductDetailsLayout = () => {

    return (
        <div className="mt-10">
            <div className="flex gap-8">
                <div className="w-[50%] h-80 bg-neutral-300 rounded-xl">
                    
                </div>

                <SideDetails/>
            </div>

            <div className="border-t-2 mt-5 pt-5">
                <div className="flex font-bold text-xl gap-6">
                    <h1>Details</h1>
                    <h1 className="text-neutral-400">Reviews</h1>
                </div>
                <div className="mt-4">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque illo id, quia cum esse doloremque recusandae exercitationem blanditiis ullam, eum aut, asperiores repellendus consequuntur sit magnam dolorem eos explicabo.</h1>
                    <div className="mt-4 font-semibold">
                        <h1>Ingridients</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsLayout;