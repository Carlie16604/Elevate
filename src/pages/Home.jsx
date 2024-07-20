import React from "react";
import Rock1 from '../assets/Ellipse 1.png'

const Home = () => {

    return (
        <>
            <div>
                <h1>Welcome to Pilates!</h1>
                    <div>
                        <img className='object-center w-50 h-50' src={Rock1} alt=''></img>
                    </div>
            </div>
        </>
    )
}

export default Home;