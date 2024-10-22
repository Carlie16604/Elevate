import React from "react";
import '../../index.css';
import NavBar from '../Components/NavBar.jsx';
import BG from '../../assets/Universal/sideBackground.jpg'
import Insta from '../../assets/Blog/insta.jpg'

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
                        <div className='pt-8'>
                            <div className='pt-12 grid grid-cols-2 items-center '>
                                <div className='flex flex-col items-center w-1/2 px-2 py-4'>
                                    <div className='text-[16px] bg-[#f3f0ed] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                                        <p className='pb-3'>Subscribe:</p>
                                        <div className='flex flex-col gap-1 relative'>
                                            <input className='h-8 mx-1 pl-2 py-1 bg-[#eae6e2]' placeholder="Email Address" type='email' />
                                        </div>
                                    </div>
                                    <div className='text-[16px] bg-[#f3f0ed] p-3 rounded-xl mb-5 h-auto min-w-[250px]'>
                                        <p className='pb-3'>Check out our Socials:</p>
                                        <div className='flex flex-col gap-1 relative'>
                                            <p className='bg-[#eae6e2] mx-1 pl-2 py-1'>Instagram</p>
                                            <p className='bg-[#eae6e2] mx-1 pl-2 py-1'>Facebook</p>
                                            <p className='bg-[#eae6e2] mx-1 pl-2 py-1'>Pinterest</p>
                                            <p className='bg-[#eae6e2] mx-1 pl-2 py-1'>Linkedin</p>
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
                                            <p className='bg-[#eae6e2] mx-1 pl-2 py-1'>Healthy Foods</p>
                                            <p className='bg-[#eae6e2] mx-1 pl-2 py-1'>How to cast spells</p>
                                            <p className='bg-[#eae6e2] mx-1 pl-2 py-1'>Weather Report</p>
                                            <p className='bg-[#eae6e2] mx-1 pl-2 py-1'>AI is fancy auto correct</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <p>Take a look at our recent works!</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Blog;