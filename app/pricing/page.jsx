import Pricing from '@/components/Home/Pricing';
import Marquees from '@/components/Pricing/Marquee';
import PricingCard from '@/components/Pricing/PricingCard';
import React from 'react';

const pricing = () => {
    return (
        <div className='mt-[100px]'>
            <Pricing/>
            <PricingCard/>
            <Marquees/>
        </div>
    );
};

export default pricing;