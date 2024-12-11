import React from 'react';
import About from '../Home/About';
import Happy from './Happy';
import Stats from './States';
import Business from './Business';

const Allabout = () => {
    return (
        <div>
            <About/>
            <Happy/>
            <Stats/>
            <Business/>
        </div>
    );
};

export default Allabout;