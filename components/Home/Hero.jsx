"use client"
import React from 'react';
import Working from './working';
import Assist from './assist';
import VideoPlay from './videoPlay';
import About from './About';
import Pricing from './Pricing';

const Hero = () => {
    return (
        < >
            <VideoPlay/>
            
            <Working/>
            <Assist/>
            <About/>
            <Pricing/>
        </>
    );
};

export default Hero;