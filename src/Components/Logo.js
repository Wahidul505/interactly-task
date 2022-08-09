import React from 'react';
import { CgSmileMouthOpen } from 'react-icons/cg';

const Logo = () => {
    return (
        <div className='hidden md:block fixed bottom-12 left-12 bg-[#7D00FE] bg-opacity-75 rounded-xl text-white px-2 py-1 text-start'>
            <p className='font-semibold text-sm'>Lorem:</p>
            <p className='flex gap-1 items-center text-xl font-semibold'><CgSmileMouthOpen className='text-2xl'/>ipsum</p>
        </div>
    );
};

export default Logo;