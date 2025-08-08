import React from 'react';

import slider01 from '../../assets/1.jpg'
import slider02 from '../../assets/2.jpg'
import slider03 from '../../assets/3.jpg';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


const Slider = () => {
    return (
        <Swiper
            className='h-screen'
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{ delay: 6000 }}
            fadeEffect={{ crossFade: true }}
            speed={1500}
        >
            <SwiperSlide>
                <div className="relative w-full h-screen">
                    <div className="absolute inset-0 bg-neutral-800 opacity-50 z-10"></div>

                    <div className="absolute inset-0 flex justify-center items-center z-20">
                        <div className="text-center text-white dosis px-4">
                            <h3 className="text-2xl font-medium">Connect with Nature</h3>
                            <h1 className="md:text-4xl xl:text-7xl font-bold pt-4 pb-6">Every plant tells a story</h1>
                            <p>
                                Start simple — learn how light, water, and care affect your green companion.
                                Nature doesn’t rush, yet everything gets done.
                            </p>
                        </div>
                    </div>
                    <img src={slider01} alt="slider" className="w-full h-full object-cover absolute inset-0 z-0" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="relative w-full h-screen">
                    <div className="absolute inset-0 bg-neutral-800 opacity-50 z-10"></div>

                    <div className="absolute inset-0 flex justify-center items-center z-20">
                        <div className="text-center text-white dosis px-4">
                            <h3 className="text-2xl font-medium">Care with Confidence</h3>
                            <h1 className="md:text-4xl xl:text-7xl font-bold pt-4 pb-6">Plant care made simple</h1>
                            <p>
                                From watering schedules to repotting tips — we guide you at every step.
                                Build confidence and become a mindful plant parent.
                            </p>
                        </div>
                    </div>
                    <img src={slider02} alt="slider" className="w-full h-full object-cover absolute inset-0 z-0" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-screen">
                    <div className="absolute inset-0 bg-neutral-800 opacity-50 z-10"></div>

                    <div className="absolute inset-0 flex justify-center items-center z-20">
                        <div className="text-center text-white dosis px-4">
                            <h3 className="text-2xl font-medium">Grow, Learn, Repeat</h3>
                            <h1 className="md:text-4xl xl:text-7xl font-bold pt-4 pb-6">Growth is a quiet process</h1>
                            <p>
                                Explore care guides, seasonal tips, and beginner-friendly knowledge.
                                Keep learning — your plants (and soul) will thank you.
                            </p>
                        </div>
                    </div>
                    <img src={slider03} alt="slider" className="w-full h-full object-cover absolute inset-0 z-0" />
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;
