import React from "react";
import'../index.css';
import Rock1 from '../assets/Home/Rock1.png'
import Rock2 from '../assets/Home/Rock2.png'
import Rock3 from '../assets/Home/Rock3.png'
import Meditate from '../assets/Home/meditate.svg'
import Stretch from '../assets/Home/Stretch.png'
import Woman from '../assets/Home/woman.webp'
import Studio from '../assets/Home/studio.jpg'
import NavBar from '../pages/Components/NavBar.jsx';
import { Link } from "react-router-dom";


const Home = () => {
    // https://blennd.com/
    // https://uiverse.io/buttons?t=tailwind&page=1

    return (
        <>
        <NavBar />
            <section id='Home'>
                <img src={Studio} alt="studio img" rel='norel' className='z-0 absolute h-[100vh] w-screen min-w-[1200px] object-cover'/>
                <div className='container h-screen'>
                    <div className='flex flex-wrap'>
                        {/* <img className='rock1' src={Rock1} alt='Rocks' />
                        <img className='rock2' src={Rock2} alt='Rocks' />
                        <img className='rock3' src={Rock3} alt='Rocks' /> */}
                        {/* <img className='w-[400px] h-[400px] absolute my-[277px] ml-[704px]' src={Woman} alt='Logo' /> */}
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
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;