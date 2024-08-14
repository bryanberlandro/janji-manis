const Additional = () => {
    return (
        <>
        <div className="mt-4">
                        <div className="flex font-semibold gap-2">
                            <h1 className="font-medium">Temprature</h1>
                            <span>:</span>
                            <p className="text-neutral-500">Cold</p>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <div className="px-3 py-1 border-2 rounded-md cursor-pointer">Cold</div>
                            <div className="px-3 py-1 border-2 rounded-md">Hot</div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex font-semibold gap-2">
                            <h1 className="font-medium">Size</h1>
                            <span>:</span>
                            <p className="text-neutral-500">Regular</p>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <div className="px-3 py-1 border-2 rounded-md cursor-pointer">Regular</div>
                            <div className="px-3 py-1 border-2 rounded-md">Large</div>
                            <div className="px-3 py-1 border-2 rounded-md">Extra Large</div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex font-semibold gap-2">
                            <h1 className="font-medium">Sugar</h1>
                            <span>:</span>
                            <p className="text-neutral-500">Less Sugar</p>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <div className="px-3 py-1 border-2 rounded-md cursor-pointer">Less Sugar</div>
                            <div className="px-3 py-1 border-2 rounded-md">Sugar</div>
                        </div>
                    </div>
        </>
    )
}

export default Additional;