import React from "react";
import Rock1 from '../assets/Ellipse 1.png'
import Rock2 from '../assets/Ellipse 2.png'
import Rock3 from '../assets/Ellipse 3.png'
import Logo from '../assets/Logo Placeholder.png'
import Photo from '../assets/Photo.png'

const Home = () => {
    // https://blennd.com/
    // https://uiverse.io/buttons?t=tailwind&page=1

    return (
        <>
            <div className='container'>
              <img className='rock1' src={Rock1} alt='Rocks'></img>
              <img className='rock2' src={Rock2} alt='Rocks'></img>
              <img className='rock3' src={Rock3} alt='Rocks'></img>
                <div className='homeContainer'>
                    <img className='h-[350px] w-auto pl-[25px] pr-[175px] flex self-center' src={Logo} alt='Logo'></img>
                        <h1 className='text-[100px] pt-[190px] text-center'>
                            Welcome to Pilates!
                        </h1>
                </div>
            </div>
            <div className='container'>
                <div className='homeGrid'>
                    <div className='flex flex-col gap-32 p-8'>
                        <div className='gap-8'>
                            <h3 className='relative mb-4 text-5xl flex items-center flex-col text-black gap-1 m-auto'>
                                Why Us?
                            </h3>
                                <p className='flex items-center justify-center'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            <div className=''>
                                <img className='w-[150px] h-[150px]' src={Photo} alt='Photo'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;