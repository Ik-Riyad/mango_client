import React from 'react';
import Banner from '../components/Banner/Banner';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {

    const plants = useLoaderData();

    return (

        <div>
            <title>Gardon | All Plants</title>

            <Banner></Banner>
            <div className="my-14 lg:mx-96">
                <h1 className='text-5xl font-bold text-center pb-10'>All Plants</h1>
                <table className="table">
                    {/* head */}
                    <thead className='text-xl'>
                        <tr>
                            {/* plant name, category, watering frequency */}
                            <th>Plant Name</th>
                            <th>Category</th>
                            <th>Watering Frequency</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-lg'>
                        {
                            plants.map(plant =>
                                <tr key={plant._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-20 w-20">
                                                    <img
                                                        src={plant.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{plant.plant}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {plant.category}
                                    </td>
                                    <td>{plant.frequency}</td>
                                    <th>
                                        <Link to={`/details/${plant._id}`}><button className="btn btn-ghost btn-xs text-sm text-black px-4 py-4 bg-green-200">View Details</button></Link>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>

                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default AllPlants;