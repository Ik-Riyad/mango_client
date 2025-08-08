import React, { use, useState } from 'react';
import bannerImg from '../assets/main-slider-three-bg.jpg';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';


const AddPlant = () => {

    const {user} = use(AuthContext);

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const formatDateForDB = (date) => {
        if (!date) return '';
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    };

    const handlePlant = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const plants = Object.fromEntries(formData.entries());
        
        plants.startDate = formatDateForDB(startDate);
        plants.endDate = formatDateForDB(endDate);
        
        fetch('https://mango-server-phi.vercel.app/plants', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plants)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Data is working to create a new data", data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Plant Added Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    setStartDate(null);
                    setEndDate(null);
                }
            })
    }
    return (
        <div>
            <title>Gardon | Add Plants</title>
            <div className=' h-full bg-no-repeat bg-center bg-cover bg-green-400' style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className='min-h-screen w-full lg:py-30'>
                    <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                        <div className="card w-full max-w-2xl shrink-0 shadow-2xl bg-black/50 p-2">
                            <div className="card-body">
                                <h1 className='text-3xl font-bold text-center text-white'>Please Add Your Plant</h1>
                                <form onSubmit={handlePlant} className="fieldset gap-5">
                                    <input name='image' type="text" className="input w-full bg-transparent focus:outline-none focus:border-[#31241f] shadow-none  border-[#31241f] text-white placeholder-white" placeholder="Image" />
                                    <input name='plant' type="text" className="input w-full bg-transparent focus:outline-none focus:border-[#31241f] shadow-none  border-[#31241f] text-white placeholder-white" placeholder="Plant Name" />
                                    <div>
                                        <select name='category' className="select select-bordered w-full bg-transparent focus:outline-none focus:border-[#31241f] shadow-none  border-[#31241f] text-white">
                                            <option disabled selected className='text-black'>Choose a category</option>
                                            <option className='text-black'>Succulent</option>
                                            <option className='text-black'>Fern</option>
                                            <option className='text-black'>Flowering</option>
                                            <option className='text-black'>Herb</option>
                                            <option className='text-black'>Tree</option>
                                        </select>
                                    </div>
                                    <input name='frequency' type="text" className="input w-full bg-transparent focus:outline-none focus:border-[#31241f] shadow-none  border-[#31241f] text-white placeholder-white" placeholder="Watering Frequency" />
                                    <div>
                                        <select name='care' className="select select-bordered w-full bg-transparent focus:outline-none focus:border-[#31241f] shadow-none  border-[#31241f] text-white">
                                            <option disabled selected className='text-black'>Care Level</option>
                                            <option className='text-black'>Easy Care</option>
                                            <option className='text-black'>Moderate Care</option>
                                            <option className='text-black'>Difficult Care</option>
                                        </select>
                                    </div>
                                    <div className='grid lg:grid-cols-2 gap-3'>
                                        <div className='w-full'>
                                            <label className='text-white'>Last Watered Date</label>
                                            <DatePicker name='startDate' className='w-full mt-3 text-white bg-transparent border border-[#31241f] focus:outline-none focus:border-[#31241f] rounded-md p-3 text-base' placeholderText='Last Watered Date' selected={startDate} onChange={(date) => setStartDate(date)} wrapperClassName="w-full" />
                                            {/* <input name='startDate' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className='w-full mt-3 text-white bg-transparent border border-[#31241f] focus:outline-none focus:border-[#31241f] rounded-md p-3 text-base' /> */}
                                        </div>
                                        <div className='w-full'>
                                            <label className='text-white '>Next Watering Date</label>
                                            <DatePicker name='endDate' className='w-full mt-3 text-white bg-transparent border border-[#31241f] focus:outline-none focus:border-[#31241f] rounded-md p-3 text-base ' placeholderText='Next Watering Date' selected={endDate} onChange={(date) => setEndDate(date)} wrapperClassName="w-full" />
                                            {/* <input name='endDate' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className='w-full mt-3 text-white bg-transparent border border-[#31241f] focus:outline-none focus:border-[#31241f] rounded-md p-3 text-base' /> */}
                                        </div>
                                    </div>
                                    <input name='health' type="text" className="input w-full bg-transparent focus:outline-none focus:border-[#31241f] shadow-none  border-[#31241f] text-white placeholder-white" placeholder="Health Status" />
                                    <input value={user ? user.email : ''} name='email' type="email" className="input w-full bg-transparent focus:outline-none focus:border-[#31241f] shadow-none  border-[#31241f] text-white placeholder-white" placeholder="User Email" />
                                    <input name='name' type="text" value={user ? user.displayName : ''} className="input w-full bg-transparent focus:outline-none focus:border-[#31241f] shadow-none  border-[#31241f] text-white placeholder-white" placeholder="User Name" />
                                    <textarea name='details' className="textarea w-full bg-transparent focus:outline-none focus:border-[#31241f] shadow-none  border-[#31241f] text-white placeholder-white" placeholder="Description"></textarea>
                                    <button className="btn btn-neutral bg-[#31241f] text-white mt-4 border-none">Add Plant</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddPlant;