import React from 'react';
import Video from '../Components/Video';
import PrimaryButton from '../Components/PrimaryButton';
import Form from '../Components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../features/navigateSlice';
import ButtonContainer from '../Components/ButtonContainer';

const Coaching = () => {
    const dispatch = useDispatch();
    const navigate = useSelector(state => state.navigate);

    return (
        <div className='lg:grid lg:grid-cols-2'>
            <div className={navigate.form ? 'hidden lg:block' : ''}>
                <Video heading={"Funnel 2: freebie or coaching"}>
                    <source src="https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6IjQzNWFlNjcxLTMzZjAtNDVhNC1iOTU4LTYyNDAyYzJiNjEzMyIsImV4cCI6MTY2MDI4OTg0OH0.yVSV7G8yHNBQ4_zt-Dl5rrOlyVQ67E1kFVupRy9y7OI1U-rdpK7Gr-8UYqymLBUgUWW-2O5Gf1URxkELismj_3g4npfKq8Lp9p1OuLguu-AmxSM8nQRFwNSRiXXq4A6NNogoe5dlanO0Ob6Yz7SGKg0ttKiJTpI2vn-UJ7Ru882TPQi51ELD167GmNyej7n4ASSZWAX4YrWu9xLm3D8gg4FIjQwGPOqbBCe_Eipy996JHfGhPVBTS1-dxy7qxFeHnYMK_k1A8Zd5joa7-uAA_xSjTEasNQwvRxcKswNCHOHH_iR5tEwYLhgJXw71Lx2UQgiNmBDkWD7Zf2RCthy0FCj5M8vboiTdYEdAxPZQMq5uvHFudDjfGhCE5qZ31WlR8SSu625y7f97lT0PzWUDMXuRKStSPSqr8hEZ1PrTXdc457CxbSJhcYWVBhrtGtnonNJ8DhHZjsNAyII2W2nvIObhIVi5uhGrNBm4Iunu66P83qtoTRSzcWWazMSJzlZzW7KODUikLK5-6RvQKUea-9p4yektvfZFWX2iCuQe0PCGFx3FnjvrF8gToTnvzY5n_u5nBOnKwiiq7ARq5DLp2dWk9tkjmF-b961bKJuotyMLbI_roHBXeQIKjJADv8H6U46vXqJr4UnlVfKYrq7aLfd8Ww3_UO7tsySvIRWalnQ" />
                </Video>
            </div>
            {
                !navigate.form ?
                    <ButtonContainer>
                        <span
                            className='w-full'
                            onClick={() => dispatch(setForm({ coaching: true, signUp: false }))}>
                            <PrimaryButton>Download "Campaign Structure Guide"</PrimaryButton>
                        </span>
                    </ButtonContainer> :
                    <Form />
            }
        </div>
    );
};

export default Coaching;