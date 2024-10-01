import React from "react";
import'../index.css';
import Studio from '../assets/Home/studio.jpg';
import Facebook from '../assets/Footer/Facebook.svg';
import Instagram from '../assets/Footer/Instagram.svg';
import Pintrest from '../assets/Footer/Pintrest.svg';
import NavBar from '../pages/Components/NavBar.jsx';
import { Link } from "react-router-dom";


const Home = () => {
    // https://blennd.com/
    // https://uiverse.io/buttons?t=tailwind&page=1

    return (
        <>
        <NavBar />
            <section id='Home'>
                <img src={Studio} alt="studio img" rel='norel' className='z-0 absolute h-[100vh] w-screen min-w-[1200px] object-cover shadow-md'/>
                <div className='container h-screen'>
                    <div className='flex flex-wrap'>
                            <div className='grid grid-cols-2 items-center pt-[250px] pl-12 relative'>
                                <div>
                                    <div className='elevate-card top-32 '>
                                        <h1 className='elevate-card__title'>Elevate</h1>
                                    </div>
                                    <h3 className='text-[20px] text-black font-medium uppercase animate-slide-up'>
                                        Award Winning Pilates Instructors
                                    </h3>
                                    <h3 className='pt-[8.5rem] pb-[4rem] text-[30px] text-black font-medium animate-slide-up'>
                                        A healthy way to workout
                                    </h3>
                                    {/* <p className='pt-2 pb-10'>
                                        Pilates is a renowned Pilates studio dedicated to helping individuals achieve their fitness goals based in Boulder, CO. We host expertly crafted training along with empowering instructors. 
                                    </p> */}
                                    <Link to='/Contact' className='text-black border-2 rounded-[400px] border-[#949978] px-10 py-5 inline-block text-[19px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#949978] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#949978] hover:text-white'>
                                        Let's Talk About Your Health!
                                    </Link>
                                </div>
                        <div className='blur flex flex-row-reverse -rotate-90 text-white absolute bottom-[25%] right-3 items-center min800:hidden'>
                            <p className='capitalize text-3xl font-bold tracking-wide'>
                                share
                            </p>
                            <span className='w-[35px] bg-[#3E5C47] h-[2.5px] mr-6'></span>
                            <div className='text-white gap-7 flex mr-7'>
                                <img className='socials rotate-90' src={Pintrest} alt='Pintrest'/>
                                <img className='socials rotate-90' src={Facebook} alt='Facebook'/>
                                <img className='socials rotate-90' src={Instagram} alt='Instagram'/>
                            </div>
                        </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;