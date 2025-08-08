import React from 'react';
import footer from '../../assets/site-footer-bg.jpg';
import footerBottom from '../../assets/site-footer-bottom-shape.png'
import { FaFacebook, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';
import logo from '../../assets/logo-white.png';

const Footer = () => {
    return (
        <footer className="footer  text-white  pt-20 rounded relative" style={{ backgroundImage: `url(${footer})` }}>
            <div className="absolute inset-0 bg-green-900 opacity-60 z-0"></div>
            <div className=' z-10 flex flex-col lg:flex-row items-center w-full'>
                <div className='flex justify-center lg:flex-none pb-10'>
                    <img className='w-6/12 z-10' src={logo} alt="" />
                </div>
                <div className='h-full w-full '>
                    <nav className="flex items-center justify-center gap-4">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover" onClick={() => document.getElementById('my_modal_2').showModal()}>
                            Contact
                        </a>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-black">Hello!</h3>
                                <p className="py-4 text-black">Dhaka Cantonment, Dhaka 1206, Bangladesh</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>

                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='z-10 py-10'>
                        <div className="flex justify-center items-center gap-4">
                            <a href="https://www.facebook.com/" target='#'>
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://x.com/" target='#'>
                                <FaSquareXTwitter size={30} />
                            </a>
                            <a href="https://www.youtube.com/" target='#'>
                                <FaYoutube size={30} />
                            </a>
                        </div>
                    </nav>

                    <aside className='z-10 pb-10 text-center'>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Gardon Industries Ltd</p>
                    </aside>

                </div>
            </div>
            <img className='w-full' src={footerBottom} alt="" />
        </footer>
    );
};

export default Footer;