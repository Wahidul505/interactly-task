import React from 'react';
import '../App.css';

const PrimaryButton = ({children}) => {
    return (
        <button className='bg-primary text-white rounded-xl font-semibold text-lg lg:w-80 px-4 py-1 btn-animation transition-transform h-16 w-full'>{children}</button>
    );
};

export default PrimaryButton;