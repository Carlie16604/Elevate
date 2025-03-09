import React from "react";
import { Link } from 'react-router-dom';

const Portals = () => {

    const goTop = () => {
        window.scrollTo({
          top: 0,
        });
      };
    
    return (
        <>
            <section id='portals' className='mt-[-8rem] mb-[5rem]'>
                <div className='container'>
                    <div className='flex flex-col relative'>
                        <div className='portal-container'>
                            <div className='portals'>
                                <Link to='/Booking' onClick={ goTop }>
                                    <span>Booking</span>
                                </Link>
                            </div>
                            {/* <div className='portals'>
                                <Link to='/Challenge' onClick={ goTop }>
                                    <span>30 Day <br/>Challenge</span>
                                </Link>
                            </div> */}
                            <div className='portals'>
                                <Link to='/Contact' onClick={ goTop }>
                                    <span>Contact</span>
                                </Link>
                            </div>
                            <div className='portals'>
                                <Link to='/Blog' onClick={ goTop }>
                                    <span>Blog</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portals;