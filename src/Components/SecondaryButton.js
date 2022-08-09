import React from 'react';
import '../App.css';

const SecondaryButton = ({ children, option }) => {
    return (
        <button style={{ padding: '12px 15px' }} className='w-full lg:bg-gray-200 rounded-full font-semibold text-lg lg:text-gray-900 flex gap-3 items-center border lg:border-gray-200 hover:border-purple-700 bg-black bg-opacity-50 border-black border-opacity-20 lg:border-opacity-100 lg:bg-opacity-100 text-white'>
            <span style={{ padding: '5px 10px' }} className='bg-primary rounded-full text-white text-sm'>{option}</span>
            {children}
        </button>
    );
};

export default SecondaryButton;