import React from "react";
import '../../index.css';
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
                <img src={BG} rel='norel' className='z-0 absolute h-[50vh] w-screen min-w-[1200px] object-cover lg:h-[40vh]' alt='none'/>
                    <div className='container'>
                        <div className='text-[70px] text-center pt-1'>
                            <div className='mt-60 mb-20 md:mt-40'>
                                <h1 className='text-white relative z-10'>Blog</h1>
                            </div>
                        </div>
                        <div className='pt-20'>
                            <div className='flex flex-wrap'>
                                <div className='flex flex-col px-2 py-4'>
                                    <div className='text-[16px] bg-[#f3f0ed] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                                        <p className='pb-3'>Subscribe:</p>
                                        <div className='flex flex-col gap-1 relative'>
                                            <input className='h-8 mx-1 pl-2 py-1 bg-[#eae6e2]' placeholder="Email Address" type='email' />
                                        </div>
                                    </div>
                                    <div className='text-[16px] bg-[#f3f0ed] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                                        <p className='pb-3'>Check out our Socials:</p>
                                        <div className='flex flex-col gap-1 relative'>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Instagram</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Facebook</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Pinterest</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Linkedin</p>
                                        </div>
                                    </div>
                                    <div className='text-[16px] bg-[#f3f0ed] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                                        <p className='pb-3'>Instagram:</p>
                                        <div className='flex flex-col gap-1 relative p-[.3rem]'>
                                            <img src={Insta} className='h-[226px] rounded-lg w-auto hover:scale-105 transition duration-[.4s] ease-in-out '/>
                                        </div>
                                    </div>
                                    <div className='text-[16px] bg-[#f3f0ed] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                                        <p className='pb-3'>Read More:</p>
                                        <div className='flex flex-col gap-1 relative'>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Healthy Foods</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>How to cast spells</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>Weather Report</p>
                                            <p className='cursor-pointer bg-[#eae6e2] mx-1 pl-2 py-1 text-black shadow-[inset_0_0_0_0_#ff8e43] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#fff] hover:text-[#ff8e43]'>AI is fancy auto correct</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='relative text-[25px] mb-3 text-center'>Take a look at our recent works!</p>
                                    <span className='w-[50px] bg-[#ff8e43] h-[2.5px] ml-[16rem] mt-[-15px] mb-3'></span>
                                    <div className='flex flex-col items-center mx-28 min-h-[875.3px] align-center'>
                                        <img src={First} className='mb-2'/>
                                        <img src={Third} className='mb-2 h-[420px]'/>
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