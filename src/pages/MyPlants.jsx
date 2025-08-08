import React, { use, useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import { Link, useLoaderData } from 'react-router';
import { FaUserEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { AuthContext } from '../Provider/AuthProvider';
import { TbListDetails } from "react-icons/tb";
import Swal from 'sweetalert2';


const MyPlants = () => {

    const { user } = use(AuthContext);

    const myPlants = useLoaderData();
    console.log(myPlants)

    const findMyPlants = myPlants.filter(myPlant => myPlant.email == user.email);
    const [clearData, setClearData] = useState(findMyPlants);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                fetch(`https://mango-server-phi.vercel.app/plants/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            if (data.deletedCount) {

                                const remainingPlants = findMyPlants.filter(plant => plant._id != id);
                                setClearData(remainingPlants)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Data Has Been Deleted Successfully.",
                                    icon: "success"
                                })

                            }
                        }
                    })
            }
        });
    }

    return (
        <div>
            <title>Gardon | My Plants</title>
            <Banner></Banner>
            <div className="my-14 lg:mx-96">
                <h1 className='text-5xl font-bold text-center pb-10'>My Plants</h1>
                <table className="table">
                    <thead className='text-xl'>
                        <tr>
                            <th>Plant Name</th>
                            <th>Category</th>
                            <th>Watering Frequency</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        clearData?.map(myPlants =>
                            <tbody key={myPlants._id} className='text-lg'>

                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-20 w-20">
                                                    <img
                                                        src={myPlants.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{myPlants.plant}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {myPlants.category}
                                    </td>
                                    <td>{myPlants.frequency}</td>
                                    <th className='flex gap-10'>
                                        <Link to={`/details/${myPlants._id}`} className='text-success'><TbListDetails size={30} /></Link>
                                        <Link to={`/update/${myPlants._id}`} className='text-success'><FaUserEdit size={30} /></Link>
                                        <Link onClick={() => handleDelete(myPlants._id)} className='text-error'><FaDeleteLeft size={30} /></Link>
                                    </th>
                                </tr>
                            </tbody>
                        )
                    }

                </table>
            </div>

        </div>
    );
};

export default MyPlants;