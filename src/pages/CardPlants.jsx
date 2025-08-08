import React, { useEffect, useState } from 'react';
import { FaRegFaceSmileBeam, FaTree } from 'react-icons/fa6';
import { Link } from 'react-router';

const CardPlants = ({ plants }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        if (plants?.length > 0) {
            setCards(plants.slice(0, 8));
        }
    }, [plants]);

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10'>

            {
                cards.map(plant =>
                    <div key={plant._id} className=" rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="relative">
                            <img
                                src={plant.image}
                                alt=""
                                className="w-full h-[300px] object-cover"
                            />

                            <span className="absolute top-3 left-3 bg-[#D0EAD7] text-[#007F5F] text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                                New
                            </span>

                        </div>

                        <div className="p-4">
                            <h3 className=" font-semibold text-base-gray-100 text-xl uppercase">{plant.plant}</h3>
                            <p className="text-sm text-base-gray uppercase flex items-center gap-2 py-2"><FaTree size={20} />{plant.category}</p>
                            <p className="mt-2 text-base-gray font-medium text-xl flex items-center gap-2"><FaRegFaceSmileBeam size={20} />{plant.care}</p>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-2">
                            <Link to={`/details/${plant._id}`}>
                                <button className="btn btn-outline btn-success w-full">View More</button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CardPlants;