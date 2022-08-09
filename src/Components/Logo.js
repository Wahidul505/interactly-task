import React from 'react';
import { CgSmileMouthOpen } from 'react-icons/cg';
import { useSelector } from 'react-redux';

const Logo = () => {
    const navigate = useSelector(state => state.navigate);

    return (
        <div className={`fixed lg:bottom-12 lg:left-12 lg:right-auto bg-[#7D00FE] bg-opacity-75 lg:rounded-xl text-white px-2 py-1 text-start bottom-0 right-0 left-0 flex lg:flex-col items-center justify-center gap-1 ${navigate.form && 'hidden lg:block'}`}>
            <p className='font-semibold text-sm'>Lorem:</p>
            <p className='flex gap-1 items-center text-xl font-semibold'><CgSmileMouthOpen className='text-2xl' />ipsum</p>
        </div>
    );
};

export default Logo;