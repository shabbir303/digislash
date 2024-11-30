"use client"
import React from 'react';
import Working from './working';
import Assist from './assist';
import VideoPlay from './videoPlay';
import OurWork from './weDo';
const Hero = () => {
    return (
        < >
            <VideoPlay/>
            {/* <Working/> */}
            <Assist/>
            <OurWork/>
        </>
    );
};

export default Hero;