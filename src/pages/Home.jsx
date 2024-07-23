import React from "react";
import Rock1 from '../assets/Ellipse 1.png'
import Rock2 from '../assets/Ellipse 2.png'
import Rock3 from '../assets/Ellipse 3.png'
import Logo from '../assets/Logo Placeholder.png'
import WhyUs from '../assets/Blur.png'

const Home = () => {

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
                            {/* <h3 className='flex'>
                                Lets get Elevated!
                            </h3> */}
                </div>
            </div>
            <div className='container'>
                <section className='grid items-end'>
                    <img className='w-screen h-10' src={WhyUs} alt='Why Us Box'/>
                </section>
            </div>
        </>
    )
}

export default Home;