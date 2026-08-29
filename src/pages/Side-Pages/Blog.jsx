import React from "react";
import '../../index.css';
import { Link, Route, HashRouter, Routes } from "react-router-dom";
import NavBar from '../Components/NavBar.jsx';
import BG from '../../assets/Universal/sideBackground.jpg';
import Insta from '../../assets/Blog/insta.jpg';
import First from '../../assets/Blog/woman3.jpg';
import Second from '../../assets/Blog/pilates4.jpg';
import Third from '../../assets/Blog/pilates5.png';

const Blog = () => {
    return (
        <>
            <NavBar />
                <div id='Blog'>
                <img src={BG} rel='norel' className='z-10 absolute h-[40vh] w-full object-cover desktop:h-[50vh]' alt='none'/>
                    <div className='container'>
                        <div className='text-[42px] desktop:text-[70px] text-center pt-1'>
                            <div className='mt-32 mb-10 desktop:mt-60 desktop:mb-20 md:mt-40'>
                                <h1 className='text-white relative z-10 backdrop-blur-sm'>Blog</h1>
                            </div>
                        </div>
                        <div className='py-10 desktop:py-28 bg-[#97ab8623] backdrop-blur-sm shadow-xl'>
                            <div className='flex flex-col lg:flex-row flex-wrap'>
                                <div className='flex flex-col px-5 py-4 w-full lg:w-auto'>
                                    <div className='text-[16px] bg-[#fcfbfa] p-3 rounded-xl mb-5 h-auto min-w-0 lg:min-w-[250px]'>
                                        <p className='pb-3'>Subscribe:</p>
                                        <div className='flex flex-col gap-1 relative'>
                                            <input className='h-8 mx-1 pl-2 py-1 bg-[#eae6e2]' placeholder="Email Address" type='email' />
                                        </div>
                                    </div>
                                    <div className='text-[16px] bg-[#fcfbfa] p-3 rounded-xl mb-5 h-auto min-w-0 lg:min-w-[250px]'>
                                        <p className='pb-3'>Check out our Socials:</p>
                                        <div className='flex flex-col gap-1 relative'>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Instagram</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Facebook</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Pinterest</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Linkedin</p>
                                        </div>
                                    </div>
                                    <div className='text-[16px] bg-[#fcfbfa] p-3 rounded-xl mb-5 h-auto min-w-0 lg:min-w-[250px]'>
                                        <p className='pb-3'>Instagram:</p>
                                        <div className='flex flex-col gap-1 relative p-[.3rem]'>
                                            <img src={Insta} alt='Elevate Instagram' className='h-[226px] rounded-lg w-full max-w-full object-cover hover:scale-105 transition duration-[.4s] ease-in-out '/>
                                        </div>
                                    </div>
                                    <div className='text-[16px] bg-[#fcfbfa] p-3 rounded-xl mb-5 h-auto min-w-0 lg:min-w-[250px]'>
                                        <p className='pb-3'>Read More:</p>
                                        <div className='flex flex-col gap-1 relative'>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Healthy Foods</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>How to cast spells</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Weather Report</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>AI is actually pretty cool</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <p className='relative text-[22px] desktop:text-[25px] mb-3 text-center'>Take a look at our recent works!</p>
                                    <span className='w-[50px] bg-[#ff8e43] h-[2.5px] mx-auto mt-[-15px] mb-3'/>
                                    <div className='flex flex-col items-center mx-4 desktop:mx-28 min-h-0 align-center'>
                                        <img src={First} className='mb-2 max-w-full h-auto'/>
                                        <img src={Third} className='mb-2 max-w-full h-auto desktop:h-[420px]'/>
                                        {/* <img src={Second} className='mb-5 h-[380px] flex flex-wrap'/>
                                        <img src={Third} className='h-[393px]'/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Blog;