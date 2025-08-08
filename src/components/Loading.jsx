import React from 'react';
import { Atom } from 'react-loading-indicators';

const Loading = () => {
    return (

        <div>
            <div className='min-h-screen flex justify-center items-center'>
                <Atom color="#32cd32" size="medium" text="" textColor="" />
            </div>
        </div>

    );
};

export default Loading;