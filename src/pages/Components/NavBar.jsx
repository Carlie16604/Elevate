import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/NavBar/Logo.png';

const NavBar = () => {
    // const navigate = useNavigate()

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };


    return (
        <>
            <div className='p-0 w-full fixed z-50 shadow-xl'>
                <div className='px-10 py-2'> 
                    <Link to='/' onClick={ goTop }>
                        <img src={Logo} alt='Elevate Logo' className='absolute h-[58px]'/>
                    </Link>
                    <div className='flex justify-center'>
                        <ul className='font-medium cursor-pointer text-xl'>                
                            <Link to='/' onClick={ goTop }>
                                <div>Home</div>
                            </Link>
                            <Link to='/About' onClick={ goTop }>
                                <div>About Us</div>
                            </Link>
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