import React from 'react';
import Video from '../Components/Video';
import clip2 from '../resources/clip2.mp4';
import PrimaryButton from '../Components/PrimaryButton';
import Form from '../Components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../features/navigateSlice';

const Coaching = () => {
    const dispatch = useDispatch();
    const navigate = useSelector(state => state.navigate);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <Video>
                <source src={clip2} />
            </Video>
            <div className='flex flex-col items-center justify-center gap-4'>
                {
                    !navigate.form ?
                        <span onClick={() => dispatch(setForm({ coaching: true, signUp: false }))}>
                            <PrimaryButton>Download "Campaign Structure Guide"</PrimaryButton>
                        </span> :
                        <Form />
                }

            </div>
        </div>
    );
};

export default Coaching;