import Image from 'next/image';
import React from 'react';

const Text = () => {
    return (
        <div className='container flex items-center justify-center mb-[30px] md:mb-0'>
            <Image src="/serviceHead.png" alt="service" width={800} height={800}/>
        </div>
    );
};

export default Text;