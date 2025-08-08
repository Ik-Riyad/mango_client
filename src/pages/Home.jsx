import React from 'react';
import Slider from '../components/Banner/Slider';
import CardPlants from './CardPlants';
import { useLoaderData } from 'react-router';
import SectionImage from './SectionImage';
import SectionBanner from './SectionBanner';

const Home = () => {

    const plants = useLoaderData();

    return (
        <div className='dosis text-3xl'>
            <title>Gardon | Home</title>

            <section className=''>
                <Slider></Slider>
            </section>
            <section className='py-30 mx-30 2xl:mx-60'>
                <div className='text-center pb-20 '>
                    <h1 className='text-6xl font-bold'>Latest Plants</h1>
                    <p className='text-xl pt-5'>
                        Meet the newest addition to our green family – a low-maintenance, air-purifying beauty perfect for your indoor space. <br />
                        It thrives in low light and needs minimal care, making it ideal for beginners.
                        Bring home freshness, naturally!</p>
                </div>
                <CardPlants plants={plants}></CardPlants>
            </section>
            <section>
                <SectionBanner></SectionBanner>
            </section>
            <section>
                <div className="grid lg:grid-cols-3 mx-30 xl:mx-70 gap-10 mt-20">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                        <h3 className="text-2xl font-bold text-green-600/80">Plant care is self-care.</h3>
                        <div className="border-b border-green-600 w-20 my-5"></div>
                        <p className="text-lg text-gray-500">
                            Caring for plants isn't just about watering — it's about patience,
                            presence, and finding calm in the chaos. Each new leaf is a little
                            victory.
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                        <h3 className="text-2xl font-bold text-green-600/80">Why It Matters</h3>
                        <div className="border-b border-green-600 w-20 my-5"></div>
                        <p className="text-lg text-gray-500">
                            Clean air, peaceful vibes, and a touch of nature — this plant brings it all. Start your plant care journey today and feel the green difference!
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                        <h3 className='text-2xl font-bold text-green-600/80'>Let Nature Teach You</h3>
                        <div className="border-b border-green-600 w-20 my-5"></div>
                        <p className="text-lg text-gray-500">
                            As your plants grow, so do you. They teach resilience, mindfulness, and the beauty of slow progress. Start today — your green journey begins now.
                        </p>
                    </div>
                </div>
                <SectionImage></SectionImage>
            </section>
        </div>
    );
};

export default Home;