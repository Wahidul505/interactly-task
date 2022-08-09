import React from 'react';
import { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import '../App.css';
import { setWelcome } from '../features/navigateSlice';
import toast from 'react-hot-toast';

const Form = () => {
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checked) {
            dispatch(setWelcome());
            toast.success('Submitted');
            setErrorMessage('');
        }
        else {
            setErrorMessage('To continue you must accept the terms & conditions.');
        }
    }

    return (
        <div className="lg:px-20 lg:pt-24 px-7 py-10">
            <h3 className='text-xl font-semibold'>Before you go, please leave your contact details so we can get back to you...</h3>
            <form className='mt-4 lg:mt-7' onSubmit={handleSubmit}>
                <input type="text"
                    name='name'
                    placeholder='*Your name'
                    required
                    className='w-full text-xl py-2 focus:outline-none border-b border-gray-400 mb-6' />

                <input type="email"
                    name='email'
                    placeholder='*Your email'
                    required
                    className='w-full text-xl py-2 focus:outline-none border-b border-gray-400' />

                {errorMessage && <p className='w-fit bg-red-500 rounded-2xl text-white py-2 px-3 text-xs font-semibold mt-7'>{errorMessage}</p>}

                <div className='mt-7'>
                    <input
                        onClick={() => setChecked(!checked)}
                        style={{ height: '20px', width: '20px' }}
                        type="checkbox" name="" id="" />
                    <label htmlFor="" className='text-sm text-gray-500 inline-block ml-10 -mt-7 overflow-y-auto h-40 lg:h-auto'>* [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</label>
                </div>
                <button
                    type="submit"
                    className='flex items-center gap-2 bg-primary text-white rounded-xl w-full justify-center py-4 text-lg font-semibold lg:mt-12 mt-8'>
                    Send your answer <HiOutlineArrowNarrowRight />
                </button>
            </form>
        </div>
    );
};

export default Form;