const Carousel = () => {
    return (
        <div className="flex gap-2 h-max xl:h-64 flex-col xl:flex-row">
            <div className="w-full h-32 bg-neutral-100 xl:h-full xl:w-[70%] rounded-lg">

            </div>
            <div className="flex h-20 xl:flex-col gap-2 w-full xl:w-[30%] xl:h-full">
                <div className="bg-neutral-100 xl:h-1/2 w-full rounded-lg"></div>
                <div className="bg-neutral-100 xl:h-1/2 w-full rounded-lg"></div>
            </div>
        </div>
    )
}

export default Carousel;