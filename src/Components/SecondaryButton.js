import React from 'react';
import '../App.css';

const SecondaryButton = ({ children, option }) => {
    return (
        <button style={{ padding: '12px 15px' }} className='w-full bg-gray-200 rounded-full font-semibold text-lg text-gray-900 flex gap-3 items-center border border-gray-200 hover:border-purple-700'>
            <span style={{ padding: '5px 10px' }} className='bg-primary rounded-full text-white text-sm'>{option}</span>
            {children}
        </button>
    );
};

export default SecondaryButton;