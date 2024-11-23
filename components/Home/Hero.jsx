import React from 'react';
import Working from './working';
import Assist from './assist';
import VideoPlay from './videoPlay';
const Hero = () => {
    return (
        <div>
            <VideoPlay/>
            <Working/>
            <Assist/>
        </div>
    );
};

export default Hero;