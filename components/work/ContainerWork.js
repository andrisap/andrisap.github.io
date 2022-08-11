import React from 'react';

const ContainerWork = ({children}) => {
    return (
        <section className="overflow-hidden">
            <div className="w-full mx-auto max-w-7xl relative px-4">
                {children}
            </div>
        </section>
    )
}

export default ContainerWork;