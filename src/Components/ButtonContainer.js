import React from 'react';

const ButtonContainer = ({ children }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 px-8 absolute lg:static bottom-24 right-0 left-0'>
            {children}
        </div>
    );
};

export default ButtonContainer;