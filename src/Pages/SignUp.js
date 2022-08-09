import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Components/Form';
import PrimaryButton from '../Components/PrimaryButton';
import Video from '../Components/Video';
import { setForm } from '../features/navigateSlice';
import clip3 from '../resources/clip3.mp4';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useSelector(state => state.navigate);
    return (
        <div className='grid grid-cols-2'>
            <Video>
                <source src={clip3} />
            </Video>
            <div className='flex flex-col items-center justify-center gap-4'>
                {
                    !navigate.form ?
                        <span onClick={() => dispatch(setForm({ coaching: false, signUp: true }))}>
                            <PrimaryButton>Sign up for free webinar</PrimaryButton>
                        </span> :
                        <Form />
                }

            </div>
        </div>
    );
};

export default SignUp;