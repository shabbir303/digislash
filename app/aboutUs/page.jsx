import Business from '@/components/AboutUs/Business';
import Happy from '@/components/AboutUs/Happy';
import Stats from '@/components/AboutUs/States';
import About from '@/components/Home/About';
import React from 'react';

const about = () => {
    return (
        <div className='mt-[100px]'>
            <About/>
            <Happy/>
            <Stats/>
            <Business/>
        </div>
    );
};

export default about;