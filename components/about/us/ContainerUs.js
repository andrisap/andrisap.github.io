import React from 'react';


const ContainerUs = ({children}) => {
    return (
        <section className="pt-52 pb-60 overflow-hidden">
            <div className="w-full mx-auto max-w-7xl relative z-2 px-4">
                {children}
            </div>
        </section>
    )
}

export default ContainerUs;