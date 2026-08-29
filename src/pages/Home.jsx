import React from "react";
import'../index.css';
import Studio from '../assets/Home/tester.png';
import Facebook from '../assets/Home/facebook.svg';
import Instagram from '../assets/Home/instagram.svg';
import Pintrest from '../assets/Home/pinterest.svg';
import NavBar from '../pages/Components/NavBar.jsx';
import { Link } from "react-router-dom";


const Home = () => {
    // https://blennd.com/
    // https://uiverse.io/buttons?t=tailwind&page=1

    return (
        <>
        <NavBar />
            <section id='Home' className='radial-gradient border-2 border-[#97ab86] relative overflow-hidden'>
                <img src={Studio} alt="studio img" rel='norel' className='z-8 absolute h-[95vh] overflow-hidden w-full object-cover'/>
                <div className='container min-h-screen h-auto pb-16 desktop:h-screen desktop:pb-0'>
                    <div className='flex flex-wrap '>
                        <div className='grid grid-cols-1 desktop:grid-cols-2 items-center pt-32 desktop:pt-[250px] relative'>
                            <div>
                                <div className='elevate-card top-8 desktop:top-32 '>
                                    <h1 className='elevate-card__title'>Elevate</h1>
                                </div>
                                <h3 className='text-[16px] desktop:text-[20px] text-black font-medium uppercase animate-slide-up'>
                                    <span className='text-[#f36943]'>Award Winning </span>Pilates Instructors
                                </h3>
                                <h3 className='pt-8 desktop:pt-[8.5rem] text-[26px] desktop:text-[35px] pb-8 text-black font-medium animate-slide-up'>
                                    Regaining <span className='text-[#ff8e43]'>shape,</span><br/>Relearning <span className='text-[#ff8e43]'>you.</span>
                                </h3>
                                <Link to='/Contact' className='text-black border-4 rounded-[400px] border-[#97ab87] px-6 py-3 desktop:px-10 desktop:py-5 inline-block text-[16px] desktop:text-[19px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#97ab86] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#97ab86] hover:text-white z-10'>
                                    Let's Talk About Your Health!
                                </Link>
                            </div>
                        </div>
                        <div className='z-10 blur hidden desktop:flex flex-row-reverse -rotate-90 text-black absolute top-1/2 right-3 items-center'>
                            <p className='capitalize text-3xl font-bold tracking-wider'>
                                share
                            </p>
                            <span className='w-[35px] bg-[#ff8e43] h-[2.5px] mr-6'/>
                            <div className='text-white gap-7 flex mr-7'>
                                <img className='Blogs rotate-90' src={Pintrest} alt='Pintrest'/>
                                <img className='Blogs rotate-90' src={Facebook} alt='Facebook'/>
                                <img className='Blogs rotate-90' src={Instagram} alt='Instagram'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;