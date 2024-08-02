import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };


    return (
        <>
            <div className='p-0 w-screen fixed z-50'>
                <div className='container flex flex-row-reverse'>
                    <div className='NavBar'> 
                        <ul className='font-bold cursor-pointer text-2xl'>                
                            <Link to='/' onClick={ goTop }>
                                <div>Home</div>
                            </Link>
                            <a href='#about'>About Us</a>
                            <Link to='/Booking' onClick={ goTop }>
                                <div>Booking</div>
                            </Link>
                            <Link to='/Contact' onClick={ goTop }>
                                <div>Contact</div>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;