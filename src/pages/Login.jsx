import React, { use, useState } from 'react';
import Banner from '../components/Banner/Banner';
import bannerImg from '../assets/slider2-vogue3-1920x960.jpg'
import Navbar from '../components/Header/Navbar';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [passToggle, setPassToggle] = useState(false)
    const { userLogIn, googleLogin } = use(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                navigate(`${location.state ? location.state : '/'}`)
                toast.success('You Have Been Successfully Logged In.', { position: 'top-right', })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, { position: 'top-right', })
            });

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                navigate(`${location.state ? location.state : '/'}`)
                toast.success('You Have Been Successfully Logged In.', { position: 'top-right', })
            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, { position: 'top-right', })
            });
    }


    return (
        <div className='bg-no-repeat bg-center bg-cover bg-green-400' style={{ backgroundImage: `url(${bannerImg})` }}>
            <title>Gardon | Login</title>

            <Navbar></Navbar>

            <div className='min-h-screen w-full lg:grid lg:grid-cols-2 justify-center items-center py-50'>
                <div className='mx-auto text-center space-y-5'>
                    <h1 className='text-6xl font-bold text-gray-700'>Welcome Back, <br /> Plant Lover!</h1>
                    <h3 className='text-2xl font-bold text-gray-500'>Let’s Keep Growing Together</h3>
                    <p className='text-lg font-light text-black'>Sign in to track your plant care progress, get new tips, and stay connected with nature every day.</p>
                </div>

                <div className="hero-content flex-col lg:flex-row-reverse pt-10">
                    <div className="card bg-white/80 w-full max-w-lg shrink-0 shadow-2xl ">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold text-center text-black'>Please Login</h1>
                            <form onSubmit={handleLogin} className="fieldset ">
                                <label className="label text-black">Email</label>
                                <input name='email' type="email" className="input w-full" placeholder="Email" required />
                                <label className="label text-black">Password</label>
                                <div className='relative'>
                                    <input name='password' type={passToggle ? 'text' : 'password'} className="input w-full" placeholder="Password" required />
                                    <button type='button' onClick={() => setPassToggle(!passToggle)} className='cursor-pointer absolute right-4 top-2'>{passToggle ? <FaEye size={23} /> : <FaEyeSlash size={23} />}</button>
                                </div>
                                <div><a className="link link-hover text-black">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <div className='grid grid-cols-3 items-center justify-center mt-5'>
                                <div className='border-b border-gray-400'></div>
                                <p className='textarea-md font-medium text-gray-600 mx-auto'>or Sign In with</p>
                                <div className='border-b border-gray-400'></div>
                            </div>
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-2">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p className='pt-2 mx-auto textarea-md text-gray-500'>Don't have an account? Please <Link to='/register' className=' text-black underline'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;