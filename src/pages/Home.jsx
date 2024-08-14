import React from "react";
import'../index.css';
import Rock1 from '../assets/Home/Rock1.png'
import Rock2 from '../assets/Home/Rock2.png'
import Rock3 from '../assets/Home/Rock3.png'
import Logo from '../assets/logo.svg'
import Photo from '../assets/Home/Photo.png'
import PilatesBall from '../assets/Home/PilatesBall.jpg'
import Stretch from '../assets/Home/Stretch.png'
import NavBar from '../pages/NavBar';
import { Link } from "react-router-dom";


const Home = () => {
    // https://blennd.com/
    // https://uiverse.io/buttons?t=tailwind&page=1

    return (
        <>
        <NavBar />
            <section id='Home'>
                <div className='container h-screen'>
                    <div className='flex flex-wrap'>
                        <img id='about' className='rock1' src={Rock1} alt='Rocks' />
                        <img className='rock2' src={Rock2} alt='Rocks' />
                        <img className='rock3' src={Rock3} alt='Rocks' />
                            <div className='grid grid-cols-2 items-center pt-[250px] pl-24 relative'>
                                <div>
                                    <div className='artist-card top-32'>
                                        <h1 className='artist-card__title'>Pilates</h1>
                                    </div>
                                    <h3 className='text-[20px] text-black font-medium uppercase animate-slide-up'>
                                        Award Winning Pilates Instructors
                                    </h3>
                                    <h3 className='pt-[8.5rem] text-[30px] text-black font-medium animate-slide-up'>
                                        A healthy way to workout
                                    </h3>
                                    <p className='pt-2 pb-5'>
                                        Pilates is a renowned Pilates studio dedicated to helping individuals achieve their fitness goals based in Boulder, CO. We host expertly crafted training along with empowering instructors. 
                                    </p>
                                    <Link to='/Contact' className='text-black border-2 rounded-[400px] border-[#949978] px-9 py-4 inline-block text-[14px] tracking-[1px] cursor-pointer shadow-[inset_0_0_0_0_#949978] transition-[box-shadow] ease-out duration-1000 hover:shadow-[inset_400px_0_0_0_#949978] hover:text-white'>Let's Talk About Your Health!</Link>
                                </div>
                                {/* <div className='flex flex-col'>
                                    <img className='w-[40rem]' src={Stretch} alt='img'/> 
                                </div> */}
                            </div>
                        {/* <div className='whyUs mt-24 mx-[115.5px]'>
                            <div className='p-8 flex'>
                                <div className='text-center pr-8'>
                                    <h3 className='text-5xl items-center flex-col text-black'>
                                        Why Us?
                                    </h3>
                                        <p className='flex text-center content-center flex-wrap leading-8 mt-12'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        </p>
                                </div>
                                <div className='flex justify-end flex-row'>
                                    <img className='w-min-[350.5px] h-min-[295.39]' src={PilatesBall} alt='Photo'/>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;