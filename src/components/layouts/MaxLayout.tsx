import React from "react";

type MaxLayoutProps = {
    children: React.ReactNode
}

const MaxLayout = ({children}: MaxLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default MaxLayout;