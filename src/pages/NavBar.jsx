import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()

    // const handleScroll = () => {
    //     if (window.scrollY > 10) {
    //         setSticky(true);
    //         } else {
    //         setSticky(false);
    //     }
    // };

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };

    // window.addEventListener("scroll", handleScroll);

    return (
        <>
            <div className='p-0 w-screen fixed z-50'>
                <div className='container flex flex-row-reverse'>
                    <div className='NavBar'> 
                        <ul className='font-bold cursor-pointer text-2xl'>                
                            <Link to='/' onClick={ goTop }>
                                <div>Home</div>
                            </Link>
                            {/* Add scroll to top here ^^ */}
                            <a>About Us</a>
                            <a href='#classes'>Classes</a>
                            <Link to='/Booking' onClick={ goTop }>
                                <div>Booking</div>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;