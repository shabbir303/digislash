import Schedule from '@/components/Team/schedule';
import Team from '@/components/Team/Team';
import Top from '@/components/Team/Top';
import React from 'react';

const team = () => {
    return (
        <div className='mt-[100px]'>
            <Top/>
            <Team/>
            <Schedule/>
        </div>
    );
};

export default team;