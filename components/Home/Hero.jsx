import React from 'react';
import Working from './working';
import Assist from './assist';
import VideoPlay from './videoPlay';
import OurWork from './weDo';
const Hero = () => {
    return (
        <div className='container mx-auto'>
            <VideoPlay/>
            {/* <Working/> */}
            <Assist/>
            <OurWork/>
        </div>
    );
};

export default Hero;