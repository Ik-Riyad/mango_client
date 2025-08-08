import React from 'react';

import bannerImg from '../../assets/24.jpg'

const Banner02 = () => {
    return (
        <div>
            <div className='relative h-[350px] bg-no-repeat bg-center bg-cover bg-green-400' style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="absolute inset-0 bg-black/40 w-full bg-opacity-50"></div>
            </div>
        </div>
    );
};

export default Banner02;