import React from "react";
import'../index.css';
import Rock1 from '../assets/Home/Ellipse 1.png'
import Rock2 from '../assets/Home/Ellipse 2.png'
import Rock3 from '../assets/Home/Ellipse 3.png'
import Logo from '../assets/logo.svg'
import Photo from '../assets/Home/Photo.png'
import PilatesBall from '../assets/Home/PilatesBall.jpg'
import Stretch from '../assets/Home/Stretch.png'
import NavBar from '../pages/NavBar';


const Home = () => {
    // https://blennd.com/
    // https://uiverse.io/buttons?t=tailwind&page=1

    return (
        <>
        <NavBar />
            <section id='Home'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <img id='about' className='rock1' src={Rock1} alt='Rocks' />
                        <img className='rock2' src={Rock2} alt='Rocks' />
                        <img className='rock3' src={Rock3} alt='Rocks' />
                            {/* <div className='flex h-[650.88px]'>
                                <img className='h-[250px] w-auto pl-[175px] pr-[145px] flex self-center' src='https://i.shgcdn.com/0cd09b88-6c64-4023-9a6b-d2653989c3bf/' alt='Logo' />
                                    {/* <h1 className='text-[80px] flex flex-wrap content-center text-center'> 
                                <a href="#" className="glitch" data-glitch="Pilates">Pilates</a>
                            </div> */}
                            <div className='grid grid-cols-2 items-center pt-[250px] px-24 relative'>
                                <div>
                                    <h3 className='text-[20px] text-black font-medium uppercase'>
                                        Award Winning Pilates Instructors
                                    </h3>
                                    <h1 className='glitch text-white text-[120px] font-bold leading-[1.2]' data-glitch="Pilates">
                                        Pilates
                                    </h1>
                                    <h3 className='text-[30px] text-black font-medium animate-slide-up'>
                                        A healthy way to workout
                                    </h3>
                                    <p className='animation-slide-up'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    </p>
                                    <button className='px-4 py-2 bg-[#949978] rounded-[400px]'>Let's Talk About Your Health!</button>
                                </div>
                                <div className='flex flex-col'>
                                    <img className='w-[40rem]' src={Stretch} alt='img'/> 
                                </div>
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