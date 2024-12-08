"use client"
import React from 'react';
import Working from './working';
import Assist from './assist';
import VideoPlay from './videoPlay';
import OurWork from './weDo';
import About from './About';
const Hero = () => {
    return (
        < >
            <VideoPlay/>
            {/* <Working/> */}
            <Assist/>
            {/* <OurWork/> */}
            <About/>
        </>
    );
};

export default Hero;