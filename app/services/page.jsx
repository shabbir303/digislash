import Color from '@/components/services/Color';
import Free from '@/components/services/Free';
import Growth from '@/components/services/Growth';
import Que from '@/components/services/Que';
import Scard from '@/components/services/Scard';
import Success from '@/components/services/Success';
import Text from '@/components/services/text';

import React from 'react';

const service = () => {
    return (
        <div className='mt-[200px]'>
            <Text/>
            <Scard/>
            <Growth/>
            <Color/>
            <Success/>
            <Que/>
            <Free/>
        </div>
    );
};

export default service;