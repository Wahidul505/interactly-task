import React from 'react';
import '../App.css';

const PrimaryButton = ({children}) => {
    return (
        <button className='bg-primary text-white rounded-xl font-semibold text-lg w-full py-1 px-3 btn-animation transition-transform'>{children}</button>
    );
};

export default PrimaryButton;