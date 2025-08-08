import React from 'react';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router';
import Banner02 from '../components/Banner/Banner02';
import { MdOutlineEmail, MdOutlineWaterDrop } from "react-icons/md";
import { FaRegFaceSmileBeam, FaRegUser, FaTree } from 'react-icons/fa6';
import { PiCalendarBold } from 'react-icons/pi';
import { RiHealthBookLine } from 'react-icons/ri';
import { IoIosArrowDropdown, IoIosArrowDropleftCircle } from 'react-icons/io';


const DetailPlant = () => {
    const navigate = useNavigate();
    const { _id, care, category, details, email, endDate, frequency, health, image, name, plant, startDate } = useLoaderData();
    return (
        <div className='pb-30'>
            <Banner02></Banner02>
            <div className='h-2/12 my-30 mx-10 lg:mx-70 p-15 bg-[#F6F6F0]/50 rounded-xl grid lg:grid-cols-6'>
                <img className='lg:w-10/11 rounded-xl col-span-3' src={image} alt="" />
                <div className='w-full lg:ml-20 col-span-3 text-center lg:text-start'>
                    <h1 className='text-6xl font-bold py-10 lg:p-0'>Plant: {plant}</h1>
                    <h3 className='text-2xl font-bold text-gray-500 pt-6'>Category: {category}</h3>
                    <div className='flex items-center gap-10 font-bold text-gray-500 pt-6'>
                        <p className='flex items-center gap-2'><FaTree size={25} />{category}</p>
                        <p className='flex items-center gap-2'><FaRegFaceSmileBeam size={25} />{care}</p>
                        <p className='flex items-center gap-0'><MdOutlineWaterDrop size={25} />{frequency}</p>
                    </div>
                    <div className='pt-6  text-gray-500'>
                        <p className='flex items-center gap-2'><PiCalendarBold size={25} />Last Watered: {startDate}</p>
                        <p className='flex items-center gap-1 pt-6'><MdOutlineWaterDrop size={25} />Next Water: {endDate}</p>
                        <p className='flex items-start gap-1 pt-6'><RiHealthBookLine size={25} /> {health}</p>
                    </div>
                    <div className='pb-6'>
                        <h3 className='text-2xl font-bold pt-6'>User Info</h3>
                        <p className='flex items-center gap-1 pt-6 text-gray-500'><FaRegUser size={22} />{name}</p>
                        <p className='flex items-center gap-1 pt-3 text-gray-500'><MdOutlineEmail size={25} />{email}</p>
                        <a href='#detail' className='pt-6 flex  text-gray-500 underline'><IoIosArrowDropdown size={25} />Detail Below</a>
                    </div>
                </div>
            </div>
            <div className=' mx-10 lg:mx-70 p-15 bg-black/5 rounded-xl'>
                <h3 className='text-4xl font-bold pb-6'>Plant Detail Info</h3>
                <p id='detail' className=' text-gray-500'>{details}</p>
                <Link onClick={()=>navigate(-1)} className='mt-6 btn bg-white-100'><IoIosArrowDropleftCircle />Back to the Plant List</Link>
            </div>
        </div>
    );
};

export default DetailPlant;