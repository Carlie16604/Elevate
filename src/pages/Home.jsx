import React from "react";
import Rock1 from '../assets/Ellipse 1.png'
import Rock2 from '../assets/Ellipse 2.png'
import Rock3 from '../assets/Ellipse 3.png'

const Home = () => {

    return (
        <>
            <div className='rockContainer'>
              <img className='rock1' src={Rock1} alt='Rocks'></img>
              <img className='rock2' src={Rock2} alt='Rocks'></img>
              <img className='rock3' src={Rock3} alt='Rocks'></img>
            </div>
                <div className='homeContainer'>
                    <h1 className='text-8xl pt-60 flex justify-center z-10'>
                        Welcome to Pilates!
                        {/* ml-[700px] */}
                    </h1>
                </div>
        </>
    )
}

export default Home;