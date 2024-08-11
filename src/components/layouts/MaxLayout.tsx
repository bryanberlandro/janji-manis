import React from "react";

type MaxLayoutProps = {
    children: React.ReactNode
}

const MaxLayout = ({children}: MaxLayoutProps) => {
    return (
        <div className="max-w-7xl mx-auto px-[5%] pt-20 pb-4">
            {children}
        </div>
    )
}

export default MaxLayout;