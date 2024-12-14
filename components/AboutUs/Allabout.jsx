import React from 'react';
import About from '../Home/About';
import Happy from './Happy';
import Stats from './States';
import Business from './Business';
import Slider from './Slider';

const Allabout = () => {
    return (
        <div>
            <About/>
            <Happy/>
            <div className='block md:hidden'>
            <Slider/>
            </div>
            <Stats/>
            <Business/>
        </div>
    );
};

export default Allabout;