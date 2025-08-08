import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, NavLink } from 'react-router';
import { MdAppRegistration, MdOutlineMailOutline } from 'react-icons/md';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { LuLogOut } from "react-icons/lu";
import { Tooltip } from 'react-tooltip';
import avatarIcon from '../../assets/avatar.svg'
import mainLogo from '../../assets/logo-white.png'
import { format } from "date-fns";
import { toast } from 'react-toastify';

const Navbar = ({ setTheme, theme }) => {


    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const { logOutUser, user } = use(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.info("You Have been Successfully Logged Out.")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const img = [avatarIcon];

    const nav = (
        <>
            <li ><NavLink to='/' className="hover:bg-transparent hover:text-green-500">Home</NavLink></li>
            <li><NavLink to='/plants' className="hover:bg-transparent hover:text-green-500">All Plants</NavLink></li>
            <li><NavLink to='/add-plant' className="hover:bg-transparent hover:text-green-500">Add Plant</NavLink></li>
            <li><NavLink to='/my-plants' className="hover:bg-transparent hover:text-green-500">My Plants</NavLink></li>
        </>
    )
    return (

        <div className='bg-black/30 shadow-2xl px-14 py-2 justify-around absolute z-10 text-white w-full'>
            <div className='pb-2 flex items-center justify-between mx-10'>
                <div className='flex'>
                    <div className='flex items-center gap-1'>
                        <FaPhoneAlt className='text-md text-green-500' />
                        <h1 className='hidden md:inline'>Phone: {user ? user.phoneNumber : ''}</h1>
                    </div>
                    <div className='border-r h-6 border-white/50 mx-4'></div>
                    <div className='flex items-center gap-1'>
                        <MdOutlineMailOutline className='text-xl text-green-500' />
                        <h1 className='hidden md:inline'>Email: {user ? user.email : ''} </h1>
                    </div>
                    <div className='border-r h-6 border-white/50 mx-4'></div>
                    <div className='hidden md:inline'>
                        {format(currentTime, 'EEEE, MMMM d, yyyy - hh:mm:ss a')}
                    </div>
                </div>
                <div className='flex items-center gap-1'>

                    <label className="swap swap-rotate mr-5">
                        <input onClick={() => setTheme(!theme)} type="checkbox" className="theme-controller" value="synthwave" />

                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>

                    {
                        user ? <Link onClick={handleLogOut} to='/login' className='flex items-center gap-2'>
                            <LuLogOut className='text-lg text-green-500' />
                            <h1 className='hidden md:inline'>LogOut</h1>
                        </Link>
                            :
                            <div className='flex '>
                                <Link to='/login' className='flex items-center gap-2'>
                                    <FaUser className='text-sm text-green-500' />
                                    <h1 className='hidden md:inline'>Login</h1>
                                </Link>
                                <div className='border-r h-6 border-white/50 mx-4'></div>
                                <Link to='/register' className='flex items-center gap-2'>
                                    <MdAppRegistration className='text-lg text-green-500' />
                                    <h1 className='hidden md:inline'>Register</h1>
                                </Link>
                            </div>
                    }

                </div>
            </div>
            <div className="border-b border-white/20"></div>

            <div className="navbar" >

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <Link to='/' className='md:w-[14%] w-[30%] lg:ml-16'><img src={mainLogo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex ml-2.5">
                    <ul className="menu menu-horizontal px-1 text-lg ">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end md:pr-24">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-3" data-tooltip-id="my-tooltip">
                        {user ?
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user ? user.photoURL : img[0]} />
                            </div>
                            : ''}
                    </div>
                    <Tooltip id="my-tooltip" content={user ? user.displayName : "Hello"}></Tooltip>
                </div>
            </div>
        </div>


    );
};

export default Navbar;