import React from 'react';
import clip1 from '../resources/clip1.mp4';
import SecondaryButton from '../Components/SecondaryButton';
import Video from '../Components/Video';
import { useDispatch } from 'react-redux';
import { setCoaching, setSignUp } from '../features/navigateSlice';

const Home = () => {
    const dispatch = useDispatch();

    return (
        <div className='grid grid-cols-2'>
            <Video>
                <source src={clip1} />
            </Video>
            <div className='flex flex-col items-center justify-center gap-4'>
                <span
                    className='w-1/2'
                    onClick={() => dispatch(setCoaching())}
                ><SecondaryButton option="A" >Campaign structure</SecondaryButton></span>
                <span
                    className='w-1/2'
                    onClick={() => dispatch(setSignUp())}
                ><SecondaryButton option="B" >Learn Facebook basics</SecondaryButton></span>
            </div>
        </div >
    );
};

export default Home;