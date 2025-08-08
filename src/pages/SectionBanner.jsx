import React from 'react';
import bannerImg from '../assets/slideshow_image_1.webp'

const SectionBanner = () => {
    return (
        <div className='flex flex-col items-center py-[140px] relative' style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='bg-[#84cc16]/70 absolute inset-0 w-full hover:border-white/30 border-[50px] border-transparent transition duration-300 delay-100'></div>
                <h1 className='w-6/12 text-white font-bold text-5xl text-center z-10'>Every plant you <br /> nurture brings calm into your life.</h1>
                <div className=' border-white border-1 w-20 my-10 z-10'></div>
                <p className='text-center text-white z-10 text-2xl'>Caring for plants isn't just about watering — <br /> it's about patience, presence, and finding calm in the chaos. Each new leaf is a little victory.</p>
        </div>

    );
};

export default SectionBanner;