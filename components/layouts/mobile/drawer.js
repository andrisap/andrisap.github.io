import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';

export default function Drawer({
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle,
    ...props
}) {
    return (
        <Fragment>
            <RcDrawer
                open={open}
                onClose={toggleHandler}
                className={`drawer ${className || ''}`.trim()}
                width={width}
                placement={placement}
                handler={false}
                level={null}
                duration={'0.4s'}
                {...props}
            >
                {closeButton && (
                    <div className={closeBtnStyle} onClick={toggleHandler}>
                        {closeButton}
                    </div>
                )}
                <div className={drawerStyle}>
                    {children}
                </div>
            </RcDrawer>
            <div className="block lg:hidden cursor-pointer" onClick={toggleHandler}>
                {drawerHandler}
            </div>
        </Fragment>
    )
};

Drawer.defaultProps = {
    width: '320px',
    placement: 'left',
};