import Rating from "./Rating";

const ReviewCard = () => {
    return (
        <div className="flex gap-3 py-5 border-b-2">
                                <div className="rounded-full w-7 h-7 bg-neutral-400"></div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h1 className="font-semibold">Bryan Berlandro</h1>
                                        <p className="text-sm text-neutral-500">3 days ago</p>
                                    </div>
                                    <div className="text-sm mt-0.5">
                                        <Rating/>
                                    </div>
                                    <p className="mt-2">This is the best coffee in depok NGL</p>
                                </div>
                            </div>
    )
}

export default ReviewCard;