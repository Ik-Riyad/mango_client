import React, { use, useState } from 'react';
import Banner from '../components/Banner/Banner';
import bannerImg from '../assets/slider2-vogue3-1920x960.jpg'
import Navbar from '../components/Header/Navbar';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';

const Register = () => {

    const [passToggle, setPassToggle] = useState(false)

    const { createUser, googleLogin, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, terms, image, name, tel, ...restFormData } = Object.fromEntries(formData.entries());

        if (!terms) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Accept our terms",
            });
            return
        }

        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (passwordRegExp.test(password) === false) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'Password must be at least 6 characters long and include both uppercase and lowercase letters.',
            });
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                updateUser({ displayName: name, photoURL: image, phoneNumber: tel }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: image, phoneNumber: tel })
                }).catch((error) => {
                    console.log(error);
                    setUser(user);
                });

                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                console.log(email, password, userProfile)

                fetch('https://mango-server-phi.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("Profile Created Data is", data)
                        navigate('/');
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "You Have Registered Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            })
    }


    const handleGoogleRegister = () => {
        googleLogin()
            .then((result) => {
                navigate('/');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You Have Been Successfully Register.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            });
    }

    return (
        <div className='bg-no-repeat bg-center bg-cover bg-green-400' style={{ backgroundImage: `url(${bannerImg})` }}>
            <title>Gardon | Register</title>

            <Navbar></Navbar>
            <div className='min-h-screen w-full lg:grid lg:grid-cols-2 justify-center items-center py-50'>
                <div className='mx-auto text-center space-y-5'>
                    <h1 className='text-6xl font-bold text-gray-700'>Nurture Nature <br /> with Every Step</h1>
                    <h3 className='text-2xl font-bold text-gray-500'>Join Our Plant Care Community Today</h3>
                    <p className='text-lg font-light text-black'>Explore tips, connect with fellow plant lovers,  <br /> and grow with confidence. Registration is free — together, let’s bring more life into our homes and hearts.</p>
                </div>

                <div className="hero-content flex-col lg:flex-row-reverse pt-10">
                    <div className="card bg-white/80 w-full max-w-lg shrink-0 shadow-2xl ">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold text-center text-black'>Please Register</h1>
                            <form onSubmit={handleRegister} className="fieldset ">
                                <label className="label text-black">Name</label>
                                <input name='name' type="text" className="input w-full" placeholder="Name" required />
                                <label className="label text-black">Email</label>
                                <input name='email' type="email" className="input w-full" placeholder="Email" required />
                                <label className="label text-black">Phone</label>
                                <input name='tel' type="tel" className="input w-full" placeholder="Phone" required />
                                <label className="label text-black">Image</label>
                                <input name='image' type="text" className="input w-full" placeholder="Image" required />
                                <label className="label text-black">Password</label>
                                <div className='relative'>
                                    <input name='password' type={passToggle ? 'text' : 'password'} className="input w-full" placeholder="Password" />
                                    <button type='button' onClick={() => setPassToggle(!passToggle)} className='cursor-pointer absolute right-4 top-2'>{passToggle ? <FaEye size={23} /> : <FaEyeSlash size={23} />}</button>
                                </div>
                                <label className="label mt-2 text-black">
                                    <input type="checkbox" name='terms' className="checkbox text-white bg-black" />
                                    Accept Terms & Conditions
                                </label>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </form>
                            <div className='grid grid-cols-3 items-center justify-center mt-5'>
                                <div className='border-b border-gray-400'></div>
                                <p className='textarea-md font-medium text-gray-600 mx-auto'>or Sign Up with</p>
                                <div className='border-b border-gray-400'></div>
                            </div>
                            <button onClick={handleGoogleRegister} className="btn bg-white text-black border-[#e5e5e5] mt-2">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Register with Google
                            </button>
                            <p className='pt-2 mx-auto textarea-md text-gray-500'>Already have an account? Please <Link to='/login' className=' text-black underline'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;