import React from "react";
import Rock1 from '../assets/Home/Ellipse 1.png'
import Rock2 from '../assets/Home/Ellipse 2.png'
import Rock3 from '../assets/Home/Ellipse 3.png'
import Logo from '../assets/Home/Logo Placeholder.png'
import Photo from '../assets/Home/Photo.png'

const Home = () => {
    // https://blennd.com/
    // https://uiverse.io/buttons?t=tailwind&page=1

    return (
        <>
            <section id='Home'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <img className='rock1' src={Rock1} alt='Rocks'></img>
                        <img className='rock2' src={Rock2} alt='Rocks'></img>
                        <img className='rock3' src={Rock3} alt='Rocks'></img>
                            <div className='flex h-[650.88px]'>
                                <img className='h-[350px] w-auto pl-[25px] pr-[175px] flex self-center' src={Logo} alt='Logo'></img>
                                    <h1 className='text-[100px] pt-[190px] text-center'>
                                        Welcome to Pilates!
                                    </h1>
                            </div>
                        <div className='whyUs mt-32'>
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
                                    <img src={Photo} alt='Photo'/>
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