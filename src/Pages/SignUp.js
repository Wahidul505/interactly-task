import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonContainer from '../Components/ButtonContainer';
import Form from '../Components/Form';
import PrimaryButton from '../Components/PrimaryButton';
import Video from '../Components/Video';
import { setForm } from '../features/navigateSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useSelector(state => state.navigate);
    return (
        <div className='lg:grid lg:grid-cols-2'>
            <div className={navigate.form ? 'hidden lg:block' : ''}>
                <Video heading={"Funnel 2: freebie or coaching"}>
                    <source src="https://media.videoask.com/transcoded/e8762b7e-7699-495d-a72c-24ea32902eea/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImU4NzYyYjdlLTc2OTktNDk1ZC1hNzJjLTI0ZWEzMjkwMmVlYSIsImV4cCI6MTY2MDI4OTg0OH0.YLhQxpUOFmgUfFkg07LIdKLgGRkxeBATOAXfEWh7_Mh2CYfkZ39Cg5EExfX4bokAEx_IxGfDBGJDuOGuTCs6TL2YbiiNBSpv9ipsQN2WqRwsaKj8jVZagfS-VD7RfFy9Xj0vbzbwgmJ1tgHtipldy0rERDX4qzEAH0NN50wnoc1-NNY6IoJx43IReKBCYhxX_WWaeXD4ueWH-wXFq27d9mfS1VgEbZsjJRvtg46WZ8yASWLP4aU8gQrI0lAeDGuIfe8BuvJgNgUGmkZQMliWgazOVq40MBFjxK-NCqR9iwomkRiE1xwBJHtrA2YE9d_hS0StWi3xQjQ00J_4CqAlA34_N3_3Qiu42CI3BYQcwdbBIc7mAKVKN3BbGeLTH3VGgv_lX0_KqnVk7w1BUN039ZL4hW6BKazIkzx012LojkcWxfdZP0T9wB43TfHXcLxOtRF0Ovl-Tuxy2vUOPjxUQxic0iCobi2hIYoJJqZer1qLqysBnIxUENp7Ns1kj-3BP1CwzoNQL1Rwyqph_PuuWWwxt021iW8F_g7Bxnb5twVNW7tRY9YF8jkr_BlhFGg9kXJzqsmhTxZhWzExxZX4V-NhIbXeSVMayY2YVDetoDCEcRFK0wT8yxb02tCXyRHZ9U0vwqaVnhFjdJB71TkSnwBn4En050s1uJBhWeTcdeE" />
                </Video>
            </div>
            {
                !navigate.form ?
                    <ButtonContainer>
                        <span onClick={() => dispatch(setForm({ coaching: false, signUp: true }))}>
                            <PrimaryButton>Sign up for free webinar</PrimaryButton>
                        </span>
                    </ButtonContainer>
                    :
                    <Form />
            }
        </div>
    );
};

export default SignUp;