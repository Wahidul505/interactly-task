import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { RiFullscreenExitFill } from 'react-icons/ri';
import { RiFullscreenFill } from 'react-icons/ri';

const Video = ({ children, heading }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayBtn, setShowPlayBtn] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [fullScreen, setFullScreen] = useState(false);

    const videoRef = useRef();

    useEffect(() => {
        isPlaying ? setShowPlayBtn(false) : setShowPlayBtn(true);
    }, [isPlaying]);

    const handleToggle = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            videoRef.current.pause()
        }
        else {
            videoRef.current.play()
        }

    };

    const handlePlaybackSpeed = () => {
        const speedArray = [1.0, 1.5, 2.0];
        speed === speedArray[speedArray.length - 1] ? setSpeed(speedArray[0])
            : setSpeed((speedArray[speedArray.indexOf(speed) + 1]));
    };

    useEffect(() => {
        videoRef.current.playbackRate = speed;
    }, [speed]);

    window.setInterval(function () {
        setCurrentTime(videoRef.current?.currentTime);
        setDuration(videoRef.current?.duration);
    }, 1200);

    useEffect(() => {
        setProgress(currentTime / duration * 100);
        if (currentTime / duration * 100 === 100) {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }, [currentTime]);


    return (
        <div className={`relative h-screen ${fullScreen && 'w-screen'}`}>
            <video
                id="clip"
                onClick={handleToggle}
                ref={videoRef} className='w-screen h-screen object-cover cursor-pointer'>
                {children}
            </video>
            <div className='absolute top-0 right-0 left-0 '>
                <div className='bg-[#706f70] h-2 w-full shadow-lg shadow-black '>
                    <div style={{ width: `${progress}%` }} className='bg-primary h-full'></div>
                </div>
                <div className='flex gap-3 justify-end lg:px-10 px-4 lg:mt-10 mt-6 text-white font-semibold text-base items-center'>
                    <span className='text-lg'>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)} / {Math.floor(duration / 60)}:{Math.floor(duration % 60)}</span>
                    <button
                        className='border-2 border-white rounded w-8 text-sm hover:scale-105 transition-transform '>
                        CC
                    </button>
                    <button
                        onClick={handlePlaybackSpeed}
                        className='border-2 border-white rounded w-8 text-sm hover:scale-105 transition-transform '>
                        {speed}x
                    </button>
                    <button
                        onClick={() => setFullScreen(!fullScreen)}
                        className='border-2 border-white rounded w-8 text-sm hover:scale-105 transition-transform flex justify-center'>
                        {
                            fullScreen ?
                                <RiFullscreenExitFill className='text-xl' />
                                :
                                <RiFullscreenFill className='text-xl' />
                        }
                    </button>
                </div>
                <div>
                    {currentTime < 2 ? <h1 className='text-white font-semibold ml-6 lg:ml-12 lg:mt-5 text-xl lg:text-3xl mt-2'>{heading}</h1> : <></>}
                </div>
            </div>
            <button
                onClick={handleToggle}
                id='play-btn' className={`bg-white bg-opacity-70 rounded-full text-2xl p-7 flex justify-center items-center mx-auto -translate-y-96 ${showPlayBtn ? 'block' : 'hidden'}`}><FaPlay /></button>
        </div>
    );
};

export default Video;