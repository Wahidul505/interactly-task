import React from 'react';
import SecondaryButton from '../Components/SecondaryButton';
import Video from '../Components/Video';
import { useDispatch } from 'react-redux';
import { setCoaching, setSignUp } from '../features/navigateSlice';

const Home = () => {
    const dispatch = useDispatch();

    return (
        <div className='lg:grid lg:grid-cols-2'>
            <Video heading={"Welcome"}>
                <source src="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDI3NDk4M30.r8J0NyQiQLA71N-p_0WFx_f45w1QYNjdQKtmTgSK6-XHtVUJbz0hC4_hOl3EQFGMxcNVTadUeDSGhPeJs1nkVLAB6YOC69RxNqIQ3AQlih-5ogkOJ7nxcAKN3VWoGJw9e69JGLvcKskWCz9RtHsXQKswE70q1gSoQMJITvRG5RhM1lfd4E7tlYZkXU_Y0VtJJ7un8J3F1IbYCnHa1wrIFw-QAch9zOqt6GoScuvM6xF9pUdq7ZXey0hdESEnyLDeKKoIyZWccSYjpBcbqyu6YWOl-IT67CKwbEbU4lDjCh9euMkVSbSIrWbcvE1mx_BdKntIdqCW8yqM9s42U8DcE2yT7hcO4iNsWAN1yftigGB90s9wqHJ0re2NgkekDlSX-ubicCBpJacIQNHHAYRdfaWYs9txR_aH3UsgmiI3Jj6_8XD7LrDJvBYNdKa7aZygz7x4uCihisevBNGZgz2SgbvX0lXe5Tx2Fe6L8lQ-jmM6unrLFSWl4HoT9NQMfh3khK02GQNVrUy6KhL7-0WR0TTwzuuAnZWJp2XY0Z2AbGRXRg4c2Wr2xHQnbWg2HrgSDworE1xoePftCAQWNpXhMXNTJS4SVqPsvdO6uZcBsNHEG3ECpvvAAhOph3Jp9V9EJVx6kEkHkAXCB2SAF_165cdXiKySoOi0YPg2MwQ6gZ4" />
            </Video>
            <div className='flex flex-col items-center justify-center gap-4 absolute lg:static bottom-20 right-0 left-0'>
                <span
                    className='w-full lg:w-1/2 px-6 lg:px-0'
                    onClick={() => dispatch(setCoaching())}
                ><SecondaryButton option="A" >Campaign structure</SecondaryButton></span>
                <span
                    className='w-full lg:w-1/2 px-6 lg:px-0'
                    onClick={() => dispatch(setSignUp())}
                ><SecondaryButton option="B" >Learn Facebook basics</SecondaryButton></span>
            </div>
        </div >
    );
};

export default Home;