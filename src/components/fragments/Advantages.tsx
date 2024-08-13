import React from "react";

type AdvantagesType = {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const Advantages = ({icon, title, desc}: AdvantagesType) => {
    return (
        <div className="w-1/3 h-52 rounded-xl bg-teak-100 text-center transition-transform duration-300 transform group-hover:scale-95 hover:scale-100">
            <div className="px-5 py-2 flex flex-col items-center gap-2 justify-center h-full">
                <div className="text-teak-700 text-4xl">
                    {icon}
                </div>
                <div className="text-teak-900">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p className="font-medium">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Advantages;