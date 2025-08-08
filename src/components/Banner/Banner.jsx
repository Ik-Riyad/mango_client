import React from 'react';

import bannerImg from '../../assets/page-header-bg.jpg'

const Banner = () => {
    return (
        <div className='relative h-[350px] bg-no-repeat bg-center bg-cover bg-green-400' style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="absolute inset-0 bg-black/30 w-full bg-opacity-50"></div>
        </div>
    );
};

export default Banner;